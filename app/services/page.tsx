import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollRevealGroup, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getServicesByCategory, serviceCategories } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "The full YOUnique catalog — career counselling and aptitude testing, DMIT, memory and learning techniques, NLP, EFT, psychological counselling, Garbh Sanskar, and corporate training — each delivered by a qualified counseling psychologist.",
};

const categoryDescriptions: Record<string, string> = {
  "Career & Academic Guidance":
    "Structured assessment for stream selection, career direction, and study performance.",
  "Therapeutic & Mind Wellness":
    "1:1 techniques for everyday stress, communication, and emotional wellbeing — not just clinical disorders.",
  "Child & Family Development":
    "Prenatal training and inborn-potential analysis for children and expecting families.",
  "Corporate & Institutional":
    "Workshop-format training for organizations and schools.",
};

// Client feedback (Sep 2026: real imagery over text) — the same four
// category photographs the homepage ServicesGrid uses, so the catalog and
// the homepage read as one system. Corporate is the founder's own session
// photo; the rest are Unsplash-licensed (public/images/photos/SOURCES.md).
const categoryImages: Record<string, { src: string; alt: string }> = {
  "Career & Academic Guidance": { src: "/images/photos/career-guidance.jpg", alt: "" },
  "Therapeutic & Mind Wellness": { src: "/images/photos/mind-wellness.jpg", alt: "" },
  "Child & Family Development": { src: "/images/photos/child-family.jpg", alt: "" },
  "Corporate & Institutional": {
    src: "/images/corporate-training-workshop.jpg",
    alt: "Suyash Thakur addressing a large training session at an institutional hall",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="An Innovative Education & Psychology Academy."
        description="Every service below — from career counselling to Garbh Sanskar — is delivered personally, grounded in psychological science, and productized so you know exactly what you're booking."
        image="/images/photos/services-students.jpg"
        imageAlt="A joyful group of school students in uniform waving at the camera"
      />

      {serviceCategories.map((category) => {
        const services = getServicesByCategory(category);
        if (services.length === 0) return null;

        const image = categoryImages[category];

        return (
          <section key={category} className="border-b border-stone-200 py-16 md:py-20">
            <Container>
              <div className="grid items-center gap-8 md:grid-cols-[1fr_20rem] lg:grid-cols-[1fr_24rem]">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-semibold text-stone-900 sm:text-3xl">
                    {category}
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-stone-600">
                    {categoryDescriptions[category]}
                  </p>
                </div>
                {image ? (
                  <div className="relative hidden aspect-video overflow-hidden rounded-xl border border-stone-200 shadow-card md:block">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="24rem"
                      className="object-cover"
                    />
                  </div>
                ) : null}
              </div>

              <ScrollRevealGroup className="mt-10 grid gap-6 md:grid-cols-2">
                {services.map((service) => (
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
                      <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <dt className="text-stone-500">Duration</dt>
                          <dd className="font-medium text-stone-800">{service.duration}</dd>
                        </div>
                        <div>
                          <dt className="text-stone-500">Format</dt>
                          <dd className="font-medium text-stone-800">{service.format}</dd>
                        </div>
                      </dl>
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
        );
      })}

      <FinalCTA />
    </>
  );
}
