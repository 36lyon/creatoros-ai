"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MainLayout from "../components/MainLayout";
import { signIn, signUp } from "../lib/auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignIn() {
    setLoading(true);

    const { error } = await signIn(email, password);

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      router.push("/dashboard");
    }
  }

  async function handleSignUp() {
    setLoading(true);

    const { error } = await signUp(email, password);

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert("✅ Account created successfully! You can now login.");
    }
  }

  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8">

          <h1 className="text-4xl font-bold text-white text-center">
            🔐 CreatorOS Login
          </h1>

          <p className="text-gray-400 text-center mt-3 mb-8">
            Sign in to access your CreatorOS AI workspace.
          </p>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-gray-800 rounded-xl p-4 mb-4 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-800 rounded-xl p-4 mb-6 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleSignIn}
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 rounded-xl py-4 font-semibold mb-4"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

          <button
            onClick={handleSignUp}
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 rounded-xl py-4 font-semibold"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </div>
      </div>
    </MainLayout>
  );
}