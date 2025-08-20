// /src/lib/schemas/user.ts
import { z } from "zod";

export const signUpSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"], // field to attach the error
});

export const loginSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// 2️⃣ Infer TypeScript type from schema
export type LoginFormData = z.infer<typeof loginSchema>; // <-- THIS is the type React Hook Form uses
