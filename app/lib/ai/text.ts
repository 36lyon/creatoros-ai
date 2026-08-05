import { generateText as generateGoogleText } from "./google";

export async function generateText(prompt: string): Promise<string> {
  try {
    return await generateGoogleText(prompt);
  } catch (error) {
    console.error("Text generation failed:", error);
    throw error;
  }
}