import { z } from "zod";

// Your schema
export const categoryItemSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  imageUrl: z.string().url().optional(),
});

// TypeScript type inferred from schema
export type CategoryItem = z.infer<typeof categoryItemSchema>;
