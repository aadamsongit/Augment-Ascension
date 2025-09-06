// /src/lib/schemas/user.ts
import { z } from "zod";

export const signUpSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(8, "Password must be at least 8 characters").regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/\d/, "Password must contain at least one number")
  .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
  displayName: z.string().min(2, "Display Name must be at least 2 characters").optional(),
  confirmPassword: z.string().min(8, "Confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"], // field to attach the error
});

export type SignupFormData = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(8, "Password must be at least 8 characters").regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/\d/, "Password must contain at least one number")
  .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
});

// 2️⃣ Infer TypeScript type from schema
export type LoginFormData = z.infer<typeof loginSchema>; 
