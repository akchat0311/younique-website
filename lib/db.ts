import { Pool } from "pg";

/**
 * Connects to the marketing_leads table owned by the younique-platform
 * (files/ repo) Postgres database — that repo's prisma/schema.prisma is the
 * schema/migration source of truth. This app only ever INSERTs; never run
 * migrations against this database from here.
 */
const globalForDb = globalThis as unknown as { pgPool?: Pool };

export const pool =
  globalForDb.pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== "production") globalForDb.pgPool = pool;
