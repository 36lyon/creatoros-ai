import { NextResponse } from "next/server";
import { generateText } from "@/app/lib/ai/text";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

const screenplayPrompt = `
You are an award-winning Hollywood screenwriter.

Write a professional screenplay based on the following idea.

Rules:

- Use proper screenplay formatting.
- Begin with FADE IN:
- Include scene headings (INT. / EXT.)
- Include action descriptions.
- Include realistic dialogue.
- Give characters names.
- Make the screenplay cinematic.
- End with FADE OUT.

Story Idea:

${prompt}
`;

    const text = await generateText(screenplayPrompt);
    return NextResponse.json({
      success: true,
  text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to generate script.",
      },
      { status: 500 }
    );
  }
}