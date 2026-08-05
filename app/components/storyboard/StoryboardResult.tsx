type StoryboardResultProps = {
  storyboard: string;
  onCopy: () => void;
};

export default function StoryboardResult({
  storyboard,
  onCopy,
}: StoryboardResultProps) {
  let scenes: any[] = [];

  try {
    if (storyboard) {
      const parsed = JSON.parse(storyboard);
      scenes = parsed.scenes || [];
    }
  } catch {
    scenes = [];
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl h-full">

      <div className="flex items-center justify-between border-b border-gray-800 p-6">

        <h2 className="text-2xl font-bold text-white">
          🎥 AI Storyboard
        </h2>

        <button
          onClick={onCopy}
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
        >
          📋 Copy
        </button>

      </div>

      <div className="p-6">

        {scenes.length > 0 ? (

          <div className="space-y-8">

            {scenes.map((scene) => (

              <div
                key={scene.sceneNumber}
                className="bg-gray-800 rounded-2xl border border-gray-700 p-6"
              >

                <h3 className="text-3xl font-bold text-purple-400 mb-6">
                  🎬 Scene {scene.sceneNumber}
                </h3>

                <div className="space-y-4">

                  <div>
                    <p className="text-gray-400">📖 Title</p>
                    <p className="text-white text-xl font-semibold">
                      {scene.title}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">📝 Description</p>
                    <p className="text-gray-300">
                      {scene.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">🎥 Camera Shot</p>
                    <p>{scene.cameraShot}</p>
                  </div>

                  <div>
                    <p className="text-gray-400">🎥 Camera Movement</p>
                    <p>{scene.cameraMovement}</p>
                  </div>

                  <div>
                    <p className="text-gray-400">💡 Lighting</p>
                    <p>{scene.lighting}</p>
                  </div>

                  <div>
                    <p className="text-gray-400">📍 Location</p>
                    <p>{scene.location}</p>
                  </div>

                  <div>
                    <p className="text-gray-400">😊 Mood</p>
                    <p>{scene.mood}</p>
                  </div>

                  <div>
                    <p className="text-gray-400">🖼 Image Prompt</p>
                    <p className="text-sm text-gray-300">
                      {scene.imagePrompt}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">🎬 Video Prompt</p>
                    <p className="text-sm text-gray-300">
                      {scene.videoPrompt}
                    </p>
                  </div>

                </div>

                <div className="flex gap-4 mt-8">

                  <button className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg">
                    🖼 Generate Image
                  </button>

                  <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg">
                    🎥 Generate Video
                  </button>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="text-center py-24 text-gray-500">

            <div className="text-6xl mb-6">
              🎥
            </div>

            <h3 className="text-2xl font-bold">
              Your AI Storyboard
            </h3>

            <p className="mt-4">
              Generate a storyboard to see cinematic scene cards.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}