import Link from "next/link";
import { Compass, HeartHandshake, Sprout, Building2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollRevealGroup, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { getServicesByCategory } from "@/lib/data/services";
import type { ServiceCategory } from "@/types/service";

const categoryMeta: { category: ServiceCategory; icon: typeof Compass; description: string }[] = [
  {
    category: "Career & Academic Guidance",
    icon: Compass,
    description: "Stream selection, career direction, and study performance.",
  },
  {
    category: "Therapeutic & Mind Wellness",
    icon: HeartHandshake,
    description: "NLP, EFT, and psychological counselling for everyday stress and growth.",
  },
  {
    category: "Child & Family Development",
    icon: Sprout,
    description: "Garbh Sanskar prenatal training and DMIT for children.",
  },
  {
    category: "Corporate & Institutional",
    icon: Building2,
    description: "Workshop-format training for organizations and schools.",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Productized, not one-size-fits-all."
          description="An Innovative Education & Psychology Academy — every service below is built around a specific need, not a generic program applied to everyone the same way."
        />

        <ScrollRevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
          {categoryMeta.map(({ category, icon: Icon, description }) => {
            const services = getServicesByCategory(category);
            return (
              <ScrollRevealItem key={category}>
                <Card className="flex h-full flex-col">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-stone-900">{category}</h3>
                  <p className="mt-2 text-base leading-relaxed text-stone-600">{description}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="flex items-center gap-2 text-stone-600 transition-colors duration-150 hover:text-brand-700"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <Button href="/services" variant="secondary" className="w-full">
                      View all services
                    </Button>
                  </div>
                </Card>
              </ScrollRevealItem>
            );
          })}
        </ScrollRevealGroup>

        <div className="mt-10 text-center">
          <Button href="/services" variant="ghost">
            View the full catalog →
          </Button>
        </div>
      </Container>
    </section>
  );
}
