import { appendLead } from "@/lib/store/leadStore";
import type { ConsultationLead, SampleReportLead } from "@/types/lead";

/**
 * Swap point for real lead delivery. Today: logs + local append-only store.
 * TODO(client): wire to Resend (email) and/or a CRM (HubSpot, Zoho) using
 * RESEND_API_KEY / CRM credentials from .env.local — see .env.local.example.
 */
export async function sendConsultationLead(lead: ConsultationLead) {
  console.log("[lead:consultation]", lead);
  await appendLead("consultation.jsonl", lead);
}

export async function sendSampleReportLead(lead: SampleReportLead) {
  console.log("[lead:sample-report]", lead);
  await appendLead("sample-report.jsonl", lead);
}
