import Link from "next/link";
import { GraduationCap, Building2, Briefcase, Sprout } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ScrollRevealGroup, ScrollRevealItem } from "@/components/ui/ScrollReveal";

const paths = [
  {
    icon: GraduationCap,
    title: "Students & Parents",
    description: "Stream selection, career clarity, and undergraduate direction.",
    href: "/students-parents",
  },
  {
    icon: Sprout,
    title: "Families & Children",
    description: "Garbh Sanskar, DMIT, and memory training for growing families.",
    href: "/families-children",
  },
  {
    icon: Building2,
    title: "Schools",
    description: "Structured guidance programs and workshops for your institution.",
    href: "/schools",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    description: "Evaluate a pivot, plateau, or return-to-work decision with data.",
    href: "/professionals",
  },
];

export function AudiencePaths() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Find Your Path"
          title="Built for four very different journeys."
          description="The underlying standard stays the same — the guidance is tailored to who's actually making the decision."
        />

        <ScrollRevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <ScrollRevealItem key={path.href}>
                <Link href={path.href} className="block h-full">
                  <Card className="group h-full transition-transform duration-150 hover:-translate-y-0.5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-stone-900">
                      {path.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">
                      {path.description}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-700 group-hover:underline">
                      Explore →
                    </span>
                  </Card>
                </Link>
              </ScrollRevealItem>
            );
          })}
        </ScrollRevealGroup>
      </Container>
    </section>
  );
}
