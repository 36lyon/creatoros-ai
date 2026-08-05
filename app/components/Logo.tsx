export default function Logo() {
  return (
    <div className="flex items-center gap-3">

      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
        C
      </div>

      <div>
        <h1 className="text-xl font-extrabold text-white">
          CreatorOS AI
        </h1>

        <p className="text-xs text-gray-400">
          AI Production Platform
        </p>
      </div>

    </div>
  );
}