import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollRevealGroup, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";

const painPoints = [
  {
    audience: "Students",
    problem:
      "Choosing a stream or degree based on grades in a few subjects, family expectation, or what's “perceived as safe” — without knowing what you're actually good at.",
  },
  {
    audience: "Parents",
    problem:
      "Wanting to support the decision but having no structured way to evaluate it beyond intuition, relatives' opinions, and anxiety about getting it wrong.",
  },
  {
    audience: "Professionals",
    problem:
      "Feeling plateaued or misaligned mid-career, but unable to separate a genuine pivot from a temporary frustration — with no data to test the decision against.",
  },
  {
    audience: "Schools",
    problem:
      "Wanting to offer real career guidance beyond a single talk or a generic aptitude test, but lacking a structured, repeatable program for students and parents.",
  },
];

export function ProblemFraming() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="The Problem"
          title="Most career decisions are made without evidence."
          description="Advice, intuition, and family precedent all have a place — but on their own, they leave the decision resting on guesswork. Here's where that shows up."
        />

        <ScrollRevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point) => (
            <ScrollRevealItem key={point.audience}>
              <Card className="h-full">
                <p className="text-sm font-semibold uppercase tracking-wide text-accent-700">
                  {point.audience}
                </p>
                <p className="mt-3 text-base leading-relaxed text-stone-700">
                  {point.problem}
                </p>
              </Card>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </Container>
    </section>
  );
}
