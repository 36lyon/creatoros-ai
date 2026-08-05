type StoryboardFormProps = {
  screenplay: string;
  setScreenplay: (value: string) => void;
  onGenerate: () => void;
  loading: boolean;
};

export default function StoryboardForm({
  screenplay,
  setScreenplay,
  onGenerate,
  loading,
}: StoryboardFormProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-3xl font-bold text-white">
            🎬 Screenplay
          </h2>

          <p className="text-gray-400 mt-2">
            Paste your screenplay below and let AI create a professional cinematic storyboard.
          </p>
        </div>

      </div>

      <textarea
        className="w-full h-[550px] bg-gray-800 border border-gray-700 rounded-2xl p-5 text-gray-200 leading-8 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Paste your screenplay here..."
        value={screenplay}
        onChange={(e) => setScreenplay(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-4 mt-6">

        <button
          onClick={onGenerate}
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900 rounded-xl py-4 font-bold text-lg transition"
        >
          {loading ? "🎬 Generating..." : "🎥 Generate Storyboard"}
        </button>

        <button
          onClick={() => setScreenplay("")}
          className="bg-gray-700 hover:bg-gray-600 rounded-xl py-4 font-bold text-lg transition"
        >
          🗑 Clear
        </button>

      </div>

      <div className="mt-8 border-t border-gray-800 pt-6">

        <h3 className="text-xl font-semibold text-white mb-3">
          💡 Tips
        </h3>

        <ul className="space-y-2 text-gray-400 text-sm">
          <li>• Use complete scenes for better storyboard quality.</li>
          <li>• Include character names and locations.</li>
          <li>• Describe important actions clearly.</li>
          <li>• Longer screenplays produce richer storyboard scenes.</li>
        </ul>

      </div>

    </div>
  );
}