import type { Service } from "@/types/service";

/**
 * Full productized catalog, faithful to YOUnique's real service lines
 * (verified against the live Services page, not invented). Shape is
 * designed so a future CMS or the custom assessment platform's API can
 * replace `getServices()`/`getServiceBySlug()` without touching any page.
 */
const services: Service[] = [
  {
    slug: "stream-selection-assessment",
    image: "/images/photos/students.jpg",
    name: "Stream Selection Assessment",
    category: "Career & Academic Guidance",
    audience: "Class 9–10 Students",
    tagline: "Choose Science, Commerce, or Humanities with evidence, not guesswork.",
    description:
      "Part of YOUnique's core Career Counselling & Aptitude Test service — this variant is built for the Class 10 board decision point, combining psychological assessment with the counselor's professional experience to map aptitude, interest, and personality against India's academic streams.",
    deliverables: [
      "20+ page psychometric report covering aptitude, interest, and personality",
      "Ranked stream recommendations with supporting rationale",
      "45-minute 1:1 interpretation session with a counseling psychologist",
      "Parent briefing summary",
      "Optional DMIT fingerprint analysis add-on for deeper insight into inborn learning style",
    ],
    duration: "60–75 minute assessment",
    format: "Online assessment + in-person or video consultation",
    idealFor: ["Class 9 and 10 students", "Parents evaluating stream options"],
    popular: true,
  },
  {
    slug: "career-clarity-assessment",
    image: "/images/photos/career-guidance.jpg",
    name: "Career Clarity Assessment",
    category: "Career & Academic Guidance",
    audience: "Class 11–12 & Undergraduate Students",
    tagline: "Turn broad interest areas into a shortlist of specific career paths.",
    description:
      "For students who've chosen a stream but not a direction — this Career Counselling & Aptitude Test variant combines aptitude and interest mapping with an evolving landscape of degree and career options, so decisions in a crowded, fast-changing job market are made with evidence.",
    deliverables: [
      "Comprehensive aptitude and interest-fit report",
      "Shortlist of 5–8 aligned career and degree paths",
      "60-minute 1:1 counseling session",
      "Follow-up email support for 2 weeks",
      "Optional DMIT fingerprint analysis add-on",
    ],
    duration: "75–90 minute assessment",
    format: "Online assessment + video consultation",
    idealFor: ["Class 11–12 students", "First and second-year undergraduates"],
  },
  {
    slug: "career-transition-assessment",
    image: "/images/photos/professional.jpg",
    name: "Career Transition Assessment",
    category: "Career & Academic Guidance",
    audience: "Working Professionals",
    tagline: "Evaluate a pivot, plateau, or return-to-work decision with structured data.",
    description:
      "A psychometric and values-based Career Counselling & Aptitude Test for professionals reassessing their path — designed around transferable strengths, motivation drivers, and realistic transition planning.",
    deliverables: [
      "Personality, values, and transferable-strengths report",
      "Structured transition-readiness evaluation",
      "60-minute 1:1 coaching session with a career counselor",
      "Action plan document",
    ],
    duration: "60-minute assessment",
    format: "Online assessment + video consultation",
    idealFor: ["Mid-career professionals", "Career-break returners", "Founders evaluating a pivot"],
  },
  {
    slug: "memory-learning-techniques",
    image: "/images/photos/student-reading.jpg",
    name: "Memory & Learning Techniques",
    category: "Career & Academic Guidance",
    audience: "Students, Teachers & Professionals",
    tagline: "Scientific techniques to read faster, retain more, and study without dread.",
    description:
      "Training in scientific methods for reading and retention that assess the brain's natural capabilities and make even difficult subjects easier to study — particularly valuable for competitive exams, where time management is critical.",
    deliverables: [
      "An assessment of your current memory and reading patterns",
      "Structured techniques for faster reading and long-term retention",
      "Exam-specific strategies for time-bound competitive exams",
      "Practice exercises to build the habit beyond the session",
    ],
    duration: "2–3 sessions, 60 minutes each",
    format: "In-person or online, individual or small group",
    idealFor: ["School and college students", "Teachers", "Competitive-exam aspirants"],
  },
  {
    slug: "dmit-assessment",
    image: "/images/photos/child-activity.jpg",
    name: "DMIT — Dermatoglyphics Multiple Intelligence Test",
    category: "Child & Family Development",
    audience: "Children, Students & Professionals",
    tagline: "Fingerprint-based analysis of inborn potential, learning style, and personality.",
    description:
      "A scientific fingerprint pattern analysis grounded in neuroscience, genetics, psychology, and embryology that reveals inborn potential and personality type — used to identify natural talent, determine an ideal learning style, and guide career and parenting decisions.",
    deliverables: [
      "Fingerprint sample collection and biometric analysis",
      "A detailed report on inborn intelligence type and learning style",
      "Guidance on ideal study techniques and career direction",
      "Recommendations for parents and teachers on tailoring their approach",
    ],
    duration: "Single session for sample collection; consultation call once the report is ready",
    format: "In-person sample collection, report reviewed on a follow-up call",
    idealFor: ["Children and young students", "Students exploring career direction", "HR teams assessing team strengths"],
    popular: true,
  },
  {
    slug: "psychological-counselling",
    image: "/images/photos/counselling-session.jpg",
    name: "Psychological Counselling & Guidance",
    category: "Therapeutic & Mind Wellness",
    audience: "Individuals & Families",
    tagline: "Support for stress, relationships, and everyday mental wellness — not just clinical disorders.",
    description:
      "Everyday concerns — anger, relationship difficulty, low confidence, unresolved stress — affect a significant share of the population; NIMHANS surveys estimate close to 13.7% of India experiences some form of mental health concern. This service addresses those concerns directly, aiming at mental wellness and life fulfillment, not only crisis management.",
    deliverables: [
      "A confidential 1:1 counselling session",
      "A personalized plan for the specific concern raised",
      "Follow-up sessions as needed",
      "Referral guidance if clinical-level support is required",
    ],
    duration: "45–60 minute sessions",
    format: "In-person or video call",
    idealFor: ["Anyone experiencing stress, anxiety, or relationship difficulty", "Individuals seeking general mental wellness support"],
  },
  {
    slug: "nlp-training",
    image: "/images/photos/coaching-session.jpg",
    name: "NLP — Neuro-Linguistic Programming",
    category: "Therapeutic & Mind Wellness",
    audience: "Professionals & Individuals",
    tagline: "\"The quality of your life is defined by the quality of your communication.\"",
    description:
      "NLP combines Neuro (how your brain processes experience), Linguistic (how you communicate, with yourself and others), and Programming (the beliefs and patterns you run on) into a practical framework for change — used to set and reach goals, manage emotional state, and improve communication and relationships.",
    deliverables: [
      "Goal-setting and emotional state management techniques",
      "Communication and body-language coaching",
      "Tools for handling future obstacles and setbacks",
      "A personalized practice plan",
    ],
    duration: "60–90 minute sessions, or multi-day workshop format",
    format: "1:1 coaching or group workshop",
    idealFor: ["Business professionals", "Educators, athletes, and performers", "Anyone working on communication or personal growth"],
  },
  {
    slug: "eft-emotional-freedom-technique",
    image: "/images/photos/calm-meditation.jpg",
    name: "EFT — Emotional Freedom Techniques",
    category: "Therapeutic & Mind Wellness",
    audience: "All Ages",
    tagline: "A tapping-based technique to clear stress, fear, and unresolved emotional pain.",
    description:
      "EFT is a rapidly growing technique for keeping the mind healthy — addressing stress, negativity, fear, resentment, and unresolved trauma stored in the subconscious mind. Results are often noticeable across multiple areas of life, helping prevent stress from developing into psychosomatic illness.",
    deliverables: [
      "An assessment of the specific emotional pattern or trigger",
      "A guided EFT tapping session",
      "A personalized tapping sequence to practice independently",
      "A follow-up check-in",
    ],
    duration: "45–60 minute sessions",
    format: "In-person or video call",
    idealFor: ["Students under exam or performance stress", "Corporate leaders and homemakers", "Anyone carrying unresolved stress or past emotional pain"],
  },
  {
    slug: "garbh-sanskar",
    image: "/images/photos/garbh-sanskar.jpg",
    name: "Garbh Sanskar — Project Shubhagat",
    category: "Child & Family Development",
    audience: "Expecting Mothers & Families",
    tagline: "Prenatal psychological training for a calmer pregnancy and a healthier start in life.",
    description:
      "Project Shubhagat is a non-profit initiative for pregnant women, grounded in scientific research and cultural tradition. It provides structured training to expectant mothers during pregnancy — when the fetal brain develops at its fastest rate — to support fetal brain development and manage the maternal stress, anxiety, and fear that can otherwise transfer to the child.",
    deliverables: [
      "A structured prenatal training program across the pregnancy",
      "Maternal stress, anxiety, and fear management sessions",
      "Guidance for family members supporting the mother",
      "Access to the Project Shubhagat community",
    ],
    duration: "Structured program spanning the pregnancy, by trimester",
    format: "In-person or online sessions, individual or group",
    idealFor: ["Expecting mothers", "Families preparing for a new child"],
  },
  {
    slug: "corporate-training-workshops",
    name: "Corporate Training & Workshops",
    category: "Corporate & Institutional",
    audience: "Organizations & Institutions",
    tagline: "Team development programs grounded in applied psychology.",
    description:
      "Workshop-format training for organizations, built on the same integrative methodology used in 1:1 counseling — communication, stress management, and team dynamics.",
    deliverables: [
      "Needs assessment call with your team lead",
      "Custom workshop design (half-day or full-day formats)",
      "Post-workshop summary report for stakeholders",
    ],
    duration: "Half-day or full-day formats",
    format: "On-site or virtual delivery",
    idealFor: ["HR & L&D teams", "Government and public-sector departments", "Schools & institutions"],
    image: "/images/corporate-training-workshop.jpg",
  },
];

export const serviceCategories = [
  "Career & Academic Guidance",
  "Therapeutic & Mind Wellness",
  "Child & Family Development",
  "Corporate & Institutional",
] as const;

export function getServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter((s) => s.category === category);
}
