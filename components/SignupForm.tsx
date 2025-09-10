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
  signInWithGooglePopup,
} from "@/utils/firebase";
import { Button } from "@/components/ui/button";
import { useAuth } from "../contexts/AuthContext";

export default function SignupForm() {
  const { user, loading, logout } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const { signup } = useAuth();

  const onSubmit = async (data: SignupFormData) => {
    try {
      await signup(data.email, data.password);
      reset();
    } catch (err) {
      console.error(err);
    }
  };

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
      <h1 className="text-2xl font-bold mb-2">Sign Up</h1>
      <h3 className="text-lg font-semibold mb-4">Create a new account</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-6 w-full max-w-md mx-auto"
        id="signup-form"
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
            type="email"
            {...register("email", { required: "Email is required" })}
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
            {...register("password", { required: "Password is required" })}
            autoComplete="new-password"
            placeholder="Enter your password"
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
            {...register("confirmPassword", {
              required: "Please Confirm your password",
            })}
            autoComplete="new-password"
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>
        <div className="flex flex-row gap-4 mt-4">
          <Button className="flex-1 w-full" type="submit">
            Sign Up
          </Button>
          <Button
            type="button"
            onClick={handleSignup}
            className="flex-1 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Signup with Google
          </Button>
        </div>
      </form>
    </div>
  );
}
