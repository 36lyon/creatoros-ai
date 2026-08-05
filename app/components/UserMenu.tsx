"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser, signOut } from "../lib/auth";

export default function UserMenu() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  useEffect(() => {
    async function loadUser() {
      const user = await getCurrentUser();

      if (user?.email) {
        setEmail(user.email);
      }
    }

    loadUser();
  }, []);

  async function handleLogout() {
    await signOut();

    router.push("/login");
  }

  return (
    <div className="flex items-center gap-4">

      <div className="text-right">
        <p className="text-sm text-gray-400">
          Logged in as
        </p>

        <p className="font-semibold text-white">
          {email || "Loading..."}
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
      >
        Logout
      </button>

    </div>
  );
}