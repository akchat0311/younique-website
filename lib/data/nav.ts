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
  Platform: [
    { label: "Services", href: "/services" },
    { label: "Methodology", href: "/methodology" },
    { label: "Sample Report", href: "/sample-report" },
    { label: "Book a Consultation", href: "/book-consultation" },
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
