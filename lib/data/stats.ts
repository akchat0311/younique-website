export interface Stat {
  label: string;
  value: string;
  verified: boolean;
}

/**
 * TODO(client): only `verified: true` entries are confirmed facts (founder's
 * years of practice). The rest are illustrative placeholders — replace with
 * real, measurable figures before launch. Do not present placeholder values
 * as verified claims in copy or marketing collateral.
 */
export const stats: Stat[] = [
  { label: "Years of practice", value: "15+", verified: true },
  { label: "Clients served across all services", value: "2,500+", verified: false },
  { label: "Partner schools", value: "12+", verified: false },
  { label: "Average consultation rating", value: "4.9/5", verified: false },
];

/**
 * TODO(client): replace with real partner-school / institution logos.
 * Names below are placeholders only — no partnership implied or claimed.
 */
export const partnerLogos: string[] = [
  "Partner School",
  "Partner School",
  "Partner Institute",
  "Partner School",
  "Partner Organization",
];
