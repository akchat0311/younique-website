import type { Resource } from "@/types/resource";

const resources: Resource[] = [
  {
    slug: "how-psychometric-assessment-works",
    title: "How a psychometric career assessment actually works",
    excerpt:
      "What's really being measured when you take an aptitude and interest assessment — and why it produces a more reliable answer than a conversation alone.",
    category: "Methodology",
    readTime: "6 min read",
    publishedAt: "2026-04-02",
    body: [
      "Most career advice is a single conversation: someone asks what you enjoy, weighs it against what they know about the job market, and gives you an opinion. It's useful, but it's built on a sample size of one — you, on one day, describing yourself as you currently understand yourself.",
      "A psychometric assessment works differently. It measures aptitude (how you actually perform on structured reasoning tasks — verbal, numerical, spatial, abstract), interest (which activities and environments you're drawn to, independent of what you think you 'should' want), and personality traits that affect how you work with people, ambiguity, and pressure. Each is scored against normed data, not impression.",
      "The result isn't a single answer — it's a ranked set of directions with the reasoning shown. A student might have the aptitude for engineering but an interest profile that points toward design; a good report surfaces that tension explicitly instead of collapsing it into one recommendation.",
      "That's why we pair every assessment with a 1:1 interpretation session. The report gives you the data; the conversation is where it gets tested against your actual constraints — family expectations, financial realities, timelines — and turned into a decision you can act on.",
    ],
  },
  {
    slug: "stream-selection-checklist-for-parents",
    title: "A stream-selection checklist for parents (before the Class 10 boards)",
    excerpt:
      "Five questions to ask before your child locks in Science, Commerce, or Humanities — beyond 'what does everyone else in the family do.'",
    category: "For Parents",
    readTime: "5 min read",
    publishedAt: "2026-03-18",
    body: [
      "Stream selection after Class 10 is one of the first high-stakes decisions a student makes, and it's usually made under time pressure, with incomplete information, and with a lot of well-meaning but unstructured input from relatives and peers.",
      "Before locking in a decision, it's worth checking: Has your child's aptitude actually been measured, or are you going on grades in isolated subjects? Grades reflect effort and teaching quality as much as aptitude — a strong Math grade doesn't automatically mean quantitative reasoning is a genuine strength.",
      "Is the interest genuine or borrowed? It's common for a stream choice to reflect what a sibling did, what's perceived as prestigious, or what keeps the most doors open on paper — rather than what the student is actually drawn to.",
      "What does 'keeping options open' actually cost? Commerce, Science, and Humanities each open and close specific doors; 'keeping everything open' is rarely true in practice and can lead to a default choice nobody is enthusiastic about.",
      "Has the conversation included the student as a decision-maker, or just as the subject of one? A stream decision made mostly by parents and relayed to the student tends to produce less ownership over the outcome — good or bad.",
      "A structured assessment doesn't replace this conversation. It gives it something concrete to be about.",
    ],
  },
];

export function getResources(): Resource[] {
  return resources;
}

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
