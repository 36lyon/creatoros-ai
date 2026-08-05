type StoryResultProps = {
  story: string;
  onCopy: () => void;
};

export default function StoryResult({
  story,
  onCopy,
}: StoryResultProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl h-full">
      <div className="flex items-center justify-between border-b border-gray-800 p-6">
        <h2 className="text-2xl font-bold text-white">
          ✨ AI Generated Story
        </h2>

        <button
          onClick={onCopy}
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
        >
          📋 Copy
        </button>
      </div>

      <div className="p-6">
        {story ? (
          <p className="text-gray-300 whitespace-pre-wrap leading-8">
            {story}
          </p>
        ) : (
          <div className="text-center py-24 text-gray-500">
            <p className="text-6xl mb-4">🎬</p>

            <h3 className="text-xl font-semibold">
              Your AI story will appear here
            </h3>

            <p className="mt-3">
              Fill in the story information and click
              <strong> Generate Story</strong>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}