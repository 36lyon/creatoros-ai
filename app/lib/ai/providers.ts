export type AIProvider =
  | "openai"
  | "google"
  | "flux";

export const DEFAULT_IMAGE_PROVIDER: AIProvider = "google";

export function getImageProvider(): AIProvider {
  return DEFAULT_IMAGE_PROVIDER;
}