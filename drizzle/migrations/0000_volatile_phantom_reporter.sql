CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "wishes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"uri" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"creator_id" integer NOT NULL
);
