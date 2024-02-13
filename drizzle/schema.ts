import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel, relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name"),
});

export const usersRelations = relations(users, ({ many }) => ({
  wishes: many(wishes),
}));

export const wishes = pgTable("wishes", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  uri: text("uri").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  creatorId: text("creator_id").notNull(),
});

export const wishesRelations = relations(wishes, ({ one }) => ({
  creator: one(users, {
    fields: [wishes.creatorId],
    references: [users.id],
  }),
}));
