type ScreenplayResultProps = {
  screenplay: string;
  onCopy: () => void;
};

export default function ScreenplayResult({
  screenplay,
  onCopy,
}: ScreenplayResultProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl h-full">

      <div className="flex items-center justify-between border-b border-gray-800 p-6">

        <h2 className="text-2xl font-bold text-white">
          🎬 AI Screenplay
        </h2>

        <button
          onClick={onCopy}
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
        >
          📋 Copy
        </button>

      </div>

      <div className="p-6">

        {screenplay ? (
          <pre className="whitespace-pre-wrap text-gray-300 leading-8 font-sans">
            {screenplay}
          </pre>
        ) : (
          <div className="text-center py-24 text-gray-500">

            <div className="text-6xl mb-6">
              🎬
            </div>

            <h3 className="text-2xl font-bold">
              Your AI Screenplay
            </h3>

            <p className="mt-4">
              Generate a screenplay to see the result here.
            </p>

          </div>
        )}

      </div>

    </div>
  );
}