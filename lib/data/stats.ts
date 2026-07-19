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

export interface PartnerLogo {
  name: string;
  /** Path under /public. Omitted for organizations shown as a text
   * wordmark instead of a reproduced logo (see note below). */
  src?: string;
  /** Optional line breaks for long wordmarks, so a multi-word name reads
   * as one entity instead of a hard-to-parse single line. */
  lines?: string[];
  /** Override the default logo height — e.g. CISF's crest is a tall,
   * narrow shape, so at the same height as the wide ISRO/NTPC marks it
   * reads visually smaller and needs a size bump to feel equal-weight. */
  logoClassName?: string;
}

/**
 * Organizations YOUnique has been engaged by for training, counselling,
 * or workshops (per the founder's documented appreciation letters and
 * event records). NTPC, ISRO, and CISF are shown with their own
 * organizational logos. India Post and PM SHRI / Jawahar Navodaya
 * Vidyalaya are shown as text wordmarks rather than reproduced
 * government-emblem artwork, since their letterheads carry the State
 * Emblem of India, whose commercial reproduction Indian law restricts.
 */
export const partnerLogos: PartnerLogo[] = [
  { name: "ISRO", src: "/images/logos/isro.svg", logoClassName: "h-11 sm:h-12" },
  { name: "NTPC", src: "/images/logos/ntpc.svg" },
  { name: "CISF", src: "/images/logos/cisf.svg", logoClassName: "h-14 sm:h-16" },
  { name: "India Post" },
  { name: "PM SHRI Jawahar Navodaya Vidyalaya", lines: ["PM SHRI", "Jawahar Navodaya Vidyalaya"] },
];
