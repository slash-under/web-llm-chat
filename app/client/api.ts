import { getClientConfig } from "../config/client";
import { ACCESS_CODE_PREFIX, ServiceProvider } from "../constant";
import { ModelType, useAccessStore, useChatStore } from "../store";
export const ROLES = ["system", "user", "assistant"] as const;
export type MessageRole = (typeof ROLES)[number];

export const Models = ["gpt-3.5-turbo", "gpt-4"] as const;
export const TTSModels = ["tts-1", "tts-1-hd"] as const;
export type ChatModel = ModelType;

export interface MultimodalContent {
  type: "text" | "image_url";
  text?: string;
  image_url?: {
    url: string;
  };
}

export interface RequestMessage {
  role: MessageRole;
  content: string | MultimodalContent[];
  fileInfos?: FileInfo[];
}

export interface LLMConfig {
  model: string;
  temperature?: number;
  top_p?: number;
  stream?: boolean;
  presence_penalty?: number;
  frequency_penalty?: number;
}

export interface LLMAgentConfig {
  maxIterations: number;
  returnIntermediateSteps: boolean;
  useTools?: (string | undefined)[];
}

export interface SpeechOptions {
  model: string;
  input: string;
  voice: string;
  response_format?: string;
  speed?: number;
  onController?: (controller: AbortController) => void;
}

export interface TranscriptionOptions {
  model?: "whisper-1";
  file: Blob;
  language?: string;
  prompt?: string;
  response_format?: "json" | "text" | "srt" | "verbose_json" | "vtt";
  temperature?: number;
  onController?: (controller: AbortController) => void;
}

export interface ChatOptions {
  messages: RequestMessage[];
  config: LLMConfig;
  onToolUpdate?: (toolName: string, toolInput: string) => void;
  onUpdate?: (message: string, chunk: string) => void;
  onFinish: (message: string) => void;
  onError?: (err: Error) => void;
  onController?: (controller: AbortController) => void;
}

export interface AgentChatOptions {
  chatSessionId?: string;
  messages: RequestMessage[];
  config: LLMConfig;
  agentConfig: LLMAgentConfig;
  onToolUpdate?: (toolName: string, toolInput: string) => void;
  onUpdate?: (message: string, chunk: string) => void;
  onFinish: (message: string) => void;
  onError?: (err: Error) => void;
  onController?: (controller: AbortController) => void;
}

export interface CreateRAGStoreOptions {
  chatSessionId: string;
  fileInfos: FileInfo[];
  onError?: (err: Error) => void;
  onController?: (controller: AbortController) => void;
}

export interface LLMUsage {
  used: number;
  total: number;
}

export interface LLMModel {
  name: string;
  available: boolean;
  provider: LLMModelProvider;
}

export interface LLMModelProvider {
  id: string;
  providerName: string;
  providerType: string;
}

export abstract class LLMApi {
  abstract chat(options: ChatOptions): Promise<void>;
  abstract speech(options: SpeechOptions): Promise<ArrayBuffer>;
  abstract transcription(options: TranscriptionOptions): Promise<string>;
  abstract toolAgentChat(options: AgentChatOptions): Promise<void>;
  abstract createRAGStore(options: CreateRAGStoreOptions): Promise<void>;
  abstract usage(): Promise<LLMUsage>;
  abstract models(): Promise<LLMModel[]>;
}

export abstract class ToolApi {
  abstract call(input: string): Promise<string>;
  abstract name: string;
  abstract description: string;
}

export function getHeaders() {
  const accessStore = useAccessStore.getState();
  let headers: Record<string, string> = {};
  const modelConfig = useChatStore.getState().currentSession().mask.modelConfig;
  const isGoogle = modelConfig.model.startsWith("gemini");
  if (!ignoreHeaders && !isGoogle) {
    headers = {
      "Content-Type": "application/json",
      "x-requested-with": "XMLHttpRequest",
      Accept: "application/json",
    };
  }
  const isAzure = accessStore.provider === ServiceProvider.Azure;
  let authHeader = "Authorization";
  const apiKey = isGoogle
    ? accessStore.googleApiKey
    : isAzure
      ? accessStore.azureApiKey
      : accessStore.openaiApiKey;

  const makeBearer = (s: string) =>
    `${isGoogle || isAzure ? "" : "Bearer "}${s.trim()}`;
  const validString = (x: string) => x && x.length > 0;

  // use user's api key first
  if (validString(apiKey)) {
    authHeader = isGoogle ? "x-goog-api-key" : authHeader;
    headers[authHeader] = makeBearer(apiKey);
    if (isAzure) headers["api-key"] = makeBearer(apiKey);
  } else if (
    accessStore.enabledAccessControl() &&
    validString(accessStore.accessCode)
  ) {
    headers[authHeader] = makeBearer(
      ACCESS_CODE_PREFIX + accessStore.accessCode,
    );
  }

  return headers;
}
