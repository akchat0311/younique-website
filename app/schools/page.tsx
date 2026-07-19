import type { Metadata } from "next";
import { AudienceLanding } from "@/components/sections/AudienceLanding";

export const metadata: Metadata = {
  title: "For Schools",
  description:
    "Structured, repeatable career guidance programs for schools — psychometric assessment, workshops, and parent-ready reporting, delivered by a qualified counseling psychologist.",
};

export default function SchoolsPage() {
  return (
    <AudienceLanding
      eyebrow="For Schools"
      title="Career guidance that's a program, not a one-off talk."
      description="A single assembly-hall talk on 'career options' doesn't give students or parents anything to act on. YOUnique builds structured, repeatable guidance programs your school can run every year."
      painPoints={[
        {
          title: "One talk doesn't produce a decision",
          description:
            "Generic career-day sessions raise awareness but leave students exactly where they started — with no individual data to act on.",
        },
        {
          title: "Generic aptitude tests lack follow-through",
          description:
            "A test without 1:1 interpretation produces a printout, not guidance. Students and parents are left to interpret raw scores themselves.",
        },
        {
          title: "Parents expect a structured answer",
          description:
            "Schools are increasingly expected to support stream and career decisions with more than a suggestion — parents want evidence-backed input.",
        },
        {
          title: "No repeatable, scalable format",
          description:
            "Without a structured program, career guidance quality varies year to year and depends on whichever staff member takes it on.",
        },
      ]}
      whatToExpect={[
        "A needs assessment call to understand your student population and existing career-guidance efforts.",
        "A custom workshop or assessment program design — half-day or full-day, on-site or virtual.",
        "Individual psychometric reports for participating students, with parent briefing summaries.",
        "A post-program summary report for school stakeholders and academic coordinators.",
      ]}
      serviceSlugs={[
        "stream-selection-assessment",
        "dmit-assessment",
        "memory-learning-techniques",
        "corporate-training-workshops",
      ]}
      image="/images/school-workshop.jpg"
      imageAlt="Suyash Thakur leading a career guidance session for school students"
    />
  );
}
