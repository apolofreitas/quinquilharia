import { loadEnvConfig } from "@next/env";

import { drizzle } from "drizzle-orm/vercel-postgres";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { sql } from "@vercel/postgres";

import drizzleConfig from "@drizzle/drizzle.config";

loadEnvConfig(".", process.env.NODE_ENV !== "production");

const db = drizzle(sql);

migrate(db, { migrationsFolder: drizzleConfig.out });
