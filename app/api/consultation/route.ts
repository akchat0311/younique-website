import { NextResponse } from "next/server";
import { consultationSchema } from "@/lib/validation/consultation";
import { sendConsultationLead } from "@/lib/notifications/sendLead";
import { checkRateLimit, clientIdentifier, LEAD_FORM_LIMIT } from "@/lib/rateLimit";

export async function POST(request: Request) {
  // Sprint 9.0A — the only two unauthenticated write endpoints in this app,
  // both writing to the shared production database. 429 with Retry-After so a
  // legitimate caller that trips the limit is told exactly when to return; the
  // message is customer-facing because this is a form a real person is using.
  const gate = checkRateLimit(
    `lead:${clientIdentifier(request)}`,
    LEAD_FORM_LIMIT.limit,
    LEAD_FORM_LIMIT.windowSeconds,
  );
  if (!gate.ok) {
    return NextResponse.json(
      {
        success: false,
        error:
          "You've sent several requests in a short time. Please wait a few minutes and try again, or email us at info@younique.in and we'll pick it up straight away.",
      },
      { status: 429, headers: { "Retry-After": String(gate.retryAfter) } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body" }, { status: 400 });
  }

  const parsed = consultationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }
  // Sprint 8.13 — a lead that reaches nobody is worse than a customer who is
  // told to try again: the customer can still pick up the phone, but a
  // silently discarded lead is gone with no trace anywhere. So a persistence
  // failure is now surfaced (503) rather than reported as success.
  const stored = await sendConsultationLead({ ...parsed.data, submittedAt: new Date().toISOString() });
  if (!stored.ok) {
    return NextResponse.json(
      {
        success: false,
        error:
          "We couldn't save your request just now. Please try again in a moment, or email us at info@younique.in and we'll pick it up straight away.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ success: true });
}
