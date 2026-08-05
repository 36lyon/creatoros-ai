"use client";

import { useParams } from "next/navigation";
import MainLayout from "../../../components/MainLayout";

export default function ProjectCharacters() {
  const params = useParams();

  const projectId = params.id;

  return (
    <MainLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-5xl font-bold text-white">
            🎭 Character Creator
          </h1>

          <p className="text-gray-400 mt-3">
            Project ID: <span className="text-purple-400">{projectId}</span>
          </p>

          <p className="text-gray-500">
            This Character Creator now belongs to the selected project.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

          <h2 className="text-2xl font-bold">
            🚀 CreatorOS AI v2
          </h2>

          <p className="text-gray-400 mt-4">
            In the next step, we will move the full Character Creator into this
            page so every generated character is automatically saved to this
            project.
          </p>

        </div>

      </div>
    </MainLayout>
  );
}