import { PLATFORM_ROUTES, platformHref } from "@/lib/site";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  children: NavLink[];
}

export type NavItem = NavLink | NavGroup;

export function isNavGroup(item: NavItem): item is NavGroup {
  return "children" in item;
}

export const audienceLinks: NavLink[] = [
  { label: "Students & Parents", href: "/students-parents" },
  { label: "Families & Children", href: "/families-children" },
  { label: "Schools", href: "/schools" },
  { label: "Professionals", href: "/professionals" },
];

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Methodology", href: "/methodology" },
  { label: "Who We Help", children: audienceLinks },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

export const footerNav = {
  // Sprint 8.10 — heading was "Platform", which now collides head-on with
  // the actual platform app this site links into ("Platform: Services,
  // Methodology, Sample Report, Book a Consultation" reads as though those
  // four live in the product). These are marketing pages on this site;
  // "Explore" says so without claiming anything about which app you're in.
  Explore: [
    { label: "Services", href: "/services" },
    { label: "Methodology", href: "/methodology" },
    { label: "Let's Talk", href: "/book-consultation" },
  ] as NavLink[],
  // Sprint 8.8 — the platform app's own account/purchase pages. Sprint 8.10
  // resolves them to absolute URLs here rather than leaving the Footer to
  // special-case this one group by its heading string: NEXT_PUBLIC_* is
  // inlined at build time, so platformHref() is safe in a data module, and
  // the Footer can now just ask "is this href absolute?" like any other
  // renderer would.
  Account: [
    { label: "Sign In", href: platformHref(PLATFORM_ROUTES.signIn) },
    { label: "Get Started", href: platformHref(PLATFORM_ROUTES.getStarted) },
    // Login rework (Sep 2026, client decision): staff sign-in pages are
    // URL-only — no counsellor/admin links on any customer-facing surface.
  ] as NavLink[],
  Audiences: audienceLinks,
  Company: [
    { label: "About", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ] as NavLink[],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ] as NavLink[],
};
