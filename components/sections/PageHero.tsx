import Image from "next/image";
import { Container } from "@/components/layout/Container";

// Client feedback (Sep 2026, two rounds): ~10 routes open with this
// component. As plain badge + h1 + paragraph on a grey ground it made every
// page start as a text block, and a first pass of faint glows on the light
// ground was still "very plain". So the hero now claims the site's
// strongest established look — the brand-950 band with azure/magenta
// radial glows that SampleReportTeaser introduced — giving every interior
// page a bold, unmistakably designed opening. The concentric-arc mark
// echoes the fingerprint/identity theme of the logo ("be what you are").
// Pages with a hero-worthy photograph pass `image`/`imageAlt` and the arcs
// give way to a two-column layout. All ornament is aria-hidden; screen
// readers see exactly the badge/h1/p they always did.
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-16 md:py-24">
      {/* the brand mark's magenta/azure split as light in the room — same
          motif and hexes as SampleReportTeaser, so the interior pages and
          the homepage read as one system */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-8%] h-136 w-136 rounded-full opacity-[0.28] blur-3xl"
        style={{ background: "radial-gradient(circle, #38A6DC 0%, transparent 65%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 left-[-6%] h-112 w-112 rounded-full opacity-[0.2] blur-3xl"
        style={{ background: "radial-gradient(circle, #D22F95 0%, transparent 65%)" }}
      />

      {/* concentric fingerprint-like arcs, seeded from the page title so
          every page carries its own distinct "print" — the visual pun the
          mark is built on ("be what you are"). Deterministic (a plain hash,
          no randomness), so server render, client render, and every visit
          agree. Hidden when a photo takes the right-hand side, and on small
          screens where the arcs would sit behind the text. */}
      {!image ? (() => {
        let seed = 0;
        for (let i = 0; i < title.length; i++) seed = (seed * 31 + title.charCodeAt(i)) % 100000;
        const rings = [60, 92, 124, 156, 188].map((r, i) => {
          const c = 2 * Math.PI * r;
          // gap fraction 20–38% and start angle both walk with the seed, so
          // ring breaks land differently on every page
          const gap = c * (0.2 + (((seed >> (i * 3)) % 19) / 100));
          const offset = ((seed * (i + 3)) % 360) * (c / 360);
          return { r, dash: `${Math.round(c - gap)} ${Math.round(gap)}`, offset: Math.round(offset) };
        });
        return (
          <svg
            aria-hidden
            className="pointer-events-none absolute -right-16 top-1/2 hidden -translate-y-1/2 text-accent-300/40 md:block lg:right-8"
            width="380"
            height="380"
            viewBox="0 0 380 380"
            fill="none"
          >
            <g transform={`rotate(${seed % 360} 190 190)`}>
              {rings.map(({ r, dash, offset }) => (
                <circle
                  key={r}
                  cx="190"
                  cy="190"
                  r={r}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray={dash}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                />
              ))}
            </g>
            <circle cx="190" cy="190" r="14" fill="#38A6DC" fillOpacity="0.6" />
            <circle cx="190" cy="190" r="6" fill="#D22F95" fillOpacity="0.8" />
          </svg>
        );
      })() : null}

      <Container className="relative">
        <div className={image ? "grid items-center gap-10 md:grid-cols-[1fr_minmax(0,22rem)] lg:grid-cols-[1fr_minmax(0,26rem)]" : undefined}>
          <div className="max-w-2xl">
            {eyebrow ? (
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-medium tracking-wide text-accent-200">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent-300" />
                {eyebrow}
              </span>
            ) : null}
            <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                {description}
              </p>
            ) : null}
          </div>
          {image ? (
            // visible at every width — on phones it stacks below the text as
            // a wider, shorter band so the hero doesn't grow too tall
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-modal ring-1 ring-white/15 md:aspect-3/2">
              <Image
                src={image}
                alt={imageAlt ?? ""}
                fill
                sizes="(min-width: 1024px) 26rem, (min-width: 768px) 22rem, 92vw"
                className="object-cover"
                priority
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
