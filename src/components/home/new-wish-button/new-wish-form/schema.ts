import { z } from "zod";

export const newWishFormSchema = z.object({
  uri: z.string().url(),
  title: z.string().min(1),
  description: z.string().optional(),
});

export type NewWishFormSchema = z.infer<typeof newWishFormSchema>;
