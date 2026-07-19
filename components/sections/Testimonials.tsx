import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ScrollRevealGroup, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-canvas-raised py-20 md:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Outcomes"
          title="What clarity looks like, in their words."
          className="mx-auto"
        />

        <ScrollRevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <ScrollRevealItem key={`${t.name}-${t.role}`}>
              <Card className="flex h-full flex-col justify-between">
                <p className="text-base leading-relaxed text-stone-700">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-stone-900">{t.name}</p>
                  <p className="text-sm text-stone-500">{t.role}</p>
                </div>
              </Card>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </Container>
    </section>
  );
}
