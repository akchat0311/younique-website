export type ServiceCategory =
  | "Career & Academic Guidance"
  | "Therapeutic & Mind Wellness"
  | "Child & Family Development"
  | "Corporate & Institutional";

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  audience: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
  format: string;
  idealFor: string[];
  popular?: boolean;
  /** Optional real photo for the service detail page (path under /public). */
  image?: string;
}
