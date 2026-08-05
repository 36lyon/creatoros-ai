export default function Header() {
  return (
    <header className="h-20 border-b border-gray-800 bg-gray-950 flex items-center justify-between px-8">

      {/* Search */}
      <div className="flex-1 max-w-xl">

        <input
          type="text"
          placeholder="🔍 Search CreatorOS..."
          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500"
        />

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 ml-8">

        <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-xl text-white transition">
          Upgrade
        </button>

        <div className="w-11 h-11 rounded-full bg-gray-700 flex items-center justify-center text-lg">
          👤
        </div>

      </div>

    </header>
  );
}