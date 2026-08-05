import Link from "next/link";

export default function QuickActions() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        ⚡ Quick Actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <Link
          href="/screenwriter"
          className="bg-purple-600 hover:bg-purple-700 rounded-xl p-4 text-center transition"
        >
          🎬 New Script
        </Link>

        <Link
          href="/characters"
          className="bg-blue-600 hover:bg-blue-700 rounded-xl p-4 text-center transition"
        >
          🎭 New Character
        </Link>

        <Link
          href="/storyboard"
          className="bg-green-600 hover:bg-green-700 rounded-xl p-4 text-center transition"
        >
          🎥 New Storyboard
        </Link>

      </div>

    </div>
  );
}