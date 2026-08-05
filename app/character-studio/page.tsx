"use client";

import { useState } from "react";
import MainLayout from "../components/MainLayout";
import CharacterResult from "../components/character/CharacterResult";

export default function CharacterStudio() {
  const [story, setStory] = useState("");
  const [character, setCharacter] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function generateCharacter() {
    if (!story.trim()) {
      alert("Please enter a story first.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/generate-character", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          story,
        }),
      });

     const data = await response.json();

setCharacter(data);
    } catch (error) {
      console.error(error);
      alert("Failed to generate character.");
    }

    setLoading(false);
  }

  async function copyCharacter() {
    if (!character) return;

    await navigator.clipboard.writeText(character);

    alert("✅ Character copied!");
  }

  return (
    <MainLayout>
      <div className="p-8">
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-white">
            🎭 AI Character Studio
          </h1>

          <p className="text-gray-400 mt-3">
            Generate detailed movie characters from your story.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white">
              Story Information
            </h2>

            <p className="text-gray-400 mt-2 mb-6">
              Paste your story below.
            </p>

            <textarea
              className="w-full h-80 bg-gray-800 rounded-xl p-4"
              placeholder="Paste your generated story..."
              value={story}
              onChange={(e) => setStory(e.target.value)}
            />

            <button
              onClick={generateCharacter}
              className="mt-6 w-full bg-purple-600 hover:bg-purple-700 rounded-xl py-4 font-semibold"
            >
              {loading ? "Generating..." : "✨ Generate Character"}
            </button>
          </div>

          {/* Right Panel */}
          <CharacterResult
            character={character}
            onCopy={copyCharacter}
          />
        </div>
      </div>
    </MainLayout>
  );
}