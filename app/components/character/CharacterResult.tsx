type Character = {
  name: string;
  age: string;
  occupation: string;
  personality: string;
  goals: string;
  weaknesses: string;
  relationships: string;
  backstory: string;
  appearance: string;
  imagePrompt: string;
};

type CharacterResultProps = {
  character: Character | null;
  onCopy: () => void;
};

export default function CharacterResult({
  character,
  onCopy,
}: CharacterResultProps) {
  if (!character) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-6xl mb-4">🎭</div>
          <h2 className="text-2xl font-bold">
            Your AI Character
          </h2>
          <p className="mt-4">
            Generate a character to see the result here.
          </p>
        </div>
      </div>
    );
  }

  const fields = [
    ["👤 Name", character.name],
    ["🎂 Age", character.age],
    ["💼 Occupation", character.occupation],
    ["🧠 Personality", character.personality],
    ["🎯 Goals", character.goals],
    ["⚠️ Weaknesses", character.weaknesses],
    ["❤️ Relationships", character.relationships],
    ["📖 Backstory", character.backstory],
    ["👕 Appearance", character.appearance],
    ["🎨 AI Image Prompt", character.imagePrompt],
  ];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl">
      <div className="flex items-center justify-between border-b border-gray-800 p-6">
        <h2 className="text-2xl font-bold text-white">
          🎭 AI Character Profile
        </h2>

        <button
          onClick={onCopy}
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
        >
          📋 Copy
        </button>
      </div>

      <div className="p-6 space-y-5">
        {fields.map(([label, value]) => (
          <div
            key={label}
            className="bg-gray-800 rounded-xl p-5"
          >
            <h3 className="text-lg font-bold text-purple-400">
              {label}
            </h3>

            <p className="mt-2 text-gray-300 whitespace-pre-wrap">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}