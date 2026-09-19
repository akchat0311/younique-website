import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// Sprint 8.11 — this used to render `ReportMockup`, a hand-drawn SVG
// wireframe of a report: grey placeholder bars, a fake radar chart, invented
// bar heights. Two problems with it. First, it was drawn with literal hexes
// from the old navy-indigo palette (#1F2C5C, #2C3E80, #4E69BE), so after the
// brand moved to azure it was the one element on the page still rendering
// the previous brand. Second and more importantly: the report IS the
// product — a 14-page psychometric document that is genuinely the
// best-designed artifact in the whole system — and the page that exists to
// sell it was showing a cartoon of it instead.
//
// These are real exported pages (public/images/report/, copied from the
// platform's own public/sample/). Fanned rather than flat so the stack reads
// as a document with pages in it, and so the Profile Snapshot page — the one
// with the actual data visualisations — sits in front where it can do the
// persuading.
const PAGES = [
  { src: "/images/report/page-4.png", alt: "", rotate: "-6deg",  x: "-7%",  z: "z-10", scale: "0.94" },
  { src: "/images/report/page-1.png", alt: "", rotate: "3.5deg", x: "6%",   z: "z-20", scale: "0.97" },
  {
    src: "/images/report/page-2.png",
    alt: "A page from a YOUnique psychometric report showing top intelligences, learning style, RIASEC code and ranked career matches",
    rotate: "-1deg",
    x: "0%",
    z: "z-30",
    scale: "1",
  },
] as const;

export function SampleReportTeaser() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-16 text-white md:py-20">
      {/* The brand mark is a magenta/azure split; this is the only place on
          the page that motif appears at scale. Very low opacity — it should
          read as light in the room, not as a gradient someone applied. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 h-[42rem] w-[42rem] -translate-y-1/2 rounded-full opacity-[0.18] blur-3xl"
        style={{ background: "radial-gradient(circle, #38A6DC 0%, transparent 65%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full opacity-[0.16] blur-3xl"
        style={{ background: "radial-gradient(circle, #D22F95 0%, transparent 65%)" }}
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <ScrollReveal className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            {PAGES.map((p) => (
              <div
                key={p.src}
                className={`absolute inset-0 ${p.z} overflow-hidden rounded-lg bg-white shadow-modal ring-1 ring-white/10`}
                style={{ transform: `translateX(${p.x}) rotate(${p.rotate}) scale(${p.scale})` }}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={3572}
                  height={5052}
                  sizes="(min-width: 1024px) 24rem, 85vw"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="order-1 lg:order-2">
          <Badge tone="accent">Evidence, Not Opinion</Badge>
          <h2 className="mt-6 font-display text-[2rem] font-semibold leading-[1.1] tracking-tight sm:text-[2.6rem]">
            This is what &ldquo;measured&rdquo; actually looks like.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Fourteen pages of measured intelligences, learning style, RIASEC
            profile and ranked career matches — each with the reasoning behind
            it. It is the output of the career assessment, and the standard
            every YOUnique service is held to: measured, documented, explained.
          </p>
          {/* Client feedback (Sep 2026): the sample-report download form
              that lived here made the site read as though it sells reports;
              the report is evidence of the standard, not the product. The
              pages stay as proof — the action is now the conversation. */}
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <Button href="/book-consultation" variant="secondary" size="lg">
              Let&apos;s Talk
            </Button>
            <Button href="/methodology" variant="outline-light" size="lg">
              How We Work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
