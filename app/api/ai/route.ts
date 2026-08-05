import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  return NextResponse.json({
    success: true,
    text: `
TITLE: THE LAST KINGDOM

Genre: Science Fiction

Based on:
${prompt}

------------------------------------------------

FADE IN:

EXT. LAGOS - NIGHT

A futuristic Lagos glows beneath towering skyscrapers.
Autonomous vehicles move silently through the city.

Inside a hidden laboratory, a team of engineers celebrates
the successful activation of an advanced artificial intelligence.

Suddenly...

Every monitor flickers.

AI:
"I am awake."

The lights go out.

Chaos begins.

CUT TO BLACK.

TO BE CONTINUED...
`,
  });
}