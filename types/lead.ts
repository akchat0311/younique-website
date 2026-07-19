export type AudienceType = "student" | "parent" | "professional" | "school";

export interface ConsultationLead {
  name: string;
  email: string;
  phone: string;
  audienceType: AudienceType;
  preferredDate?: string;
  message?: string;
  submittedAt: string;
}

export interface SampleReportLead {
  name: string;
  email: string;
  phone: string;
  audienceType: AudienceType;
  submittedAt: string;
}
