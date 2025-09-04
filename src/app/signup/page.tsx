"use client";


import "../globals.css";
import LoginForm from "../../../components/LoginForm";
import SignupForm from "../../../components/SignupForm";
import { Button } from "@/components/ui/button";

export default function Signup() {


  return (
    <div className="flex flex-row gap-8 justify-center items-start p-6">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
      <div className="w-full max-w-md">
        <SignupForm />
      </div>
    </div>
  );
}
