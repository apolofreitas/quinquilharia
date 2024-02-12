import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export const wishes = pgTable("wishes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  uri: text("uri").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Wish = InferSelectModel<typeof wishes>;
export type NewWish = InferInsertModel<typeof wishes>;
