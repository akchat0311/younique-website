import { randomUUID } from "crypto";
import { pool } from "@/lib/db";

export type MarketingLeadSource = "CONSULTATION" | "SAMPLE_REPORT";

interface MarketingLeadRecord {
  name: string;
  email: string;
  phone: string;
  audienceType: string;
  preferredDate?: string;
  message?: string;
  sourcePage?: string;
}

export type InsertLeadResult = { ok: true } | { ok: false; error: unknown };

/**
 * Inserts a form submission into the `marketing_leads` table in the
 * younique-platform Postgres database (see files/prisma/schema.prisma there
 * for the schema/migration source of truth).
 *
 * Sprint 8.13 — this used to swallow every failure: it caught, logged, and
 * returned void, so the caller could not tell a stored lead from a lost one
 * and told the customer "Request received" either way. That is the worst
 * possible shape for this particular operation — leads are the entire point
 * of both forms, the business has no other record of them, and a
 * misconfigured DATABASE_URL in production would discard every one of them
 * with nothing visible anywhere. It was not hypothetical: it happened during
 * this sprint's own testing and three submissions vanished before anyone
 * noticed the log line.
 *
 * It now reports what happened and lets the caller decide. One retry, because
 * the common real failure here is a transient connection blip rather than a
 * misconfiguration, and re-asking a customer to fill in a form because of a
 * dropped socket is its own kind of lost lead.
 */
export async function insertLead(
  source: MarketingLeadSource,
  record: MarketingLeadRecord,
): Promise<InsertLeadResult> {
  const values = [
    randomUUID(),
    source,
    record.name,
    record.email,
    record.phone,
    record.audienceType.toUpperCase(),
    record.preferredDate ?? null,
    record.message ?? null,
    record.sourcePage ?? null,
  ];

  const sql = `INSERT INTO marketing_leads (id, source, name, email, phone, audience_type, preferred_date, message, source_page)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;

  let lastError: unknown;
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      await pool.query(sql, values);
      return { ok: true };
    } catch (error) {
      lastError = error;
      if (attempt === 1) {
        await new Promise((r) => setTimeout(r, 250));
        continue;
      }
      // Logged with the lead's own identifying fields so it can be recovered
      // by hand from the log if it never reaches the table. Deliberately not
      // the whole record — no free-text message, which can carry anything a
      // stranger typed into a public form.
      console.error(
        `[leadStore] FAILED to persist ${source} lead after 2 attempts ` +
          `— name=${record.name} email=${record.email} phone=${record.phone} ` +
          `page=${record.sourcePage ?? "unknown"}`,
        error,
      );
    }
  }
  return { ok: false, error: lastError };
}
