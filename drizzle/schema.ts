import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel, relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
});

export const usersRelations = relations(users, ({ many }) => ({
  wishes: many(wishes),
}));

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;

export const wishes = pgTable("wishes", {
  id: serial("id").primaryKey(),
  title: text("name").notNull(),
  uri: text("uri").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  creatorId: integer("creator_id").notNull(),
});

export const wishesRelations = relations(wishes, ({ one }) => ({
  creator: one(users, {
    fields: [wishes.creatorId],
    references: [users.id],
  }),
}));

export type Wish = InferSelectModel<typeof wishes>;
export type NewWish = InferInsertModel<typeof wishes>;
