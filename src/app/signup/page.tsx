"use client";

import { signInWithGooglePopup } from "@/utils/firebase";
import "../globals.css";

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
    <div>
      <button onClick={handleSignup}>Signup with Google</button>
    </div>
  );
}
