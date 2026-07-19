export interface Credential {
  name: string;
  category: "Core Practice" | "Integrative Methodology";
}

export const founder = {
  name: "Suyash Thakur",
  titles: [
    "Counseling Psychologist",
    "Psychotherapist",
    "Trainer",
    "Healer",
    "Writer",
    "Career Counselor",
    "Life Coach",
  ],
  yearsOfPractice: 15,
  bio: "Suyash Thakur has spent over 15 years working at the intersection of psychology, education, and human development — combining structured assessment (psychometric testing, DMIT) with technique-based practice (NLP, EFT, memory training) and prenatal work (Garbh Sanskar) to help students, parents, professionals, and families move from uncertainty to a clear, evidence-backed direction.",
};

/**
 * Real credentials carried over from YOUnique's existing practice. Presented
 * as an "integrative methodology" layer that sits alongside psychometric
 * assessment, per brand direction — full list retained, not stripped.
 */
export const credentials: Credential[] = [
  { name: "Counseling Psychology", category: "Core Practice" },
  { name: "Psychotherapy", category: "Core Practice" },
  { name: "Career Counseling", category: "Core Practice" },
  { name: "International NLP Certification — International Coach & Trainer Association", category: "Integrative Methodology" },
  { name: "Gestalt Therapy", category: "Integrative Methodology" },
  { name: "Cognitive Behavioral Therapy (CBT)", category: "Integrative Methodology" },
  { name: "Rational Emotive Behavior Therapy (REBT)", category: "Integrative Methodology" },
  { name: "Emotional Freedom Technique (EFT)", category: "Integrative Methodology" },
  { name: "Reiki", category: "Integrative Methodology" },
  { name: "Hypnotherapy", category: "Integrative Methodology" },
  { name: "International Certification in Learning & Memory Techniques", category: "Integrative Methodology" },
];

/** Real, verifiable past corporate/institutional training clients. */
export const corporateClients: string[] = ["ISRO", "NTPC", "Police Department", "Postal Department"];

/** Real business registration numbers — used as a quiet institutional trust signal in the footer. */
export const registrations = {
  gem: "WNDB24001273896",
  msmeUdyam: "CG 14 0085851",
  tradeLicense: "4621012401008411",
};
