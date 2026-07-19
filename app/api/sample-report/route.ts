import { NextResponse } from "next/server";
import { sampleReportSchema } from "@/lib/validation/sampleReport";
import { sendSampleReportLead } from "@/lib/notifications/sendLead";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body" }, { status: 400 });
  }

  const parsed = sampleReportSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  await sendSampleReportLead({ ...parsed.data, submittedAt: new Date().toISOString() });

  // TODO(client): replace with the real sample report PDF in public/sample-reports/.
  return NextResponse.json({
    success: true,
    downloadUrl: "/sample-reports/younique-sample-report.pdf",
  });
}
