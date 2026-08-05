"use client";

import { useEffect, useState } from "react";

type Storyboard = {
  id: number;
  sceneNumber: number;
  title: string;
  description: string;
};

type StoryboardLibraryProps = {
  refreshKey: number;
};

export default function StoryboardLibrary({
  refreshKey,
}: StoryboardLibraryProps) {
  const [storyboards, setStoryboards] = useState<Storyboard[]>([]);

  async function generateImage(description: string) {
    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description,
        }),
      });

      const data = await response.json();

      console.log("AI Image Response:", data);

      if (!response.ok) {
        alert("❌ " + data.error);
        return;
      }

      alert("✅ AI returned successfully.\n\nCheck the browser console (F12).");
    } catch (error) {
      console.error(error);
      alert("Unexpected error.");
    }
  }

  async function loadStoryboards() {
    const response = await fetch("/api/storyboards");
    const data = await response.json();

    setStoryboards(data);
  }

  useEffect(() => {
    loadStoryboards();
  }, [refreshKey]);

  return (
        <div className="mt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">
          🎬 Storyboard Library
        </h2>

        <span className="text-gray-400">
          {storyboards.length} Scene(s)
        </span>
      </div>

      {storyboards.length === 0 ? (
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-10 text-center text-gray-400">
          No storyboard scenes yet.
        </div>
      ) : (
        <div className="space-y-6">
          {storyboards.map((storyboard) => (
            <div
              key={storyboard.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">
                    🎬 Scene {storyboard.sceneNumber}
                  </h3>

                  <p className="text-xl text-white mt-2">
                    {storyboard.title}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                    ✏ Edit
                  </button>

                  <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg">
                    🗑 Delete
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-gray-300 leading-8">
                  {storyboard.description}
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => generateImage(storyboard.description)}
                  className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg"
                >
                  🖼 Generate Image
                </button>

                <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg">
                  🎥 Generate Video
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}