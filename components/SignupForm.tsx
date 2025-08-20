"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignupFormData } from "../lib/schemas/user";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignupFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Email</label>
        <Input {...register("email")} autoComplete="new-email" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label>Password</label>
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
        <label>Confirm Password</label>
        <Input
          type="password"
          {...register("confirmPassword")}
          autoComplete="new-password"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword.message}</p>
        )}
      </div>
      <Button type="submit">Sign Up</Button>
    </form>
  );
}
