"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import MainLayout from "../../../components/MainLayout";
import { supabase } from "../../../lib/supabase";

export default function ScriptPage() {
  const params = useParams();
  const projectId = Number(params.id);

  const [title, setTitle] = useState("");
  const [script, setScript] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadScript();
  }, []);

  async function loadScript() {
    try {
      const { data, error } = await supabase
        .from("scripts")
        .select("*")
        .eq("project_id", projectId)
        .maybeSingle();

      if (error) {
        console.error(error);
        return;
      }

      if (data) {
        setTitle(data.title || "");
        setScript(data.content || "");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function generateScript() {
    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `
Write a professional Hollywood movie screenplay.

Title:
${title}

Movie Idea:
${script}

Generate:
1. Movie Title
2. Logline
3. Full screenplay with scenes and dialogue
4. Ending
`,
        }),
      });

      const data = await response.json();

      if (data.text) {
        setScript(data.text);
      } else {
        alert("Failed to generate script.");
      }
    } catch (error) {
      console.error(error);
      alert("Error generating script.");
    }
  }

  async function saveScript() {
    setSaving(true);

    try {
      const { data: existing } = await supabase
        .from("scripts")
        .select("id")
        .eq("project_id", projectId)
        .maybeSingle();

      if (existing) {
        const { error } = await supabase
          .from("scripts")
          .update({
            title,
            content: script,
          })
          .eq("project_id", projectId);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("scripts")
          .insert({
            project_id: projectId,
            title,
            content: script,
          });

        if (error) throw error;
      }

      alert("✅ Script saved successfully!");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to save script.");
    }

    setSaving(false);
  }

  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-white">
            🎬 Script Manager
          </h1>

          <p className="text-gray-400 mt-2">
            Write, edit, and generate AI scripts for this project.
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
          <label className="block text-lg font-semibold mb-2">
            Script Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter script title..."
            className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 text-white"
          />

          <label className="block text-lg font-semibold mt-6 mb-2">
            Screenplay
          </label>

          <textarea
            value={script}
            onChange={(e) => setScript(e.target.value)}
            placeholder="Start writing your screenplay here..."
            className="w-full h-96 p-4 rounded-xl bg-gray-800 border border-gray-700 text-white"
          />

          <div className="flex gap-4 mt-6">
            <button
              onClick={generateScript}
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl text-white"
            >
              🤖 Generate with AI
            </button>

            <button
              onClick={saveScript}
              disabled={saving}
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-white"
            >
              {saving ? "Saving..." : "💾 Save Script"}
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}