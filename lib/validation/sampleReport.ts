import { z } from "zod";

export const sampleReportSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(10, "Enter a valid phone number")
    .max(15, "Enter a valid phone number"),
  audienceType: z.enum(["student", "parent", "professional", "school"], {
    message: "Select who this report is for",
  }),
});

export type SampleReportInput = z.infer<typeof sampleReportSchema>;
