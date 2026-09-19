import Link from "next/link";
import Image from "next/image";
import { Compass, HeartHandshake, Sprout, Building2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollRevealGroup, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { getServicesByCategory } from "@/lib/data/services";
import type { ServiceCategory } from "@/types/service";

// Sprint 8.12 — `image` is the drop-in seam for category imagery (the rule:
// ALL FOUR filled or none — partial fill looks broken, not designed). Client
// feedback (Sep 2026) asked for real photography over illustration:
// Corporate uses the founder's actual session photo; the other three are
// Unsplash-licensed photographs (see public/images/photos/SOURCES.md). The
// drawn alternates remain in public/images/illustrations/ if the direction
// flips back. alt is empty for the three stock photos (decoration — the
// card heading already names the category) but set for the corporate card,
// which shows a real, specific event.
const categoryMeta: {
  category: ServiceCategory;
  icon: typeof Compass;
  description: string;
  image: { src: string; alt: string } | null;
}[] = [
  {
    category: "Career & Academic Guidance",
    icon: Compass,
    description: "Stream selection, career direction, and study performance.",
    image: { src: "/images/photos/career-guidance.jpg", alt: "" },
  },
  {
    category: "Therapeutic & Mind Wellness",
    icon: HeartHandshake,
    description: "NLP, EFT, and psychological counselling for everyday stress and growth.",
    image: { src: "/images/photos/mind-wellness.jpg", alt: "" },
  },
  {
    category: "Child & Family Development",
    icon: Sprout,
    description: "Garbh Sanskar prenatal training and DMIT for children.",
    image: { src: "/images/photos/child-family.jpg", alt: "" },
  },
  {
    category: "Corporate & Institutional",
    icon: Building2,
    description: "Workshop-format training for organizations and schools.",
    image: {
      src: "/images/corporate-training-workshop.jpg",
      alt: "Suyash Thakur addressing a large training session at an institutional hall",
    },
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

        <ScrollRevealGroup className="mt-12 grid items-start gap-6 md:grid-cols-2">
          {categoryMeta.map(({ category, icon: Icon, description, image }) => {
            const services = getServicesByCategory(category);
            return (
              <ScrollRevealItem key={category}>
                {/* Sprint 8.12 — the hierarchy here was inverted. Each card
                    ended in a full-width "View all services" button, and all
                    four pointed at the same /services page — five identical
                    destinations counting the catalog link below the grid.
                    Meanwhile the genuinely useful links, one per service,
                    were 14px grey text behind a decorative dot. So the
                    redundant generic action looked like the action, and the
                    specific ones looked like garnish.

                    The per-card button is gone and the service list is now
                    the card's content: full-width rows, hairline separated,
                    with an arrow that slides on hover so each reads as
                    somewhere to go. */}
                <Card className={image ? "flex flex-col overflow-hidden p-0" : "flex flex-col"}>
                  {image ? (
                    <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden bg-stone-100">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 768px) 40vw, 92vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  <div className={image ? "flex items-start gap-3 px-6" : "flex items-start gap-3"}>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon size={22} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold leading-snug text-stone-900">{category}</h3>
                      <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-stone-400">
                        {services.length} {services.length === 1 ? "service" : "services"}
                      </p>
                    </div>
                  </div>

                  <p className={image ? "mt-4 px-6 text-base leading-relaxed text-stone-600" : "mt-4 text-base leading-relaxed text-stone-600"}>{description}</p>

                  <ul className={image ? "mb-6 mt-5 divide-y divide-stone-100 border-t border-stone-100 px-4" : "-mx-2 mt-5 divide-y divide-stone-100 border-t border-stone-100"}>
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="group/row flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm text-stone-700 transition-colors duration-150 hover:bg-brand-50/70 hover:text-brand-800"
                        >
                          <span className="min-w-0 flex-1">{service.name}</span>
                          {service.popular ? (
                            <span className="shrink-0 rounded-full border border-gold-200 bg-gold-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold-700">
                              Popular
                            </span>
                          ) : null}
                          <span
                            aria-hidden
                            className="shrink-0 text-stone-300 transition-all duration-150 group-hover/row:translate-x-0.5 group-hover/row:text-brand-600"
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollRevealItem>
            );
          })}
        </ScrollRevealGroup>

        <div className="mt-10 flex justify-center">
          <Button href="/services" variant="secondary">
            View the full catalog →
          </Button>
        </div>
      </Container>
    </section>
  );
}
