"use client";

import { useState } from "react";
import MainLayout from "../../../components/MainLayout";

import StoryboardLibrary from "../../../components/StoryboardLibrary";
export default function Storyboards() {
  const [sceneNumber, setSceneNumber] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
const [refreshKey, setRefreshKey] = useState(0);
  async function saveStoryboard() {
    try {
        console.log({
  projectId: 1,
  sceneNumber,
  title,
  description,
});
      const response = await fetch("/api/storyboards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectId: 1,
          sceneNumber: Number(sceneNumber),
          title,
          description,
          cameraShot: "",
          location: "",
          lighting: "",
          imagePrompt: "",
          videoPrompt: "",
        }),
      });

      const data = await response.json();

if (response.ok) {
        alert("✅ Storyboard saved successfully!");

        setSceneNumber("");
        setTitle("");
        setDescription("");
        setDescription("");
        setRefreshKey((prev) => prev + 1);
      } else {
       alert(
  "❌ Failed to save storyboard.\n\n" +
  JSON.stringify(data, null, 2)
);
      }
    } catch (error: any) {
  console.error(error);

  alert(
    "❌ Error saving storyboard.\n\n" +
    (error?.message || String(error))
  );
}
  }

  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold text-white">
            🎬 Storyboard Studio
          </h1>

          <p className="text-gray-400 mt-2">
            Plan every scene before production.
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 space-y-5">
          <input
            className="w-full bg-gray-800 p-4 rounded-xl"
            placeholder="Scene Number"
            value={sceneNumber}
            onChange={(e) => setSceneNumber(e.target.value)}
          />

          <input
            className="w-full bg-gray-800 p-4 rounded-xl"
            placeholder="Scene Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full bg-gray-800 p-4 rounded-xl h-40"
            placeholder="Scene Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            onClick={saveStoryboard}
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl"
          >
            Save Storyboard
          </button>
        </div>
      </div>
     <StoryboardLibrary refreshKey={refreshKey} />
    </MainLayout>
  );
}