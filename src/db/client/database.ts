// src/db/client/database.ts


import { drizzle } from "drizzle-orm/libsql";

import * as schema from "@/db/schema/schema";
console.log(process.env.TURSO_DATABASE_URL);
/**
 * Centrale databaseverbinding.
 *
 * Voorlopig uitsluitend Turso/libSQL.
 * Dezelfde code werkt later ook lokaal
 * met een SQLite-bestand via libSQL.
 */
export const db = drizzle({
  connection: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
  schema,
});

