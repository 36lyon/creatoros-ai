import { NextResponse } from "next/server";
import { generateText } from "@/app/lib/ai/text";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
You are an Oscar-winning Hollywood storyboard director.

Convert the screenplay into JSON.

Return ONLY valid JSON.

Do NOT use markdown.

Do NOT use triple backticks.

Return exactly this structure:

{
  "scenes":[
    {
      "sceneNumber":1,
      "title":"",
      "description":"",
      "cameraShot":"",
      "cameraMovement":"",
      "lighting":"",
      "location":"",
      "mood":"",
      "imagePrompt":"",
      "videoPrompt":""
    }
  ]
}

Screenplay:

${body.screenplay}
`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-4.1-mini",
          temperature: 0.7,
          max_tokens: 4000,
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const content =
      data.choices?.[0]?.message?.content ?? "{}";

    try {
      const storyboard = JSON.parse(content);

      return NextResponse.json({
        success: true,
        storyboard,
      });
    } catch {
      return NextResponse.json({
        success: false,
        error: "AI returned invalid JSON.",
        raw: content,
      });
    }
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}