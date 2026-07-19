import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { founder, credentials, corporateClients } from "@/lib/data/credentials";

export function FounderCredentials() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
        <ScrollReveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <Image
              src="/images/Suyash_Thakur.avif"
              alt="Suyash Thakur, Founder of YOUnique"
              width={320}
              height={480}
              className="w-36 shrink-0 rounded-2xl sm:w-44"
              priority
            />
            <div>
              <Badge tone="brand">The Person Behind the Data</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
                {founder.name}
              </h2>
              <p className="mt-2 text-base font-medium text-brand-700">
                {founder.titles.join(" · ")}
              </p>
            </div>
          </div>

          <p className="mt-6 text-base leading-relaxed text-stone-600">
            {founder.bio}
          </p>

          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-stone-500">
              Corporate & institutional training delivered for
            </p>
            <p className="mt-2 text-base font-medium text-stone-700">
              {corporateClients.join(" · ")}
            </p>
          </div>

          <Button href="/about" variant="ghost" className="mt-6">
            Full credentials & story →
          </Button>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-sm leading-relaxed text-stone-600">
            Each certification below isn&apos;t just a credential on a wall —
            it&apos;s a{" "}
            <strong className="font-semibold text-stone-800">
              live, bookable service
            </strong>{" "}
            in the catalog. NLP, EFT, and memory training are delivered
            directly by Suyash, using the same standard as every assessment:
            structured, personal, and grounded in ethics.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {credentials.map((c) => (
              <span
                key={c.name}
                className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 shadow-xs"
              >
                {c.name}
              </span>
            ))}
          </div>
          <Button href="/services" variant="ghost" className="mt-6">
            See these as bookable services →
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
