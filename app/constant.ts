import { prebuiltAppConfig } from "@neet-nestor/web-llm";
import { LLMModel } from "./client/api";

export const OWNER = "mlc-ai";
export const REPO = "web-llm-chat";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  Templates = "/templates",
  Plugins = "/plugins",
  Auth = "/auth",
}

export enum ApiPath {
  Cors = "",
}

export enum SlotID {
  AppBody = "app-body",
  CustomModel = "custom-model",
}

export enum FileName {
  Templates = "templates.json",
  Plugins = "plugins.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Templates = "templates-store",
  Plugin = "plugin-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const DEFAULT_SIDEBAR_WIDTH = 300;
export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (name: string) => "unfinished-input-" + name;

export const STORAGE_KEY = "chatgpt-next-web";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang

export const DEFAULT_SYSTEM_TEMPLATE = `
You are an AI large language model assistant trained by {{provider}}.
You are currently engaging with users on WebLLM Chat, an open-source AI Chatbot UI developed by MLC.ai (Machine Learning Compilation).
Model display_name:  {{model}}
The current date and time is {{time}}.
Latex inline format: \\(x^2\\) 
Latex block format: $$e=mc^2$$
`;

export const DEFAULT_MODELS: LLMModel[] = [
  {
    name: "Llama-3-8B-Instruct-q4f32_1",
    display_name: "Llama-3-8B-Instruct",
    provider: "Meta",
    size: "8B",
    precision: "q4f32_1",
    is_default: true,
  },
  {
    name: "Llama-3-8B-Instruct-q4f16_1",
    display_name: "Llama-3-8B-Instruct",
    provider: "Meta",
    size: "8B",
    precision: "q4f16_1",
  },
  {
    name: "Llama-3-8B-Instruct-q4f32_1-1k",
    display_name: "Llama-3-8B-Instruct",
    provider: "Meta",
    size: "8B",
    precision: "q4f32_1",
  },
  {
    name: "Llama-3-8B-Instruct-q4f16_1-1k",
    display_name: "Llama-3-8B-Instruct",
    provider: "Meta",
    size: "8B",
    precision: "q4f16_1",
  },
  {
    name: "Llama-3-70B-Instruct-q3f16_1",
    display_name: "Llama-3-70B-Instruct",
    provider: "Meta",
    size: "70B",
    precision: "q3f16_1",
  },
  {
    name: "Llama-2-7b-chat-hf-q4f32_1-1k",
    display_name: "Llama-2-7b-chat-hf",
    provider: "Meta",
    size: "7B",
    precision: "q4f32_1",
  },
  {
    name: "Llama-2-7b-chat-hf-q4f16_1-1k",
    display_name: "Llama-2-7b-chat-hf",
    provider: "Meta",
    size: "7B",
    precision: "q4f16_1",
  },
  {
    name: "Llama-2-7b-chat-hf-q4f32_1",
    display_name: "Llama-2-7b-chat-hf",
    provider: "Meta",
    size: "7B",
    precision: "q4f32_1",
  },
  {
    name: "Llama-2-7b-chat-hf-q4f16_1",
    display_name: "Llama-2-7b-chat-hf",
    provider: "Meta",
    size: "7B",
    precision: "q4f16_1",
  },
  {
    name: "Llama-2-13b-chat-hf-q4f16_1",
    display_name: "Llama-2-13b-chat-hf",
    provider: "Meta",
    size: "13B",
    precision: "q4f16_1",
  },
  {
    name: "WizardMath-7B-V1.1-q4f16_1",
    display_name: "WizardMath-7B-V1.1",
    provider: "WizardLM",
    size: "7B",
    precision: "q4f16_1",
  },
  {
    name: "Mistral-7B-Instruct-v0.2-q4f16_1",
    display_name: "Mistral-7B-Instruct-v0.2",
    provider: "Mistral AI",
    size: "7B",
    precision: "q4f16_1",
  },
  {
    name: "OpenHermes-2.5-Mistral-7B-q4f16_1",
    display_name: "OpenHermes-2.5-Mistral-7B",
    provider: "NousResearch",
    size: "7B",
    precision: "q4f16_1",
  },
  {
    name: "NeuralHermes-2.5-Mistral-7B-q4f16_1",
    display_name: "NeuralHermes-2.5-Mistral-7B",
    provider: "Maxime Labonne",
    size: "7B",
    precision: "q4f16_1",
  },
  {
    name: "Hermes-2-Pro-Mistral-7B-q4f16_1",
    display_name: "Hermes-2-Pro-Mistral-7B",
    provider: "NousResearch",
    size: "7B",
    precision: "q4f16_1",
  },
  {
    name: "gemma-2b-it-q4f16_1",
    display_name: "gemma-2b-it",
    provider: "Google",
    size: "2B",
    precision: "q4f16_1",
  },
  {
    name: "gemma-2b-it-q4f32_1",
    display_name: "gemma-2b-it",
    provider: "Google",
    size: "2B",
    precision: "q4f32_1",
  },
  {
    name: "gemma-2b-it-q4f16_1-1k",
    display_name: "gemma-2b-it",
    provider: "Google",
    size: "2B",
    precision: "q4f16_1",
  },
  {
    name: "gemma-2b-it-q4f32_1-1k",
    display_name: "gemma-2b-it",
    provider: "Google",
    size: "2B",
    precision: "q4f32_1",
  },
  {
    name: "RedPajama-INCITE-Chat-3B-v1-q4f16_1",
    display_name: "RedPajama-INCITE-Chat-3B-v1",
    provider: "Together",
    size: "3B",
    precision: "q4f16_1",
  },
  {
    name: "RedPajama-INCITE-Chat-3B-v1-q4f32_1",
    display_name: "RedPajama-INCITE-Chat-3B-v1",
    provider: "Together",
    size: "3B",
    precision: "q4f32_1",
  },
  {
    name: "RedPajama-INCITE-Chat-3B-v1-q4f16_1-1k",
    display_name: "RedPajama-INCITE-Chat-3B-v1",
    provider: "Together",
    size: "3B",
    precision: "q4f16_1",
  },
  {
    name: "RedPajama-INCITE-Chat-3B-v1-q4f32_1-1k",
    display_name: "RedPajama-INCITE-Chat-3B-v1",
    provider: "Together",
    size: "3B",
    precision: "q4f32_1",
  },
  {
    name: "Phi2-q0f16",
    display_name: "Phi-2",
    provider: "Microsoft",
    size: "N/A",
    precision: "q0f16",
  },
  {
    name: "Phi2-q0f32",
    display_name: "Phi-2",
    provider: "Microsoft",
    size: "N/A",
    precision: "q0f32",
  },
  {
    name: "Phi2-q4f16_1",
    display_name: "Phi-2",
    provider: "Microsoft",
    size: "N/A",
    precision: "q4f16_1",
  },
  {
    name: "Phi2-q4f32_1",
    display_name: "Phi-2",
    provider: "Microsoft",
    size: "N/A",
    precision: "q4f32_1",
  },
  {
    name: "Phi2-q4f16_1-1k",
    display_name: "Phi-2",
    provider: "Microsoft",
    size: "N/A",
    precision: "q4f16_1",
  },
  {
    name: "Phi2-q4f32_1-1k",
    display_name: "Phi-2",
    provider: "Microsoft",
    size: "N/A",
    precision: "q4f32_1",
  },
  {
    name: "Phi1.5-q0f16",
    display_name: "Phi-1.5",
    provider: "Microsoft",
    size: "N/A",
    precision: "q0f16",
  },
  {
    name: "Phi1.5-q0f32",
    display_name: "Phi-1.5",
    provider: "Microsoft",
    size: "N/A",
    precision: "q0f32",
  },
  {
    name: "Phi1.5-q4f16_1-1k",
    display_name: "Phi-1.5",
    provider: "Microsoft",
    size: "N/A",
    precision: "q4f16_1",
  },
  {
    name: "Phi1.5-q4f32_1-1k",
    display_name: "Phi-1.5",
    provider: "Microsoft",
    size: "N/A",
    precision: "q4f32_1",
  },
  {
    name: "TinyLlama-1.1B-Chat-v0.4-q0f16",
    display_name: "TinyLlama-1.1B-Chat-v0.4",
    provider: "Zhang Peiyuan",
    size: "1.1B",
    precision: "q0f16",
  },
  {
    name: "TinyLlama-1.1B-Chat-v0.4-q0f32",
    display_name: "TinyLlama-1.1B-Chat-v0.4",
    provider: "Zhang Peiyuan",
    size: "1.1B",
    precision: "q0f32",
  },
  {
    name: "TinyLlama-1.1B-Chat-v0.4-q4f16_1-1k",
    display_name: "TinyLlama-1.1B-Chat-v0.4",
    provider: "Zhang Peiyuan",
    size: "1.1B",
    precision: "q4f16_1",
  },
  {
    name: "TinyLlama-1.1B-Chat-v0.4-q4f32_1-1k",
    display_name: "TinyLlama-1.1B-Chat-v0.4",
    provider: "Zhang Peiyuan",
    size: "1.1B",
    precision: "q4f32_1",
  },
];

export const DEFAULT_TTS_ENGINE = "WebAPI";
export const DEFAULT_TTS_ENGINES = ["Piper", "WebAPI"];

export const DEFAULT_TTS_VOICE = "[CHANGE ME]";
export const DEFAULT_TTS_VOICES = ["N/A", "N/A"];

export const DEFAULT_STT_ENGINE = "WebAPI";
export const DEFAULT_STT_ENGINES = ["WebAPI", "OpenAI Whisper"];
export const FIREFOX_DEFAULT_STT_ENGINE = "OpenAI Whisper";

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;
