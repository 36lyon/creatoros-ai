import Link from "next/link";
import Logo from "./Logo";

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-700 text-white flex flex-col shadow-2xl">

      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-5 space-y-2">

        <p className="text-xs uppercase tracking-wider text-slate-400 mb-3">
          Workspace
        </p>

      <Link
  href="/dashboard"
  className="block p-3 rounded-xl text-slate-200 hover:bg-violet-600 hover:text-white transition-all duration-300"
>
  🏠 Dashboard
</Link>

        <p className="text-xs uppercase tracking-wider text-slate-400 mt-8 mb-3">
          AI Studio
        </p>

        <Link href="/screenwriter" className="block p-3 rounded-xl hover:bg-slate-800">
          🎬 AI Screenwriter
        </Link>

        <Link href="/characters" className="block p-3 rounded-xl hover:bg-slate-800">
          🎭 Character Creator
        </Link>

        <Link href="/storyboard" className="block p-3 rounded-xl hover:bg-slate-800">
          🎥 Storyboard Studio
        </Link>

        <Link href="/shotlist" className="block p-3 rounded-xl hover:bg-slate-800">
          🎞 Shot List Studio
        </Link>

        <p className="text-xs uppercase tracking-wider text-slate-400 mt-8 mb-3">
          Media Studio
        </p>
<Link
  href="/images"
  className="block p-3 rounded-xl hover:bg-slate-800"
>
  🖼 Image Studio
</Link>

        <Link href="/videos" className="block p-3 rounded-xl hover:bg-slate-800">
          🎬 Video Studio
        </Link>

        <Link href="/voices" className="block p-3 rounded-xl hover:bg-slate-800">
          🎙 Voice Studio
        </Link>

        <Link href="/music" className="block p-3 rounded-xl hover:bg-slate-800">
          🎵 Music Studio
        </Link>

      </nav>

      {/* Footer */}
      <div className="p-5 border-t border-slate-700">

        <Link
          href="/settings"
          className="block p-3 rounded-xl hover:bg-slate-800"
        >
          ⚙ Settings
        </Link>

      </div>

    </aside>
  );
}