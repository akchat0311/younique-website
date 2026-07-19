import type { Metadata } from "next";
import { AudienceLanding } from "@/components/sections/AudienceLanding";

export const metadata: Metadata = {
  title: "For Working Professionals",
  description:
    "Evaluate a career pivot, plateau, or return-to-work decision with structured psychometric data — not just a gut feeling or a single conversation.",
};

export default function ProfessionalsPage() {
  return (
    <AudienceLanding
      eyebrow="For Working Professionals"
      title="Test a pivot before you commit to it."
      description="Feeling plateaued or misaligned mid-career is common — knowing whether it's a genuine signal to change direction or a temporary frustration is harder. A structured assessment gives you data to test the decision against."
      painPoints={[
        {
          title: "Frustration and misalignment feel identical",
          description:
            "A bad quarter and a genuinely wrong-fit role produce the same feeling in the moment. Without data, it's hard to tell them apart.",
        },
        {
          title: "Transferable strengths are hard to see from inside",
          description:
            "It's difficult to objectively assess what skills genuinely transfer to a new direction versus what feels comfortable because it's familiar.",
        },
        {
          title: "Career breaks raise new questions",
          description:
            "Returning to work after a break often means re-evaluating fit, not just re-entering the same track — a decision most people make with no structured input.",
        },
        {
          title: "A pivot is expensive to get wrong twice",
          description:
            "Mid-career transitions carry real financial and time cost. Testing the decision against data reduces the odds of repeating the same misalignment.",
        },
      ]}
      whatToExpect={[
        "A 60-minute psychometric assessment covering personality, values, and transferable strengths.",
        "A structured transition-readiness evaluation, not just a generic personality report.",
        "A 1:1 coaching session with a career counselor to translate results into a realistic plan.",
        "A written action plan document you can revisit as you make the decision.",
      ]}
      serviceSlugs={[
        "career-transition-assessment",
        "nlp-training",
        "psychological-counselling",
        "eft-emotional-freedom-technique",
      ]}
    />
  );
}
