"use client";

import { signInWithGooglePopup } from "@/utils/firebase";
import "../globals.css";
import LoginForm from "../../../components/LoginForm";

export default function Signup() {
  const handleSignup = async () => {
    try {
      const response = await signInWithGooglePopup();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      {/* Your login form */}
      <LoginForm />

      {/* Divider */}
      <div className="text-center text-gray-500">or</div>

      {/* Google signup button below */}
      <button
        onClick={handleSignup}
        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Signup with Google
      </button>
    </div>
  );
}
