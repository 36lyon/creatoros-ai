"use client";

import { useState, type FormEvent } from "react";
import MainLayout from "../components/MainLayout";

export default function Screenwriter() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [storyIdea, setStoryIdea] = useState("");
  const [script, setScript] = useState("");
  const [storyboardLoading, setStoryboardLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !genre || !storyIdea.trim()) {
      setError("Please fill out all fields.");
      return;
    }

    setLoading(true);
    setError("");
    setScript("");

    try {
      const response = await fetch("/api/generate-script", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `Create a screenplay for "${title}" in the ${genre} genre based on this story idea: ${storyIdea}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to generate script.");
      }

      setScript(data?.text || "");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  async function copyScript() {
    async function generateStoryboards() {
  if (!script) return;

  setStoryboardLoading(true);

  try {
    const response = await fetch("/api/generate-storyboards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        screenplay: script,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to generate storyboards.");
    }

    console.log("Storyboard Result:", data);

    alert("✅ Storyboards generated successfully!\n\nCheck the browser console (F12).");
  } catch (error: any) {
    alert(error.message);
  } finally {
    setStoryboardLoading(false);
  }
}
    if (!script) return;

    await navigator.clipboard.writeText(script);

    alert("✅ Screenplay copied!");
  }

  return (
    <MainLayout>
      <div className="p-8">
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-white">
            🎬 AI Screenwriter
          </h1>

          <p className="text-gray-400 mt-3">
            Turn your idea into a professional screenplay.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT PANEL */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white">
              Screenplay Information
            </h2>

            <p className="text-gray-400 mt-2 mb-6">
              Enter your movie details below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                className="w-full rounded-xl border border-gray-800 bg-gray-800 p-4"
                placeholder="Movie title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <select
                className="w-full rounded-xl border border-gray-800 bg-gray-800 p-4"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              >
                <option value="">Choose Genre</option>
                <option>Action</option>
                <option>Adventure</option>
                <option>Drama</option>
                <option>Comedy</option>
                <option>Fantasy</option>
                <option>Horror</option>
                <option>Romance</option>
                <option>Science Fiction</option>
                <option>Thriller</option>
              </select>

              <textarea
                className="h-56 w-full rounded-xl border border-gray-800 bg-gray-800 p-4"
                placeholder="Describe your story idea..."
                value={storyIdea}
                onChange={(e) => setStoryIdea(e.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-purple-600 hover:bg-purple-700 py-4 font-semibold"
              >
                {loading ? "Generating..." : "🎬 Generate Screenplay"}
              </button>
              <button
  type="button"
  disabled={!script}
  className="mt-4 w-full rounded-xl bg-blue-600 hover:bg-blue-700 py-4 font-semibold disabled:opacity-50"
>
  🎞 Generate Storyboards
</button>
            </form>

            {error && (
              <div className="mt-6 rounded-xl border border-red-700 bg-red-950/40 p-4 text-red-300">
                {error}
              </div>
            )}
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl">
            <div className="flex items-center justify-between border-b border-gray-800 p-6">
              <h2 className="text-2xl font-bold text-white">
                🎬 AI Screenplay
              </h2>

              <button
                onClick={copyScript}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
              >
                📋 Copy
              </button>
            </div>

            <div className="p-6">
              {loading ? (
                <p className="text-gray-400">
                  Generating screenplay...
                </p>
              ) : script ? (
                <pre className="whitespace-pre-wrap text-gray-300 leading-8 font-sans">
                  {script}
                </pre>
              ) : (
                <div className="text-center py-24 text-gray-500">
                  <div className="text-6xl mb-6">🎬</div>

                  <h3 className="text-2xl font-bold">
                    Your AI Screenplay
                  </h3>

                  <p className="mt-4">
                    Your screenplay will appear here after generation.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}