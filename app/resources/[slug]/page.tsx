import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getResourceBySlug, getResources } from "@/lib/data/resources";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return getResources().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};
  return {
    title: resource.title,
    description: resource.excerpt,
  };
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  return (
    <>
      <article className="py-16 md:py-24">
        <Container className="max-w-2xl">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 hover:text-brand-700"
          >
            <ArrowLeft size={16} /> Back to Resources
          </Link>

          <Badge tone="accent" className="mt-6">
            {resource.category}
          </Badge>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            {resource.title}
          </h1>
          <div className="mt-3 flex items-center gap-3 text-sm text-stone-500">
            <span>{resource.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>
              {new Date(resource.publishedAt).toLocaleDateString("en-IN", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <div className="mt-10 space-y-6">
            {resource.body.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-stone-700">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </article>

      <FinalCTA />
    </>
  );
}
