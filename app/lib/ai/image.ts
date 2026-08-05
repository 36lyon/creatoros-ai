import { getImageProvider } from "./providers";
import { generateText } from "./google";
import { generateImage as generateOpenAIImage } from "./openai";

export async function generateImage(prompt: string) {
  const provider = getImageProvider();

  switch (provider) {
    case "google":
      return await generateText(prompt);

    case "openai":
      return await generateOpenAIImage(prompt);

    default:
      throw new Error(`Unsupported image provider: ${provider}`);
  }
}