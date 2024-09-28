import { migrate } from "drizzle-orm/postgres-js/migrator";

import db, { client } from ".";

await migrate(db, { migrationsFolder: "./src/db/migrations" });
// for query purpose
await client.end();
