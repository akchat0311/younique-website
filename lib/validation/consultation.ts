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
  // Sprint 8.12 — which page this was submitted from. Client-supplied, so
  // it is capped and optional: it is analytics, never trusted input, and a
  // submission must never fail because a path was odd or absent.
  sourcePage: z.string().trim().max(200).optional(),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;
