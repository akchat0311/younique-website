import { insertLead, type InsertLeadResult } from "@/lib/store/leadStore";
import type { ConsultationLead } from "@/types/lead";

/**
 * Swap point for real lead delivery. Today: logs + Postgres insert.
 * TODO(client): also wire to Resend (email) and/or a CRM (HubSpot, Zoho)
 * using RESEND_API_KEY / CRM credentials from .env.local — see
 * .env.local.example.
 *
 * Sprint 8.13 — now returns whether the lead was actually stored, so the
 * route can stop telling a customer "Request received" when nothing was.
 */
export async function sendConsultationLead(lead: ConsultationLead): Promise<InsertLeadResult> {
  console.log("[lead:consultation]", lead);
  return insertLead("CONSULTATION", lead);
}
