"use client";

import MainLayout from "../components/MainLayout";
import { useState } from "react";

export default function StoryGenerator() {
  const [idea, setIdea] = useState("");
const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  async function copyStory() {
  await navigator.clipboard.writeText(story);

  alert("✅ Story copied!");
}
async function generateStory() {
  const response = await fetch("/api/generate-story", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idea,
    }),
  });

  const data = await response.json();

  setStory(data.story);
}
  return (
    <MainLayout>
      <div className="p-8">
        <h1 className="text-5xl font-bold">
          AI Story Generator
        </h1>

        <p className="text-gray-400 mt-2">
          Let AI create amazing stories for your movies.
        </p>
        <div className="mt-10 bg-gray-900 border border-gray-800 rounded-2xl p-6">
  <h2 className="text-2xl font-bold text-white">
    Story Information
  </h2>

  <p className="text-gray-400 mt-2">
    Fill in the details below to generate a professional AI movie story.
  </p>
</div>
<div className="mt-8">
  <label className="block text-gray-300 mb-2">
    Movie Title
    <div className="mt-6">
  <label className="block text-gray-300 mb-2">
    Genre
    <div className="mt-6">
  <label className="block text-gray-300 mb-2">
    Target Audience
    <div className="mt-6">
  <label className="block text-gray-300 mb-2">
    Movie Length
    <div className="mt-6">
  <label className="block text-gray-300 mb-2">
    Story Tone
    <div className="mt-6">
  <label className="block text-gray-300 mb-2">
    Language
  </label>

  <select className="w-full bg-gray-800 p-4 rounded-xl">
    <option>English</option>
    <option>French</option>
    <option>Spanish</option>
    <option>Arabic</option>
    <option>Portuguese</option>
    <option>German</option>
    <option>Chinese</option>
    <option>Japanese</option>
  </select>
</div>
  </label>

  <select className="w-full bg-gray-800 p-4 rounded-xl">
    <option>Epic</option>
    <option>Dark</option>
    <option>Funny</option>
    <option>Emotional</option>
    <option>Inspirational</option>
    <option>Mysterious</option>
    <option>Suspenseful</option>
    <option>Romantic</option>
    <option>Action-Packed</option>
  </select>
</div>
  </label>

  <select className="w-full bg-gray-800 p-4 rounded-xl">
    <option>5 Minutes (Short Film)</option>
    <option>15 Minutes</option>
    <option>30 Minutes</option>
    <option>60 Minutes</option>
    <option>90 Minutes</option>
    <option>120 Minutes (Feature Film)</option>
    <option>180 Minutes (Epic)</option>
  </select>
</div>
  </label>

  <select className="w-full bg-gray-800 p-4 rounded-xl">
    <option>General Audience</option>
    <option>Kids</option>
    <option>Teenagers</option>
    <option>Young Adults</option>
    <option>Adults</option>
    <option>Family</option>
  </select>
</div>
  </label>

  <select className="w-full bg-gray-800 p-4 rounded-xl">
    <option>Fantasy</option>
    <option>Action</option>
    <option>Adventure</option>
    <option>Comedy</option>
    <option>Drama</option>
    <option>Horror</option>
    <option>Romance</option>
    <option>Science Fiction</option>
    <option>Thriller</option>
    <option>Animation</option>
  </select>
</div>
    <div className="mt-8">
  
</div>
  </label>

  <input
    type="text"
    className="w-full bg-gray-800 p-4 rounded-xl"
    placeholder="Enter your movie title..."
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />
</div>
        <div className="mt-8">
          <textarea
            className="w-full bg-gray-800 p-4 rounded-xl h-40"
            placeholder="Describe your movie idea..."
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          />
        </div>

        <button
          onClick={generateStory}
          className="mt-6 bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl"
        >
          Generate Story
        </button>
       <div className="mt-8 bg-gray-900 rounded-2xl border border-gray-800 shadow-lg">
  <div className="flex items-center justify-between p-6 border-b border-gray-800">
    <h2 className="text-2xl font-bold text-white">
      ✨ AI Generated Story
    </h2>

    <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg">
      Copy
    </button>
  </div>

  <div className="p-6">
    <p className="text-gray-300 whitespace-pre-wrap leading-8">
      {story}
    </p>
  </div>
</div>
      </div>
    </MainLayout>
  );]
}