import type { Metadata } from "next";
import { AudienceLanding } from "@/components/sections/AudienceLanding";

export const metadata: Metadata = {
  title: "For Students & Parents",
  description:
    "Structured psychometric guidance for stream selection and career clarity — built for the Class 9-12 decision points, with a parent briefing included.",
};

export default function StudentsParentsPage() {
  return (
    <AudienceLanding
      eyebrow="For Students & Parents"
      title="Choose a stream or path with evidence, not guesswork."
      description="Stream and career decisions made under exam pressure, family expectation, or borrowed opinions rarely reflect what a student is actually good at. A structured assessment changes that."
      painPoints={[
        {
          title: "Grades don't equal aptitude",
          description:
            "A strong Math grade reflects effort and teaching quality as much as quantitative reasoning ability. Aptitude has to be measured directly, not inferred from marks.",
        },
        {
          title: "Interest is often borrowed",
          description:
            "It's common for a stream choice to reflect what a sibling did or what's seen as prestigious — rather than what the student is genuinely drawn to.",
        },
        {
          title: "“Keeping options open” has a cost",
          description:
            "Every stream opens some doors and closes others. Treating the decision as reversible often leads to a default choice nobody is enthusiastic about.",
        },
        {
          title: "Parents want to help, not just weigh in",
          description:
            "A structured report gives parents something concrete to evaluate together with their child — instead of relying on intuition and anxiety alone.",
        },
      ]}
      whatToExpect={[
        "A 60–90 minute online psychometric assessment covering aptitude, interest, and personality.",
        "A detailed report, ranked by fit, explained in plain language — not just raw scores.",
        "A 1:1 session with a counseling psychologist to test the results against your family's real constraints.",
        "A parent briefing summary so both the student and parents are working from the same information.",
      ]}
      serviceSlugs={[
        "stream-selection-assessment",
        "career-clarity-assessment",
        "memory-learning-techniques",
        "dmit-assessment",
      ]}
    />
  );
}
