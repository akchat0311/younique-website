import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  founder,
  credentials,
  corporateClients,
  registrations,
} from "@/lib/data/credentials";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the practitioner behind YOUnique — 15+ years in counseling psychology, an integrative methodology spanning NLP, EFT, and memory training, and a track record of institutional training.",
};

export default function AboutPage() {
  const coreCredentials = credentials.filter((c) => c.category === "Core Practice");
  const integrativeCredentials = credentials.filter(
    (c) => c.category === "Integrative Methodology"
  );

  return (
    <>
      {/* The hero photo must be the founder himself — on a page titled with
          his name, any stock person reads as being him (client caught
          exactly this), so it uses his real training-session photograph. */}
      <PageHero
        eyebrow="About YOUnique"
        title={founder.name}
        description={founder.titles.join(" · ")}
        image="/images/corporate-training-workshop.jpg"
        imageAlt="Suyash Thakur addressing a packed training session at an institutional hall"
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 md:grid-cols-[280px_minmax(0,1fr)] md:items-start md:gap-16">
          <ScrollReveal className="mx-auto md:mx-0">
            <div className="relative mx-auto w-64 md:w-full">
              <Image
                src="/images/Suyash_Thakur.avif"
                alt="Suyash Thakur, Founder of YOUnique"
                width={320}
                height={480}
                className="w-full rounded-2xl"
                priority
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg leading-relaxed text-stone-700">{founder.bio}</p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-canvas-raised py-20 md:py-28">
        <Container className="max-w-3xl">
          <ScrollReveal>
            <SectionHeading eyebrow="Our Philosophy" title="Know yourself. Then grow." />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-stone-600">
              <p>
                YOUnique&apos;s founding motto:{" "}
                <span className="font-medium italic text-stone-800">
                  &ldquo;More important than knowing the world is knowing
                  yourself, and progressing.&rdquo;
                </span>
              </p>
              <p>
                That philosophy shapes an approach built on{" "}
                <span className="font-medium text-stone-800">
                  तकनीकी प्रशिक्षण
                </span>{" "}
                — practical, technical training that combines modern
                psychology with Indian tradition. The aim is to connect{" "}
                <span className="font-medium text-stone-800">
                  लोगो से नहीं उनकी ज़िन्दगीयो से
                </span>{" "}
                — not just with people, but with their lives — in service of{" "}
                <span className="font-medium text-stone-800">
                  सर्वांगीण विकास
                </span>{" "}
                (holistic development) grounded in ethics.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Credentials"
            title="Core practice"
            description="The foundational qualifications behind every assessment and consultation."
          />
          <ScrollReveal className="mt-8 flex flex-wrap gap-2.5">
            {coreCredentials.map((c) => (
              <span
                key={c.name}
                className="rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-800"
              >
                {c.name}
              </span>
            ))}
          </ScrollReveal>

          <div className="mt-16">
            <SectionHeading
              eyebrow="Integrative Methodology"
              title="Also available as standalone services"
              description="These certifications aren't just background training — NLP, EFT, and Memory & Learning Techniques are each delivered as their own bookable service in the full catalog."
            />
            <ScrollReveal className="mt-8 flex flex-wrap gap-2.5">
              {integrativeCredentials.map((c) => (
                <span
                  key={c.name}
                  className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 shadow-xs"
                >
                  {c.name}
                </span>
              ))}
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Institutional Trust"
            title="Corporate & institutional training delivered for"
          />
          <ScrollReveal className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {corporateClients.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center rounded-xl border border-stone-200 bg-white px-4 py-6 text-center text-sm font-medium text-stone-700 shadow-xs"
              >
                {client}
              </div>
            ))}
          </ScrollReveal>

          <div className="mt-16 rounded-2xl border border-stone-200 bg-canvas-raised p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
              Registrations
            </h3>
            <dl className="mt-4 space-y-2 text-sm text-stone-600">
              <div className="flex flex-wrap justify-between gap-2">
                <dt>GEM Registration</dt>
                <dd className="font-medium text-stone-800">{registrations.gem}</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2">
                <dt>MSME / UDYAM</dt>
                <dd className="font-medium text-stone-800">{registrations.msmeUdyam}</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2">
                <dt>Trade License</dt>
                <dd className="font-medium text-stone-800">{registrations.tradeLicense}</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
