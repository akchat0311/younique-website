import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProblemFraming } from "@/components/sections/ProblemFraming";
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
      <ProblemFraming />
      <Methodology />
      <ServicesGrid />
      <SampleReportTeaser />
      <FounderCredentials />
      <Testimonials />
      <AudiencePaths />
      <FinalCTA />
    </>
  );
}
