"use client";

import { useState } from "react";
import MainLayout from "../components/MainLayout";
import StoryForm from "../components/story/StoryForm";
import StoryResult from "../components/story/StoryResult";

export default function StoryGenerator() {
  const [title, setTitle] = useState("");
  const [idea, setIdea] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateStory() {
    if (!idea.trim()) {
      alert("Please enter a story idea.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/generate-story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          idea,
        }),
      });

      const data = await response.json();

      setStory(data.story);
    } catch (error) {
      console.error(error);
      alert("Failed to generate story.");
    }

    setLoading(false);
  }

  async function copyStory() {
    if (!story) return;

    await navigator.clipboard.writeText(story);

    alert("✅ Story copied!");
  }

  return (
    <MainLayout>
      <div className="p-8">

        <div className="mb-10">
          <h1 className="text-5xl font-bold text-white">
            🎬 AI Story Studio
          </h1>

          <p className="text-gray-400 mt-3">
            Create professional movie stories with AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <StoryForm
            title={title}
            setTitle={setTitle}
            idea={idea}
            setIdea={setIdea}
            onGenerate={generateStory}
          />

          <StoryResult
            story={
              loading
                ? "✨ AI is creating your story..."
                : story
            }
            onCopy={copyStory}
          />

        </div>

      </div>
    </MainLayout>
  );
}