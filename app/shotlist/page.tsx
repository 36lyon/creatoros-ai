"use client";

import { useState } from "react";
import MainLayout from "../components/MainLayout";

export default function ShotList() {
  const [sceneTitle, setSceneTitle] = useState("");
  const [sceneDescription, setSceneDescription] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateShotList() {
    setLoading(true);
    setResult("Generating professional shot list...");

    const response = await fetch("/api/generate-shotlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `
You are a Hollywood First Assistant Director.

Create a professional cinematic shot list.

Scene Title:
${sceneTitle}

Scene Description:
${sceneDescription}

Generate:

1. Shot Number
2. Shot Type
3. Camera Angle
4. Lens
5. Camera Movement
6. Lighting
7. Duration
8. Director Notes
9. AI Image Prompt
10. AI Video Prompt
`,
      }),
    });

    const data = await response.json();

    if (data.success) {
      setResult(data.text);
    } else {
      setResult("Failed to generate shot list.");
    }

    setLoading(false);
  }

  return (
    <MainLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-5xl font-bold text-white">
            🎞 AI Shot List Studio
          </h1>

          <p className="text-gray-400 mt-3">
            Generate professional camera shot lists for filmmakers.
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6 space-y-5">

          <input
            className="w-full bg-gray-800 rounded-xl p-4"
            placeholder="Scene Title"
            value={sceneTitle}
            onChange={(e) => setSceneTitle(e.target.value)}
          />

          <textarea
            className="w-full bg-gray-800 rounded-xl p-4 h-40"
            placeholder="Describe the scene..."
            value={sceneDescription}
            onChange={(e) => setSceneDescription(e.target.value)}
          />

          <button
            onClick={generateShotList}
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate Shot List"}
          </button>

        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">

          <h2 className="text-2xl font-bold">
            AI Shot List
          </h2>

          <pre className="whitespace-pre-wrap text-gray-300 mt-5">
            {result || "Your AI-generated shot list will appear here."}
          </pre>

        </div>

      </div>
    </MainLayout>
  );
}