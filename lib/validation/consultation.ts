import { z } from "zod";

export const consultationSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(10, "Enter a valid phone number")
    .max(15, "Enter a valid phone number"),
  audienceType: z.enum(["student", "parent", "professional", "school"], {
    message: "Select who this consultation is for",
  }),
  preferredDate: z.string().trim().optional(),
  message: z.string().trim().max(1000, "Keep it under 1000 characters").optional(),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;
