import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-stone-200 bg-canvas-raised py-16 md:py-20">
      <Container>
        <div className="max-w-2xl">
          {eyebrow ? (
            <Badge tone="brand" className="mb-4">
              {eyebrow}
            </Badge>
          ) : null}
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 text-lg leading-relaxed text-stone-600">
              {description}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
