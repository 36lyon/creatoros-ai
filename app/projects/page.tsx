"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MainLayout from "../components/MainLayout";
import { supabase } from "../lib/supabase";

type Project = {
  id: number;
  title: string;
  description: string;
  created_at: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setProjects(data || []);
    }

    setLoading(false);
  }

  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold text-white">
              📁 Projects
            </h1>

            <p className="text-gray-400 mt-2">
              Manage all your AI filmmaking projects.
            </p>
          </div>

          <Link
            href="/projects/new"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl"
          >
            + New Project
          </Link>
        </div>

        {loading ? (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
            Loading...
          </div>
        ) : projects.length === 0 ? (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center text-gray-400">
            No projects yet. Click <b>+ New Project</b> to create your first project.
          </div>
        ) : (
          <div className="space-y-5">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="block bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-purple-500 transition"
              >
                <h2 className="text-2xl font-bold text-white">
                  {project.title}
                </h2>

                <p className="text-gray-400 mt-4">
                  {project.description}
                </p>

                <p className="text-gray-500 mt-4 text-sm">
                  {new Date(project.created_at).toLocaleDateString()}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}