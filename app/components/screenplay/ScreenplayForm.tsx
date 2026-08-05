type ScreenplayFormProps = {
  story: string;
  setStory: (value: string) => void;
  onGenerate: () => void;
  loading: boolean;
};

export default function ScreenplayForm({
  story,
  setStory,
  onGenerate,
  loading,
}: ScreenplayFormProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white">
        Story Information
      </h2>

      <p className="text-gray-400 mt-2 mb-6">
        Paste your story below to generate a screenplay.
      </p>

      <textarea
        className="w-full h-80 bg-gray-800 rounded-xl p-4"
        placeholder="Paste your story..."
        value={story}
        onChange={(e) => setStory(e.target.value)}
      />

      <button
        onClick={onGenerate}
        className="mt-6 w-full bg-purple-600 hover:bg-purple-700 rounded-xl py-4 font-semibold"
      >
        {loading ? "Generating..." : "🎬 Generate Screenplay"}
      </button>
    </div>
  );
}