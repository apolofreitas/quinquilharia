"use server";

import { db } from "@/lib/db";
import { wishes } from "@drizzle/schema";
import { InferSelectModel } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export type Wish = InferSelectModel<typeof wishes>;

export const getAllWishes = async () => {
  return await db.query.wishes.findMany();
};

const createWishValuesSchema = createInsertSchema(wishes, {
  title: z.string().min(1),
  uri: z.string().url(),
});

export const createWish = async (
  values: z.infer<typeof createWishValuesSchema>
) => {
  const validValues = createWishValuesSchema.parse(values);

  await db.insert(wishes).values(validValues);
};
