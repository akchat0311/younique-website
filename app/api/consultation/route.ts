import { NextResponse } from "next/server";
import { consultationSchema } from "@/lib/validation/consultation";
import { sendConsultationLead } from "@/lib/notifications/sendLead";

export async function POST(request: Request) {
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

  await sendConsultationLead({ ...parsed.data, submittedAt: new Date().toISOString() });

  return NextResponse.json({ success: true });
}
