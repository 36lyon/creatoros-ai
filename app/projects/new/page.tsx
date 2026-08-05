"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MainLayout from "../../components/MainLayout";
import { supabase } from "../../lib/supabase";

export default function NewProject() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  async function createProject() {
    if (!title.trim()) {
      alert("Please enter a project title.");
      return;
    }

    setLoading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        alert("Please log in first.");
        router.push("/login");
        return;
      }

      const { error } = await supabase.from("projects").insert({
        user_id: user.id,
        title,
        description,
      });

      if (error) {
        throw error;
      }

      alert("✅ Project created successfully!");

      router.push("/projects");
    } catch (error: any) {
      console.error(error);

      alert(JSON.stringify(error, null, 2));
    } finally {
      setLoading(false);
    }
  }

  return (
    <MainLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-5xl font-bold text-white">
            🚀 New Project
          </h1>

          <p className="text-gray-400 mt-3">
            Create your next AI production.
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6 space-y-5">

          <input
            className="w-full bg-gray-800 rounded-xl p-4"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full bg-gray-800 rounded-xl p-4 h-40"
            placeholder="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            onClick={createProject}
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Project"}
          </button>

        </div>
      </div>
    </MainLayout>
  );
}