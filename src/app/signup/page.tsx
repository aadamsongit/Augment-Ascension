"use client";

import { signInWithGooglePopup } from "@/utils/firebase";
import "../globals.css";
import LoginForm from "../../../components/LoginForm";
import SignupForm from "../../../components/SignupForm";
import { Button } from "@/components/ui/button";

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
        <div className="flex flex-row gap-4 mt-4">
          <Button type="submit" form="signup-form" className="flex-1 w-full">
            Sign Up
          </Button>
          <button
            type="button"
            onClick={handleSignup}
            className="flex-1 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Signup with Google
          </button>
        </div>
      </div>
    </div>
  );
}
