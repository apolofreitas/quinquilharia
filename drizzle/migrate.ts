import { loadEnvConfig } from "@next/env";

import { drizzle } from "drizzle-orm/vercel-postgres";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { sql } from "@vercel/postgres";

import drizzleConfig from "@drizzle/drizzle.config";

loadEnvConfig(".", process.env.NODE_ENV !== "production");

async function main() {
  const db = drizzle(sql, { logger: true });

  await migrate(db, { migrationsFolder: drizzleConfig.out });

  await sql.end();
}
main();
