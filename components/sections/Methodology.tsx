import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ScrollRevealGroup, ScrollRevealItem } from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Assess",
    description:
      "A structured psychometric assessment measures aptitude, interest, and personality against normed data — not a single conversation's worth of impression.",
  },
  {
    number: "02",
    title: "Interpret",
    description:
      "A counseling psychologist reviews the data with you in a 1:1 session, testing it against your real constraints — expectations, timelines, and finances.",
  },
  {
    number: "03",
    title: "Guide",
    description:
      "You leave with a ranked set of directions and a concrete next step — not just a report, and not just an opinion.",
  },
];

export function Methodology() {
  return (
    <section className="bg-canvas-raised py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Methodology"
            title="Data first. Then a human interprets it."
            description="Every recommendation is grounded in measured data and reviewed by a qualified counseling psychologist — never one without the other."
          />
          <Button href="/methodology" variant="ghost" className="shrink-0">
            Read the full methodology →
          </Button>
        </div>

        <ScrollRevealGroup className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <ScrollRevealItem key={step.number} className="relative">
              <span className="font-heading text-5xl font-bold text-brand-100">
                {step.number}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-stone-600">
                {step.description}
              </p>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </Container>
    </section>
  );
}
