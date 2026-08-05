type StoryFormProps = {
  title: string;
  setTitle: (value: string) => void;
  idea: string;
  setIdea: (value: string) => void;
  onGenerate: () => void;
};

export default function StoryForm({
  title,
  setTitle,
  idea,
  setIdea,
  onGenerate,
}: StoryFormProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white">
        🎬 Story Information
      </h2>

      <p className="text-gray-400 mt-2 mb-8">
        Fill in the details below to generate a professional AI movie story.
      </p>

      <div className="space-y-6">

        <div>
          <label className="block mb-2 text-gray-300">
            Movie Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your movie title..."
            className="w-full bg-gray-800 rounded-xl p-4"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            Story Idea
          </label>

          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Describe your movie idea..."
            className="w-full h-40 bg-gray-800 rounded-xl p-4"
          />
        </div>

        <button
          onClick={onGenerate}
          className="w-full bg-purple-600 hover:bg-purple-700 transition rounded-xl py-4 font-semibold"
        >
          ✨ Generate Story
        </button>

      </div>
    </div>
  );
}