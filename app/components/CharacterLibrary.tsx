"use client";

import { useEffect, useState } from "react";

type Character = {
  id: number;
  name: string;
  age: string | null;
  role: string | null;
};

export default function CharacterLibrary() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    loadCharacters();
  }, []);

  async function loadCharacters() {
    try {
      const res = await fetch("/api/characters");
      const data = await res.json();
      setCharacters(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-gray-900 rounded-2xl p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6">
        🎭 Character Library
      </h2>

      {characters.length === 0 ? (
        <p className="text-gray-400">
          No characters created yet.
        </p>
      ) : (
        <div className="space-y-4">
          {characters.map((character) => (
            <div
              key={character.id}
              className="bg-gray-800 p-4 rounded-xl"
            >
              <h3 className="text-xl font-bold">
                {character.name}
              </h3>

              <p className="text-gray-400">
                {character.role}
              </p>

              <p className="text-gray-500">
                Age: {character.age}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}