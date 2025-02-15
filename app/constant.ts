import { ModelRecord } from "./client/api";

export const OWNER = "mlc-ai";
export const REPO = "web-llm-chat";
export const WEBLLM_HOME_URL = "https://webllm.mlc.ai";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  Templates = "/templates",
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
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Templates = "templates-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const DEFAULT_SIDEBAR_WIDTH = 320;
export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 260;
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

export const DEFAULT_MODELS: ModelRecord[] = [
  // Llama-3.1 8B
  {
    name: "Llama-3.1-8B-Instruct-q4f32_1-MLC-1k",
    display_name: "Llama",
    provider: "Meta",
    size: "8B",
    quantization: "q4f32",
    family: "Llama 3.1",
    vram_required_MB: 5295.7,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.6,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.9,
    },
  },
  {
    name: "Llama-3.1-8B-Instruct-q4f16_1-MLC-1k",
    display_name: "Llama",
    provider: "Meta",
    size: "8B",
    quantization: "q4f16_1",
    family: "Llama 3.1",
    vram_required_MB: 4598.34,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.6,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.9,
    },
  },
  {
    name: "Llama-3.1-8B-Instruct-q4f32_1-MLC",
    display_name: "Llama",
    provider: "Meta",
    size: "8B",
    quantization: "q4f32",
    family: "Llama 3.1",
    vram_required_MB: 6101.01,
    low_resource_required: false,
    recommended_config: {
      temperature: 0.6,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.9,
    },
  },
  {
    name: "Llama-3.1-8B-Instruct-q4f16_1-MLC",
    display_name: "Llama",
    provider: "Meta",
    size: "8B",
    quantization: "q4f16_1",
    family: "Llama 3.1",
    vram_required_MB: 5001,
    low_resource_required: false,
    recommended_config: {
      temperature: 0.6,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.9,
    },
  },
  {
    name: "Hermes-2-Pro-Llama-3-8B-q4f16_1-MLC",
    display_name: "Hermes",
    provider: "NousResearch",
    size: "8B",
    quantization: "q4f16_1",
    family: "Hermes 2 Pro",
    vram_required_MB: 4976.13,
    low_resource_required: false,
    recommended_config: {
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1,
    },
  },
  {
    name: "Hermes-2-Pro-Llama-3-8B-q4f32_1-MLC",
    display_name: "Hermes",
    provider: "NousResearch",
    size: "8B",
    quantization: "q4f32",
    family: "Hermes 2 Pro",
    vram_required_MB: 6051.27,
    low_resource_required: false,
    recommended_config: {
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1,
    },
  },
  {
    name: "Hermes-2-Pro-Mistral-7B-q4f16_1-MLC",
    display_name: "Hermes",
    provider: "NousResearch",
    size: "7B",
    quantization: "q4f16_1",
    family: "Hermes 2 Pro",
    vram_required_MB: 4033.28,
    low_resource_required: false,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.95,
    },
  },
  {
    name: "Phi-3-mini-4k-instruct-q4f16_1-MLC",
    display_name: "Phi",
    provider: "MLC",
    quantization: "q4f16_1",

    family: "Phi 3 Mini",
    vram_required_MB: 3672.07,
    low_resource_required: false,
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.95,
    },
  },
  {
    name: "Phi-3-mini-4k-instruct-q4f32_1-MLC",
    display_name: "Phi",
    provider: "MLC",
    quantization: "q4f32",
    family: "Phi 3 Mini",
    vram_required_MB: 5483.12,
    low_resource_required: false,
    recommended_config: {
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1,
    },
  },
  {
    name: "Phi-3-mini-4k-instruct-q4f16_1-MLC-1k",
    display_name: "Phi",
    provider: "MLC",
    quantization: "q4f16_1",
    family: "Phi 3 Mini",
    vram_required_MB: 2520.07,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.95,
    },
  },
  {
    name: "Phi-3-mini-4k-instruct-q4f32_1-MLC-1k",
    display_name: "Phi",
    provider: "MLC",
    quantization: "q4f32",
    family: "Phi 3 Mini",
    vram_required_MB: 3179.12,
    low_resource_required: true,
    recommended_config: {
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1,
    },
  },
  {
    name: "Mistral-7B-Instruct-v0.3-q4f16_1-MLC",
    display_name: "Mistral",
    provider: "Mistral AI",
    size: "7B",
    quantization: "q4f16_1",
    family: "Mistral",
    vram_required_MB: 4573.39,
    low_resource_required: false,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1,
    },
  },
  {
    name: "Mistral-7B-Instruct-v0.3-q4f32_1-MLC",
    display_name: "Mistral",
    provider: "Mistral AI",
    size: "7B",
    quantization: "q4f32",
    family: "Mistral",
    vram_required_MB: 5619.27,
    low_resource_required: false,
    recommended_config: {
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1,
    },
  },
  {
    name: "Mistral-7B-Instruct-v0.2-q4f16_1-MLC",
    display_name: "Mistral",
    provider: "Mistral AI",
    size: "7B",
    quantization: "q4f16_1",
    family: "Mistral",
    vram_required_MB: 4573.39,
    low_resource_required: false,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "OpenHermes-2.5-Mistral-7B-q4f16_1-MLC",
    display_name: "OpenHermes",
    provider: "NousResearch",
    size: "7B",
    quantization: "q4f16_1",
    family: "Hermes",
    vram_required_MB: 4573.39,
    low_resource_required: false,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "NeuralHermes-2.5-Mistral-7B-q4f16_1-MLC",
    display_name: "NeuralHermes",
    provider: "Maxime Labonne",
    size: "7B",
    quantization: "q4f16_1",
    family: "Hermes",
    vram_required_MB: 4573.39,
    low_resource_required: false,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "WizardMath-7B-V1.1-q4f16_1-MLC",
    display_name: "WizardMath",
    provider: "WizardLM",
    size: "7B",
    quantization: "q4f16_1",
    family: "WizardMath",
    vram_required_MB: 4573.39,
    low_resource_required: false,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "SmolLM-1.7B-Instruct-q0f16-MLC",
    display_name: "SmolLM",
    provider: "SmolLM",
    size: "1.7B",
    quantization: "q0f16",
    family: "SmolLM",
    vram_required_MB: 3736.19,
    low_resource_required: true,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.6,
      top_p: 0.92,
    },
  },
  {
    name: "SmolLM-1.7B-Instruct-q0f32-MLC",
    display_name: "SmolLM",
    provider: "SmolLM",
    size: "1.7B",
    quantization: "q0f32",
    family: "SmolLM",
    vram_required_MB: 7432.38,
    low_resource_required: false,
    recommended_config: {
      temperature: 0.6,
      top_p: 0.92,
    },
  },
  {
    name: "SmolLM-1.7B-Instruct-q4f16_1-MLC",
    display_name: "SmolLM",
    provider: "SmolLM",
    size: "1.7B",
    quantization: "q4f16_1",
    family: "SmolLM",
    vram_required_MB: 1390.19,
    low_resource_required: true,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.6,
      top_p: 0.92,
    },
  },
  {
    name: "SmolLM-1.7B-Instruct-q4f32_1-MLC",
    display_name: "SmolLM",
    provider: "SmolLM",
    size: "1.7B",
    quantization: "q4f32",
    family: "SmolLM",
    vram_required_MB: 1924.38,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.6,
      top_p: 0.92,
    },
  },
  {
    name: "SmolLM-360M-Instruct-q0f16-MLC",
    display_name: "SmolLM",
    provider: "SmolLM",
    size: "360M",
    quantization: "q0f16",
    family: "SmolLM",
    vram_required_MB: 791.99,
    low_resource_required: true,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.6,
      top_p: 0.92,
    },
  },
  {
    name: "SmolLM-360M-Instruct-q0f32-MLC",
    display_name: "SmolLM",
    provider: "SmolLM",
    size: "360M",
    quantization: "q0f32",
    family: "SmolLM",
    vram_required_MB: 1583.99,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.6,
      top_p: 0.92,
    },
  },
  {
    name: "SmolLM-360M-Instruct-q4f16_1-MLC",
    display_name: "SmolLM",
    provider: "SmolLM",
    size: "360M",
    quantization: "q4f16_1",
    family: "SmolLM",
    vram_required_MB: 296.06,
    low_resource_required: true,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.6,
      top_p: 0.92,
    },
  },
  {
    name: "SmolLM-360M-Instruct-q4f32_1-MLC",
    display_name: "SmolLM",
    provider: "SmolLM",
    size: "360M",
    quantization: "q4f32",
    family: "SmolLM",
    vram_required_MB: 419.61,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.6,
      top_p: 0.92,
    },
  },
  {
    name: "SmolLM-135M-Instruct-q0f16-MLC",
    display_name: "SmolLM",
    provider: "SmolLM",
    size: "135M",
    quantization: "q0f16",
    family: "SmolLM",
    vram_required_MB: 314.69,
    low_resource_required: true,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.6,
      top_p: 0.92,
    },
  },
  {
    name: "SmolLM-135M-Instruct-q0f32-MLC",
    display_name: "SmolLM",
    provider: "SmolLM",
    size: "135M",
    quantization: "q0f32",
    family: "SmolLM",
    vram_required_MB: 629.38,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.6,
      top_p: 0.92,
    },
  },
  {
    name: "SmolLM-135M-Instruct-q4f16_1-MLC",
    display_name: "SmolLM",
    provider: "SmolLM",
    size: "135M",
    quantization: "q4f16_1",
    family: "SmolLM",
    vram_required_MB: 130.33,
    low_resource_required: true,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.6,
      top_p: 0.92,
    },
  },
  {
    name: "SmolLM-135M-Instruct-q4f32_1-MLC",
    display_name: "SmolLM",
    provider: "SmolLM",
    size: "135M",
    quantization: "q4f32",
    family: "SmolLM",
    vram_required_MB: 196.54,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.6,
      top_p: 0.92,
    },
  },
  {
    name: "Qwen2-0.5B-Instruct-q4f16_1-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "0.5B",
    quantization: "q4f16_1",
    family: "Qwen 2",
    vram_required_MB: 500, //rough estimate
    low_resource_required: true,
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  {
    name: "Qwen2-0.5B-Instruct-q0f16-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "0.5B",
    quantization: "q0f16",

    family: "Qwen 2",
    vram_required_MB: 1624.12,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  {
    name: "Qwen2-0.5B-Instruct-q0f32-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "0.5B",
    quantization: "q0f32",

    family: "Qwen 2",
    vram_required_MB: 2654.75,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  {
    name: "Qwen2-1.5B-Instruct-q4f16_1-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "1.5B",
    quantization: "q4f16_1",

    family: "Qwen 2",
    vram_required_MB: 1629.75,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  {
    name: "Qwen2-1.5B-Instruct-q4f32_1-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "1.5B",
    quantization: "q4f32",

    family: "Qwen 2",
    vram_required_MB: 1888.97,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  {
    name: "Qwen2-7B-Instruct-q4f16_1-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "7B",
    quantization: "q4f16_1",

    family: "Qwen 2",
    vram_required_MB: 5106.67,
    low_resource_required: false,
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  {
    name: "Qwen2-7B-Instruct-q4f32_1-MLC",
    display_name: "Qwen",
    provider: "Alibaba",
    size: "7B",
    quantization: "q4f32",

    family: "Qwen 2",
    vram_required_MB: 5900.09,
    low_resource_required: false,
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.8,
    },
  },
  {
    name: "gemma-2b-it-q4f16_1-MLC",
    display_name: "Gemma",
    provider: "Google",
    size: "2B",
    quantization: "q4f16_1",
    family: "Gemma",
    vram_required_MB: 1476.52,
    low_resource_required: false,
    buffer_size_required_bytes: 262144000,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 1,
      top_p: 0.95,
    },
  },
  {
    name: "gemma-2b-it-q4f32_1-MLC",
    display_name: "Gemma",
    provider: "Google",
    size: "2B",
    quantization: "q4f32",

    family: "Gemma",
    vram_required_MB: 1750.66,
    low_resource_required: false,
    buffer_size_required_bytes: 262144000,
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 1,
      top_p: 0.95,
    },
  },
  {
    name: "gemma-2b-it-q4f16_1-MLC-1k",
    display_name: "Gemma",
    provider: "Google",
    size: "2B",
    quantization: "q4f16_1",
    family: "Gemma",
    vram_required_MB: 1476.52,
    low_resource_required: true,
    buffer_size_required_bytes: 262144000,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 1,
      top_p: 0.95,
    },
  },
  {
    name: "gemma-2b-it-q4f32_1-MLC-1k",
    display_name: "Gemma",
    provider: "Google",
    size: "2B",
    quantization: "q4f32",
    family: "Gemma",
    vram_required_MB: 1750.66,
    low_resource_required: true,
    buffer_size_required_bytes: 262144000,
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 1,
      top_p: 0.95,
    },
  },
  {
    name: "stablelm-2-zephyr-1_6b-q4f16_1-MLC",
    display_name: "StableLM",
    provider: "Hugging Face",
    size: "1.6B",
    quantization: "q4f16_1",
    family: "StableLM 2",
    vram_required_MB: 2087.66,
    low_resource_required: false,
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.95,
    },
  },
  {
    name: "stablelm-2-zephyr-1_6b-q4f32_1-MLC",
    display_name: "StableLM",
    provider: "Hugging Face",
    size: "1.6B",
    quantization: "q4f32",
    family: "StableLM 2",
    vram_required_MB: 2999.33,
    low_resource_required: false,
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.95,
    },
  },
  {
    name: "stablelm-2-zephyr-1_6b-q4f16_1-MLC-1k",
    display_name: "StableLM",
    provider: "Hugging Face",
    size: "1.6B",
    quantization: "q4f16_1",
    family: "StableLM 2",
    vram_required_MB: 1511.66,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.95,
    },
  },
  {
    name: "stablelm-2-zephyr-1_6b-q4f32_1-MLC-1k",
    display_name: "StableLM",
    provider: "Hugging Face",
    size: "1.6B",
    quantization: "q4f32",
    family: "StableLM 2",
    vram_required_MB: 1847.33,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.95,
    },
  },
  {
    name: "RedPajama-INCITE-Chat-3B-v1-q4f16_1-MLC",
    display_name: "RedPajama",
    provider: "Together",
    size: "3B",
    quantization: "q4f16_1",
    family: "RedPajama",
    vram_required_MB: 2972.09,
    low_resource_required: false,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "RedPajama-INCITE-Chat-3B-v1-q4f32_1-MLC",
    display_name: "RedPajama",
    provider: "Together",
    size: "3B",
    quantization: "q4f32",
    family: "RedPajama",
    vram_required_MB: 3928.09,
    low_resource_required: false,
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "RedPajama-INCITE-Chat-3B-v1-q4f16_1-MLC-1k",
    display_name: "RedPajama",
    provider: "Together",
    size: "3B",
    quantization: "q4f16_1",
    family: "RedPajama",
    vram_required_MB: 2041.09,
    low_resource_required: true,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "RedPajama-INCITE-Chat-3B-v1-q4f32_1-MLC-1k",
    display_name: "RedPajama",
    provider: "Together",
    size: "3B",
    quantization: "q4f32",
    family: "RedPajama",
    vram_required_MB: 2558.09,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "TinyLlama-1.1B-Chat-v1.0-q4f16_1-MLC",
    display_name: "TinyLlama",
    provider: "Zhang Peiyuan",
    size: "1.1B",
    quantization: "q4f16_1",
    family: "TinyLlama",
    vram_required_MB: 697.24,
    low_resource_required: true,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1,
    },
  },
  {
    name: "TinyLlama-1.1B-Chat-v1.0-q4f32_1-MLC",
    display_name: "TinyLlama",
    provider: "Zhang Peiyuan",
    size: "1.1B",
    quantization: "q4f32",
    family: "TinyLlama",
    vram_required_MB: 839.98,
    low_resource_required: true,
    recommended_config: {
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1,
    },
  },
  {
    name: "TinyLlama-1.1B-Chat-v1.0-q4f16_1-MLC-1k",
    display_name: "TinyLlama",
    provider: "Zhang Peiyuan",
    size: "1.1B",
    quantization: "q4f16_1",
    family: "TinyLlama",
    vram_required_MB: 675.24,
    low_resource_required: true,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1,
    },
  },
  {
    name: "TinyLlama-1.1B-Chat-v1.0-q4f32_1-MLC-1k",
    display_name: "TinyLlama",
    provider: "Zhang Peiyuan",
    size: "1.1B",
    quantization: "q4f32",
    family: "TinyLlama",
    vram_required_MB: 795.98,
    low_resource_required: true,
    recommended_config: {
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 1,
    },
  },
  {
    name: "Llama-3.1-70B-Instruct-q3f16_1-MLC",
    display_name: "Llama",
    provider: "Meta",
    size: "70B",
    quantization: "q3f16",
    family: "Llama 3.1",
    vram_required_MB: 31153.13,
    low_resource_required: false,
    recommended_config: {
      temperature: 0.6,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.9,
    },
  },
  {
    name: "Llama-3-8B-Instruct-q4f32_1-MLC-1k",
    display_name: "Llama",
    provider: "Meta",
    size: "8B",
    quantization: "q4f32",
    family: "Llama 3",
    vram_required_MB: 5295.7,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.6,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.9,
    },
  },
  {
    name: "Llama-3-8B-Instruct-q4f16_1-MLC-1k",
    display_name: "Llama",
    provider: "Meta",
    size: "8B",
    quantization: "q4f16",
    family: "Llama 3",
    vram_required_MB: 4598.34,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.6,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.9,
    },
  },
  {
    name: "Llama-3-8B-Instruct-q4f32_1-MLC",
    display_name: "Llama",
    provider: "Meta",
    size: "8B",
    quantization: "q4f32",
    family: "Llama 3",
    vram_required_MB: 6101.01,
    low_resource_required: false,
    recommended_config: {
      temperature: 0.6,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.9,
    },
  },
  {
    name: "Llama-3-8B-Instruct-q4f16_1-MLC",
    display_name: "Llama",
    provider: "Meta",
    size: "8B",
    quantization: "q4f16",
    family: "Llama 3",
    vram_required_MB: 5001.0,
    low_resource_required: false,
    recommended_config: {
      temperature: 0.6,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.9,
    },
  },
  {
    name: "Llama-3-70B-Instruct-q3f16_1-MLC",
    display_name: "Llama",
    provider: "Meta",
    size: "70B",
    quantization: "q3f16",
    family: "Llama 3",
    vram_required_MB: 31153.13,
    low_resource_required: false,
    recommended_config: {
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      top_p: 0.95,
    },
  },
  {
    name: "Llama-2-7b-chat-hf-q4f32_1-MLC-1k",
    display_name: "Llama",
    provider: "Meta",
    size: "7B",
    quantization: "q4f32",
    family: "Llama 2",
    vram_required_MB: 5284.01,
    low_resource_required: false,
    recommended_config: {
      temperature: 0.6,
      top_p: 0.9,
    },
  },
  {
    name: "Llama-2-7b-chat-hf-q4f16_1-MLC-1k",
    display_name: "Llama",
    provider: "Meta",
    size: "7B",
    quantization: "q4f16_1",
    family: "Llama 2",
    vram_required_MB: 4618.52,
    low_resource_required: false,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.6,
      top_p: 0.9,
    },
  },
  {
    name: "Llama-2-7b-chat-hf-q4f32_1-MLC",
    display_name: "Llama",
    provider: "Meta",
    size: "7B",
    quantization: "q4f32",
    family: "Llama 2",
    vram_required_MB: 9109.03,
    low_resource_required: false,
    recommended_config: {
      temperature: 0.6,
      top_p: 0.9,
    },
  },
  {
    name: "Llama-2-7b-chat-hf-q4f16_1-MLC",
    display_name: "Llama",
    provider: "Meta",
    size: "7B",
    quantization: "q4f16_1",
    family: "Llama 2",
    vram_required_MB: 6749.02,
    low_resource_required: false,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.6,
      top_p: 0.9,
    },
  },
  {
    name: "Llama-2-13b-chat-hf-q4f16_1-MLC",
    display_name: "Llama",
    provider: "Meta",
    size: "13B",
    quantization: "q4f16_1",
    family: "Llama 2",
    vram_required_MB: 11814.09,
    low_resource_required: false,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.6,
      top_p: 0.9,
    },
  },
  {
    name: "phi-2-q4f16_1-MLC",
    display_name: "Phi",
    provider: "Microsoft",
    quantization: "q4f16_1",
    family: "Phi 2",
    vram_required_MB: 3053.97,
    low_resource_required: false,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "phi-2-q4f32_1-MLC",
    display_name: "Phi",
    provider: "Microsoft",
    quantization: "q4f32",
    family: "Phi 2",
    vram_required_MB: 4032.48,
    low_resource_required: false,
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "phi-2-q4f16_1-MLC-1k",
    display_name: "Phi",
    provider: "Microsoft",
    quantization: "q4f16_1",
    family: "Phi 2",
    vram_required_MB: 2131.97,
    low_resource_required: true,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "phi-2-q4f32_1-MLC-1k",
    display_name: "Phi",
    provider: "Microsoft",
    quantization: "q4f32",
    family: "Phi 2",
    vram_required_MB: 2740.48,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "phi-1_5-q4f16_1-MLC",
    display_name: "Phi",
    provider: "Microsoft",
    quantization: "q4f16_1",
    family: "Phi 1.5",
    vram_required_MB: 1210.09,
    low_resource_required: true,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "phi-1_5-q4f32_1-MLC",
    display_name: "Phi",
    provider: "Microsoft",
    quantization: "q4f32",
    family: "Phi 1.5",
    vram_required_MB: 1682.09,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "phi-1_5-q4f16_1-MLC-1k",
    display_name: "Phi",
    provider: "Microsoft",
    quantization: "q4f16_1",
    family: "Phi 1.5",
    vram_required_MB: 1210.09,
    low_resource_required: true,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "phi-1_5-q4f32_1-MLC-1k",
    display_name: "Phi",
    provider: "Microsoft",
    quantization: "q4f32",
    family: "Phi 1.5",
    vram_required_MB: 1682.09,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC",
    display_name: "TinyLlama",
    provider: "Zhang Peiyuan",
    size: "1.1B",
    quantization: "q4f16_1",
    family: "TinyLlama",
    vram_required_MB: 697.24,
    low_resource_required: true,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC",
    display_name: "TinyLlama",
    provider: "Zhang Peiyuan",
    size: "1.1B",
    quantization: "q4f32",
    family: "TinyLlama",
    vram_required_MB: 839.98,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC-1k",
    display_name: "TinyLlama",
    provider: "Zhang Peiyuan",
    size: "1.1B",
    quantization: "q4f16_1",
    family: "TinyLlama",
    vram_required_MB: 675.24,
    low_resource_required: true,
    required_features: ["shader-f16"],
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
  {
    name: "TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC-1k",
    display_name: "TinyLlama",
    provider: "Zhang Peiyuan",
    size: "1.1B",
    quantization: "q4f32",
    family: "TinyLlama",
    vram_required_MB: 795.98,
    low_resource_required: true,
    recommended_config: {
      temperature: 0.7,
      top_p: 0.95,
    },
  },
];

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;

export const LOG_LEVELS = {
  TRACE: 0,
  DEBUG: 1,
  INFO: 2,
  WARN: 3,
  ERROR: 4,
  SILENT: 5,
};
