"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "../lib/schemas/user";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  auth,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "@/utils/firebase";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("onSubmit fired", data);
    try {
      const user = await createAuthUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (user) {
        console.log("User created:", user);
      } else {
        console.log("No user returned from createAuthUserWithEmailAndPassword");
      }
      // Optional: create user document
      await createUserDocumentFromAuth(user);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Login</h1>
      <h3 className="text-lg font-semibold mb-4">Access your account</h3>
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
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
