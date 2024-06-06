import { AppConfig, ChatOptions, GenerationConfig } from "./config";
import { InitProgressReport } from "./types";
import { ChatCompletionRequestStreaming, ChatCompletionRequestNonStreaming, ChatCompletion, ChatCompletionChunk } from "./openai_api_protocols/index";
/**
 * Message kind used by worker
 */
type RequestKind = ("return" | "throw" | "reload" | "generate" | "runtimeStatsText" | "interruptGenerate" | "unload" | "resetChat" | "init" | "initProgressCallback" | "generateProgressCallback" | "getMaxStorageBufferBindingSize" | "getGPUVendor" | "forwardTokensAndSample" | "chatCompletionNonStreaming" | "getMessage" | "chatCompletionStreamInit" | "chatCompletionStreamNextChunk" | "customRequest");
export interface ReloadParams {
    modelId: string;
    chatOpts?: ChatOptions;
    appConfig?: AppConfig;
}
export interface GenerateParams {
    input: string | ChatCompletionRequestNonStreaming;
    streamInterval?: number;
    genConfig?: GenerationConfig;
}
export interface ResetChatParams {
    keepStats: boolean;
}
export interface GenerateProgressCallbackParams {
    step: number;
    currentMessage: string;
}
export interface ForwardTokensAndSampleParams {
    inputIds: Array<number>;
    isPrefill: boolean;
}
export interface ChatCompletionNonStreamingParams {
    request: ChatCompletionRequestNonStreaming;
}
export interface ChatCompletionStreamInitParams {
    request: ChatCompletionRequestStreaming;
}
export interface CustomRequestParams {
    requestName: string;
    requestMessage: string;
}
export type MessageContent = GenerateProgressCallbackParams | ReloadParams | GenerateParams | ResetChatParams | ForwardTokensAndSampleParams | ChatCompletionNonStreamingParams | ChatCompletionStreamInitParams | CustomRequestParams | InitProgressReport | string | null | number | ChatCompletion | ChatCompletionChunk | void;
/**
 * The message used in exchange between worker
 * and the main thread.
 */
export interface WorkerMessage {
    kind: RequestKind;
    uuid: string;
    content: MessageContent;
}
export {};
//# sourceMappingURL=message.d.ts.map