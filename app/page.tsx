import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Methodology } from "@/components/sections/Methodology";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { SampleReportTeaser } from "@/components/sections/SampleReportTeaser";
import { FounderCredentials } from "@/components/sections/FounderCredentials";
import { Testimonials } from "@/components/sections/Testimonials";
import { AudiencePaths } from "@/components/sections/AudiencePaths";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      {/* Sprint 8.12 — Methodology moved up from 4 to 3 and ProblemFraming
          removed. The hero asks "understand yourself, make better decisions";
          the reader's next question is HOW, which is exactly what Methodology
          answers. ProblemFraming used to sit here and answered "what's wrong
          with you?" instead — persuasion aimed at an unaware visitor, when
          anyone arriving on a career-counselling site has already
          self-diagnosed. Its four cards also re-segmented the audience that
          AudiencePaths segments below, against a different taxonomy, and
          weren't clickable, so the non-actionable version came first. Its one
          useful beat now leads Methodology as a single line. */}
      <Methodology />
      {/* Follows Methodology deliberately: it is the evidence for steps 01
          and 02, not a standalone product pitch. Promoted from 6 to 4 so the
          form sits above two full sections it used to sit below. */}
      <SampleReportTeaser />
      <ServicesGrid />
      <FounderCredentials />
      <Testimonials />
      <AudiencePaths />
      <FinalCTA />
    </>
  );
}
