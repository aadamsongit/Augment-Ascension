"use client";

import "../globals.css";
import LoginForm from "../../../components/LoginForm";
import SignupForm from "../../../components/SignupForm";
import { Button } from "@/components/ui/button";

export default function Signup() {
  return (
    <div className="flex flex-row gap-8 justify-center items-start p-6 flex-wrap">
      <div className="flex-1 min-w-[20rem] max-w-md">
        <LoginForm />
      </div>
      <div className="flex-1 min-w-[20rem] max-w-md">
        <SignupForm />
      </div>
    </div>
  );
}
