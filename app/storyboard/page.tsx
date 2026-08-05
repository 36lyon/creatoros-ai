"use client";

import { useState } from "react";
import MainLayout from "../components/MainLayout";
import StoryboardForm from "../components/storyboard/StoryboardForm";
import StoryboardResult from "../components/storyboard/StoryboardResult";
import StoryboardLibrary from "../components/StoryboardLibrary";

export default function StoryboardStudio() {
  const [screenplay, setScreenplay] = useState("");
  const [storyboard, setStoryboard] = useState("");
  const [loading, setLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  async function generateStoryboard() {
    if (!screenplay.trim()) {
      alert("Please enter a screenplay.");
      return;
    }

    setLoading(true);

    try {
      // Generate storyboard with AI
      const response = await fetch("/api/generate-storyboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          screenplay,
        }),
      });

      const data = await response.json();

      console.log("AI Response:", data);

      if (!data.success) {
        alert(data.error || "Failed to generate storyboard.");
        console.log(data.raw);
        return;
      }

      // Display storyboard
      setStoryboard(JSON.stringify(data.storyboard, null, 2));

      // Save each scene
      if (data.storyboard?.scenes) {
        for (const scene of data.storyboard.scenes) {
          const saveResponse = await fetch("/api/storyboards", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              projectId: 1,
              sceneNumber: scene.sceneNumber,
              title: scene.title,
              description: scene.description,
              cameraShot: scene.cameraShot,
              location: scene.location,
              lighting: scene.lighting,
              imagePrompt: scene.imagePrompt,
              videoPrompt: scene.videoPrompt,
            }),
          });

          const saveData = await saveResponse.json();

          console.log("Saved Scene:", saveData);
        }

        setRefreshKey((prev) => prev + 1);

        alert("✅ Storyboard generated and saved!");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function copyStoryboard() {
    if (!storyboard) return;

    await navigator.clipboard.writeText(storyboard);

    alert("✅ Storyboard copied!");
  }

  return (
    <MainLayout>
      <div className="p-8">
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-white">
            🎬 Storyboard Studio
          </h1>

          <p className="text-gray-400 mt-3">
            Generate, manage and organize cinematic storyboard scenes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <StoryboardForm
            screenplay={screenplay}
            setScreenplay={setScreenplay}
            onGenerate={generateStoryboard}
            loading={loading}
          />

          <StoryboardResult
            storyboard={storyboard}
            onCopy={copyStoryboard}
          />
        </div>

        <StoryboardLibrary refreshKey={refreshKey} />
      </div>
    </MainLayout>
  );
}