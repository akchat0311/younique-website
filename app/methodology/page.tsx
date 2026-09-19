import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ScrollRevealGroup, ScrollRevealItem, ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "How YOUnique combines modern psychological science with practical technique and Indian tradition — across assessment, therapy, training, and prenatal development.",
};

const assessmentSteps = [
  {
    number: "01",
    title: "Assess",
    description:
      "A structured, timed instrument — a psychometric test or a DMIT fingerprint analysis — scored against normed data, not impression.",
  },
  {
    number: "02",
    title: "Interpret",
    description:
      "A counseling psychologist reviews your results with you directly — not a generic auto-generated report read alone. This is where data meets your actual constraints: family expectations, financial realities, and timelines.",
  },
  {
    number: "03",
    title: "Guide",
    description:
      "You leave with a ranked set of directions, explicit reasoning for each, and a concrete next step, not just raw scores.",
  },
];

const techniqueSteps = [
  {
    number: "01",
    title: "Learn",
    description:
      "Whether it's NLP, EFT, or Memory & Learning Techniques, you're taught the underlying technique directly by a certified practitioner — not handed a worksheet or a recorded video.",
  },
  {
    number: "02",
    title: "Practice",
    description:
      "Every session includes guided, hands-on practice — a tapping sequence, a reframing exercise, a reading drill — so the technique is something you can actually repeat on your own.",
  },
  {
    number: "03",
    title: "Apply",
    description:
      "You leave with a personalized plan for using the technique in the specific situation that brought you in, plus a follow-up check-in.",
  },
];

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Methodology"
        title="Know yourself. Then grow."
        description="Every YOUnique service — a psychometric assessment, a DMIT scan, an EFT session, or a Garbh Sanskar program — is built on the same standard: modern psychological science, delivered personally by a qualified practitioner, grounded in ethics."
        image="/images/photos/methodology-brain.jpg"
        imageAlt="A rendered human brain on a blue and purple background"
      />

      {/* Client feedback (Sep 2026: "less text, more images") — this page was
          the site's worst text wall: typography end to end. The two prose
          sections now each carry a visual half: the philosophy pairs with an
          illustration, and "Why It's Different" pairs with an actual report
          page — the "data" the copy keeps referring to, finally shown. */}
      <section className="py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Philosophy"
              title="Practical modern psychology, combined with Indian tradition."
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-stone-600">
              <p>
                YOUnique was built around one idea:{" "}
                <span className="font-medium text-stone-800">
                  more important than knowing the world is knowing yourself,
                  and progressing from there.
                </span>{" "}
                That shapes how every service is designed — not as a generic
                program applied to everyone the same way, but as a structured
                process for understanding a specific person, family, or
                child, and then guiding them forward.
              </p>
              <p>
                In practice, that means combining evidence-based technique —
                psychometrics, NLP, EFT, structured memory training — with
                practices rooted in Indian tradition, like Garbh Sanskar. The
                goal in both cases is the same: connecting with lives, not
                just people, in service of holistic development grounded in
                ethics.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-stone-200 shadow-card">
              <Image
                src="/images/photos/counselling-session.jpg"
                alt="Two people in a calm one-to-one conversation across a table"
                fill
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-canvas-raised py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="The Process"
            title="Two structures. One standard."
            description="Assessment-based services and technique-based services run through different steps — but neither is ever delivered as a self-serve report or a generic worksheet."
          />

          <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-10">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-700">
                Assessment-based
              </h3>
              <p className="mt-1 text-sm text-stone-500">
                Career Counselling & Aptitude Test, DMIT
              </p>
              <ScrollRevealGroup className="mt-8 space-y-8">
                {assessmentSteps.map((step) => (
                  <ScrollRevealItem key={step.number} className="flex gap-4">
                    <span className="font-display text-3xl font-semibold text-brand-500">
                      {step.number}
                    </span>
                    <div>
                      <h4 className="text-lg font-semibold text-stone-900">{step.title}</h4>
                      <p className="mt-1 text-base leading-relaxed text-stone-600">
                        {step.description}
                      </p>
                    </div>
                  </ScrollRevealItem>
                ))}
              </ScrollRevealGroup>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-700">
                Technique & training-based
              </h3>
              <p className="mt-1 text-sm text-stone-500">
                NLP, EFT, Memory &amp; Learning Techniques, Psychological Counselling, Garbh Sanskar
              </p>
              <ScrollRevealGroup className="mt-8 space-y-8">
                {techniqueSteps.map((step) => (
                  <ScrollRevealItem key={step.number} className="flex gap-4">
                    <span className="font-display text-3xl font-semibold text-accent-700">
                      {step.number}
                    </span>
                    <div>
                      <h4 className="text-lg font-semibold text-stone-900">{step.title}</h4>
                      <p className="mt-1 text-base leading-relaxed text-stone-600">
                        {step.description}
                      </p>
                    </div>
                  </ScrollRevealItem>
                ))}
              </ScrollRevealGroup>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal className="mx-auto w-full max-w-xs lg:order-1">
            <div className="-rotate-2 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-modal">
              <Image
                src="/images/report/page-2.png"
                alt="A page from a YOUnique psychometric report showing top intelligences, learning style, RIASEC code and ranked career matches"
                width={3572}
                height={5052}
                sizes="(min-width: 1024px) 20rem, 80vw"
                className="h-auto w-full"
              />
            </div>
          </ScrollReveal>
          <div className="lg:order-2">
            <SectionHeading
              eyebrow="Why It's Different"
              title="Data without a human isn't guidance. A human without structure is just an opinion."
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-stone-600">
              <p>
                A psychometric score on its own can&apos;t account for a
                family&apos;s financial constraints, a student&apos;s anxiety
                about disappointing a parent, or a professional&apos;s real
                appetite for risk. That&apos;s why every service at YOUnique is
                delivered in person by a qualified counseling psychologist —
                the structure narrows the field or teaches the technique; the
                conversation makes it actionable.
              </p>
              <p>
                Read more about the practitioner behind every session on the{" "}
                <Link href="/about" className="font-medium text-brand-700 underline underline-offset-2">
                  About page
                </Link>
                , or see every service in the{" "}
                <Link href="/services" className="font-medium text-brand-700 underline underline-offset-2">
                  full catalog
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
