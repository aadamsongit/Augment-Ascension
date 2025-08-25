"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signUpSchema,
  SignupFormData,
  LoginFormData,
} from "../lib/schemas/user";
import { Input } from "@/components/ui/input";
import {
  auth,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "@/utils/firebase";
import { Button } from "@/stories/Button";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      const user = await createAuthUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("User created:", user);

      // Optional: create Firestore user doc
      await createUserDocumentFromAuth(user); // Removed displayName
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Sign Up</h1>
      <h3 className="text-lg font-semibold mb-4">Create a new account</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            style={{
              fontFamily: "Orbitron, sans-serif",
              paddingBottom: "0.5rem",
              display: "inline-block",
            }}
          >
            Email
          </label>
          <Input {...register("email")} autoComplete="new-email" />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label
            style={{
              fontFamily: "Orbitron, sans-serif",
              paddingBottom: "0.5rem",
              display: "inline-block",
            }}
          >
            Password
          </label>
          <Input
            type="password"
            {...register("password")}
            autoComplete="new-password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div>
          <label
            style={{
              fontFamily: "Orbitron, sans-serif",
              paddingBottom: "0.5rem",
              display: "inline-block",
            }}
          >
            Confirm Password
          </label>
          <Input
            type="password"
            {...register("confirmPassword")}
            autoComplete="new-password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>
        {/* Sign Up button removed; now handled in signup/page.tsx */}
      </form>
    </div>
  );
}
