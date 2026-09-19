export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.younique.in";

// Sprint 8.8 — the younique-platform app (files/ repo): account creation,
// purchase, booking, payment, assessment, appointments. This marketing site
// has never linked to it before this sprint (verified: zero references to
// any platform route anywhere in this repo prior to this change) — every
// existing CTA (Book a Consultation, Sample Report) is a local lead-capture
// form only. TODO(client): confirm the real production platform domain
// before deploy; defaults to the platform's own dev server for local dev.
export const platformUrl =
  process.env.NEXT_PUBLIC_PLATFORM_URL ?? "https://app.younique.in";

// Sprint 8.10 — the two customer-facing doors into the platform, named once
// here because Navbar, MobileMenu and Footer all render them and had each
// hardcoded their own `${platformUrl}/...` string. The distinction these two
// encode is the whole point of the sprint: "Get Started" is for someone who
// does not have an account yet and has not decided what they want, so it
// lands on the platform's own decision page (/get-started), NOT on a signup
// form; "Sign In" is for someone who already has an account, so it lands on
// the platform's existing role-discovery login page (/login). Neither is a
// new platform route — both already exist and already work.
export const PLATFORM_ROUTES = {
  getStarted: "/get-started",
  signIn: "/login",
  counsellorSignIn: "/login/counsellor",
} as const;

/** Absolute URL into the platform app. Cross-app, so always a plain <a>. */
export function platformHref(path: string): string {
  return `${platformUrl}${path}`;
}
