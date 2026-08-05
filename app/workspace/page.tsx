"use client";

import Link from "next/link";
import MainLayout from "../components/MainLayout";

const modules = [
  {
    title: "📖 Story",
    description: "Generate and edit your movie story.",
    status: "Completed",
    link: "/story-generator",
  },
  {
    title: "👤 Characters",
    description: "Manage all AI generated characters.",
    status: "Completed",
    link: "/character-studio",
  },
  {
    title: "🎬 Screenplay",
    description: "Professional Hollywood screenplay.",
    status: "Completed",
    link: "/screenwriter",
  },
  {
    title: "🎥 Storyboards",
    description: "Visual storyboard scenes.",
    status: "Completed",
    link: "/storyboard",
  },
  {
    title: "🎞 Shot List",
    description: "Camera shots and production planning.",
    status: "Coming Soon",
    link: "#",
  },
  {
    title: "🖼 Image Studio",
    description: "Generate cinematic AI images.",
    status: "Coming Soon",
    link: "#",
  },
  {
    title: "🎙 Voice Studio",
    description: "Generate AI voices.",
    status: "Coming Soon",
    link: "#",
  },
  {
    title: "🎵 Music Studio",
    description: "Generate movie soundtracks.",
    status: "Coming Soon",
    link: "#",
  },
];

export default function WorkspacePage() {
  return (
    <MainLayout>
      <div className="p-8">
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-white">
            📁 Project Workspace
          </h1>

          <p className="text-gray-400 mt-3">
            Manage every stage of your AI movie production from one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {modules.map((module) => (
            <div
              key={module.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-purple-500 transition"
            >
              <h2 className="text-2xl font-bold text-white">
                {module.title}
              </h2>

              <p className="text-gray-400 mt-4">
                {module.description}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    module.status === "Completed"
                      ? "bg-green-600"
                      : "bg-yellow-600"
                  }`}
                >
                  {module.status}
                </span>

                {module.status === "Completed" ? (
                  <Link
                    href={module.link}
                    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm"
                  >
                    Open Studio →
                  </Link>
                ) : (
                  <button
                    disabled
                    className="bg-gray-700 px-4 py-2 rounded-lg text-sm cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}