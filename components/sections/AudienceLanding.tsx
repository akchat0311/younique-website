import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollRevealGroup, ScrollRevealItem, ScrollReveal } from "@/components/ui/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getServices } from "@/lib/data/services";
import { CheckCircle2 } from "lucide-react";

export interface AudienceLandingProps {
  eyebrow: string;
  title: string;
  description: string;
  painPoints: { title: string; description: string }[];
  whatToExpect: string[];
  serviceSlugs: string[];
  image?: string;
  imageAlt?: string;
}

export function AudienceLanding({
  eyebrow,
  title,
  description,
  painPoints,
  whatToExpect,
  serviceSlugs,
  image,
  imageAlt,
}: AudienceLandingProps) {
  const relevantServices = getServices().filter((s) => serviceSlugs.includes(s.slug));

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Where This Usually Goes Wrong"
            title="The uncertainty is real — here's where it comes from."
          />
          <ScrollRevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
            {painPoints.map((point) => (
              <ScrollRevealItem key={point.title}>
                <Card className="h-full">
                  <h3 className="text-lg font-semibold text-stone-900">{point.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-stone-600">
                    {point.description}
                  </p>
                </Card>
              </ScrollRevealItem>
            ))}
          </ScrollRevealGroup>
        </Container>
      </section>

      {image ? (
        <Container className="py-4">
          <ScrollReveal>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-stone-200 shadow-card">
              <Image src={image} alt={imageAlt ?? ""} fill className="object-cover" />
            </div>
          </ScrollReveal>
        </Container>
      ) : null}

      <section className="bg-canvas-raised py-20 md:py-28">
        <Container className="max-w-2xl">
          <SectionHeading eyebrow="What To Expect" title="How the process works for you" />
          <ScrollReveal className="mt-8">
            <ul className="space-y-4">
              {whatToExpect.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success-600" />
                  <span className="text-base leading-relaxed text-stone-700">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Recommended" title="Services built for this path" />
          <ScrollRevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
            {relevantServices.map((service) => (
              <ScrollRevealItem key={service.slug}>
                <Card highlighted={service.popular} className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <Badge tone="neutral">{service.audience}</Badge>
                    {service.popular ? <Badge tone="gold">Most Popular</Badge> : null}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-stone-900">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-stone-600">
                    {service.tagline}
                  </p>
                  <div className="mt-auto pt-6">
                    <Button href={`/services/${service.slug}`} variant="secondary" className="w-full">
                      View details
                    </Button>
                  </div>
                </Card>
              </ScrollRevealItem>
            ))}
          </ScrollRevealGroup>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
