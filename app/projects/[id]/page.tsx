import Link from "next/link";
import MainLayout from "../../components/MainLayout";
import { supabase } from "../../lib/supabase";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    notFound();
  }

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .eq("user_id", user.id)
    .single();

  if (error || !project) {
    notFound();
  }

  return (
    <MainLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-5xl font-bold text-white">
            🎬 {project.title}
          </h1>

          <p className="text-gray-400 mt-3">
            {project.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <Link
            href={`/projects/${id}/script`}
            className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition block"
          >
            <div className="text-4xl">🎬</div>

            <h2 className="text-xl font-bold mt-3">
              Script
            </h2>

            <p className="text-gray-400">
              Write and manage screenplay.
            </p>
          </Link>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <div className="text-4xl">🎭</div>

            <h2 className="text-xl font-bold mt-3">
              Characters
            </h2>

            <p className="text-gray-400">
              AI character library.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <div className="text-4xl">🎥</div>

            <h2 className="text-xl font-bold mt-3">
              Storyboards
            </h2>

            <p className="text-gray-400">
              Scene visualization.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <div className="text-4xl">🎞</div>

            <h2 className="text-xl font-bold mt-3">
              Shot Lists
            </h2>

            <p className="text-gray-400">
              Camera planning.
            </p>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}