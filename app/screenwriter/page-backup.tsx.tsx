"use client";

import { useState } from "react";

export default function Screenwriter() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [idea, setIdea] = useState("");
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateScript() {
    if (!title || !genre || !idea) {
      alert("Please complete all fields.");
      return;
    }

    setLoading(true);
    setScript("");

    try {
      const prompt = `
Write a professional screenplay.

Title: ${title}

Genre: ${genre}

Story Idea:
${idea}
`;

      const response = await fetch("/api/generate-script", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (data.success) {
        setScript(data.text);
      } else {
        setScript("❌ " + data.error);
      }
    } catch (err) {
      console.error(err);
      setScript("Failed to contact AI.");
    }

    setLoading(false);
  }