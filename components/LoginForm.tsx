"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "../lib/schemas/user";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  auth,
  signInWithGooglePopup,
  signInWithEmailAndPasswordUtil,
} from "@/utils/firebase";
import { AuthError } from "firebase/auth";
import { useAuth } from "../contexts/AuthContext";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuth();

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
    } catch (err) {
      console.error(err);
    }
  };


  const handleSubmitGoogle = async () => {
    try {
      const response = await signInWithGooglePopup();
      console.log("User logged in with Google:", response);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Login</h1>
      <h3 className="text-lg font-semibold mb-4">Access your account</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-6 w-full max-w-md mx-auto"
      >
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
          <Input
            className="w-full p-2 border border-gray-300 rounded"
            {...register("email")}
            autoComplete="new-email"
            placeholder="Enter your email"
          />
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
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div className="flex flex-row gap-4 mt-4">
          <Button className="flex-1 w-full" type="submit">
            Login
          </Button>
          <Button
            type="button"
            onClick={handleSubmitGoogle}
            className="flex-1 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Login with Google
          </Button>
        </div>
      </form>
    </div>
  );
}
