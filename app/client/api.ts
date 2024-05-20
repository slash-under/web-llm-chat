import { CacheType, ModelType } from "../store";
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
  cache: CacheType;
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
  display_name: string;
  provider?: string;
  size?: string;
  quantization?: string;
  context_length?: string;
  is_default?: boolean;
}

export abstract class LLMApi {
  abstract chat(options: ChatOptions): Promise<void>;
  abstract speech(options: SpeechOptions): Promise<ArrayBuffer>;
  abstract transcription(options: TranscriptionOptions): Promise<string>;
  abstract toolAgentChat(options: AgentChatOptions): Promise<void>;
  abstract createRAGStore(options: CreateRAGStoreOptions): Promise<void>;
  abstract usage(): Promise<LLMUsage>;
  abstract abort(): Promise<void>;
}

export abstract class ToolApi {
  abstract call(input: string): Promise<string>;
  abstract name: string;
  abstract description: string;
}
