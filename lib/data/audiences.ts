import type { AudienceType } from "@/types/lead";

export const audienceOptions: { value: AudienceType; label: string }[] = [
  { value: "student", label: "Student" },
  { value: "parent", label: "Parent" },
  { value: "professional", label: "Working Professional" },
  { value: "school", label: "School / Institution" },
];
