import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollRevealGroup, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { getResources } from "@/lib/data/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Insights on psychometric assessment, stream selection, and career decision-making from the YOUnique team.",
};

export default function ResourcesPage() {
  const resources = getResources();

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Insights on career decisions, backed by evidence."
        description="Short, practical reads on how psychometric assessment works and how to use it — for students, parents, and professionals."
      />

      <section className="py-20 md:py-28">
        <Container>
          <ScrollRevealGroup className="grid gap-6 md:grid-cols-2">
            {resources.map((resource) => (
              <ScrollRevealItem key={resource.slug}>
                <Link href={`/resources/${resource.slug}`} className="block h-full">
                  <Card className="flex h-full flex-col transition-transform duration-150 hover:-translate-y-0.5">
                    <Badge tone="accent">{resource.category}</Badge>
                    <h2 className="mt-4 text-xl font-semibold text-stone-900">
                      {resource.title}
                    </h2>
                    <p className="mt-2 text-base leading-relaxed text-stone-600">
                      {resource.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-3 pt-6 text-sm text-stone-500">
                      <span>{resource.readTime}</span>
                      <span aria-hidden="true">·</span>
                      <span>
                        {new Date(resource.publishedAt).toLocaleDateString("en-IN", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </Card>
                </Link>
              </ScrollRevealItem>
            ))}
          </ScrollRevealGroup>
        </Container>
      </section>
    </>
  );
}
