"use client";

import { useState } from "react";
import CharacterLibrary from "../components/CharacterLibrary";

export default function Characters() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const [age, setAge] = useState("");
const [role, setRole] = useState("");
const [personality, setPersonality] = useState("");

  async function generateCharacter() {
    setResult("Generating character...");

    const response = await fetch("/api/generate-character", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify({
    prompt: `
Create a Hollywood-quality movie character using these details:

Name: ${name}
Age: ${age}
Role: ${role}
Personality: ${personality}

Generate:

1. Character Biography
2. Physical Appearance
3. Personality
4. Strengths
5. Weaknesses
6. Goals
7. Fears
8. Special Skills
9. Catchphrase
10. Cinematic Introduction Scene
`,
      }),
    });

   const data = await response.json();

if (!data.success) {
  setResult(data.error || "Failed to generate character.");
  return;
}

setResult(data.text);

const saveResponse = await fetch("/api/characters", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    projectId: 3,
    name,
    age,
    role,
    personality,
    biography: data.text,
  }),
});

if (!saveResponse.ok) {
  const errorData = await saveResponse.json();

  console.error(errorData);

  alert(JSON.stringify(errorData, null, 2));
}
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold">🎭 Character Creator</h1>

      <p className="text-gray-400 mt-3">
        Build unique AI characters for your stories.
      </p>

      <div className="mt-8 max-w-xl space-y-5">
        <input
          className="w-full bg-gray-900 p-4 rounded-xl"
          placeholder="Character Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
  className="w-full bg-gray-900 p-4 rounded-xl"
  placeholder="Age"
  value={age}
  onChange={(e) => setAge(e.target.value)}
/>
<select
  className="w-full bg-gray-900 p-4 rounded-xl"
  value={role}
  onChange={(e) => setRole(e.target.value)}
>
          <option>Character Role</option>
          <option>Hero</option>
          <option>Villain</option>
          <option>Supporting Character</option>
        </select>

        <textarea
  className="w-full bg-gray-900 p-4 rounded-xl h-40"
  placeholder="Personality and appearance..."
  value={personality}
  onChange={(e) => setPersonality(e.target.value)}
/>

        <button
          onClick={generateCharacter}
          className="bg-purple-600 px-8 py-3 rounded-xl"
        >
          Generate Character
        </button>
      </div>
      <div className="mt-10 bg-gray-900 p-6 rounded-xl max-w-xl">
        <h2 className="text-2xl font-bold">AI Character Profile</h2>

        <pre className="text-gray-300 mt-3 whitespace-pre-wrap">
          {result || "Your AI-generated character details will appear here."}
        </pre>
      </div>

      <CharacterLibrary />

    </main>
      );
}