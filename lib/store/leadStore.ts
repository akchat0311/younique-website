import { promises as fs } from "fs";
import path from "path";

/**
 * v1 local lead store — appends JSON lines to disk.
 *
 * NOTE: serverless filesystems (e.g. Vercel's default runtime) are
 * ephemeral/read-only outside of `/tmp`, so this does not persist leads in
 * production. It exists so the API routes are fully functional in local/dev
 * and self-hosted environments today. Before launch, swap the call inside
 * `lib/notifications/sendLead.ts` for a real destination (Resend email,
 * HubSpot/CRM, or a database) — this file is the single swap point.
 */
const STORE_DIR = path.join(process.cwd(), "data", "leads");

export async function appendLead(fileName: string, record: object) {
  try {
    await fs.mkdir(STORE_DIR, { recursive: true });
    const filePath = path.join(STORE_DIR, fileName);
    await fs.appendFile(filePath, `${JSON.stringify(record)}\n`, "utf8");
  } catch (error) {
    console.error(`[leadStore] failed to persist lead to ${fileName}`, error);
  }
}
