export type AudienceType = "student" | "parent" | "professional" | "school";

export interface ConsultationLead {
  name: string;
  email: string;
  phone: string;
  audienceType: AudienceType;
  preferredDate?: string;
  message?: string;
  sourcePage?: string;
  submittedAt: string;
}

export interface SampleReportLead {
  name: string;
  email: string;
  phone: string;
  audienceType: AudienceType;
  sourcePage?: string;
  submittedAt: string;
}
