"use client";

import { signInWithGooglePopup } from "@/utils/firebase";
import "../globals.css";
import LoginForm from "../../../components/LoginForm";
import SignupForm from "../../../components/SignupForm";

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
    <div className="flex flex-row gap-8 justify-center items-start p-6">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
      <div className="w-full max-w-md">
        <SignupForm />
        <div className="text-center text-gray-500 mt-4">or</div>
        <button
          onClick={handleSignup}
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mt-2"
        >
          Signup with Google
        </button>
      </div>
    </div>
  );
}
