import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getServiceBySlug, getServices } from "@/lib/data/services";
import { CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return getServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="border-b border-stone-200 bg-canvas-raised py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <Badge tone="brand">{service.category}</Badge>
              {service.popular ? <Badge tone="gold">Most Popular</Badge> : null}
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-3 text-base font-medium text-stone-500">{service.audience}</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">
              {service.description}
            </p>
          </div>

          <Card className="lg:sticky lg:top-24">
            <dl className="space-y-4 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-stone-500">Duration</dt>
                <dd className="text-right font-medium text-stone-800">{service.duration}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-stone-500">Format</dt>
                <dd className="text-right font-medium text-stone-800">{service.format}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-stone-500">Ideal for</dt>
                <dd className="text-right font-medium text-stone-800">
                  {service.idealFor.join(", ")}
                </dd>
              </div>
            </dl>
            <Button href="/book-consultation" className="mt-6 w-full">
              Let&apos;s Talk
            </Button>
            <p className="mt-3 text-center text-xs text-stone-500">
              Free, no obligation. Pricing shared on the call — no fixed public rate.
            </p>
          </Card>
        </Container>
      </section>

      {service.image ? (
        <Container className="mt-12">
          <ScrollReveal>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-stone-200 shadow-card">
              <Image
                src={service.image}
                alt={`${service.name} in session`}
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </Container>
      ) : null}

      <section className="py-20 md:py-28">
        <Container className="max-w-2xl">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold text-stone-900">
              What you&apos;ll receive
            </h2>
            <ul className="mt-6 space-y-4">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success-600" />
                  <span className="text-base leading-relaxed text-stone-700">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
