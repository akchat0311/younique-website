import { Container } from "@/components/layout/Container";
import { StatCounter } from "@/components/ui/StatCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { stats, partnerLogos, type PartnerLogo } from "@/lib/data/stats";

// Spacing lives on each item as trailing margin rather than as a `gap` on
// the track. With a flat duplicated list, `gap` puts one odd extra gap at
// the seam between the two copies, so translateX(-50%) lands half a gap
// short of the true loop point — a visible stutter once per cycle. Trailing
// margin makes every item (including the last of each copy) carry the same
// spacing, so the two halves are pixel-identical and the loop is seamless.
const ITEM_SPACING = "mr-14";

// Repeated enough times that even on an ultra-wide monitor the track is
// always wider than the viewport — with only 2 copies, once the unique
// content is narrower than the screen, a visible dead patch of empty
// track opens up before the next copy scrolls in from the right.
const REPEAT_COUNT = 5;

function PartnerItem({ partner, hidden }: { partner: PartnerLogo; hidden?: boolean }) {
  return (
    <div className={`flex shrink-0 items-center ${ITEM_SPACING}`} aria-hidden={hidden || undefined}>
      {partner.src ? (
        <img
          src={partner.src}
          alt={partner.name}
          className={`w-auto object-contain ${partner.logoClassName ?? "h-9 sm:h-10"}`}
        />
      ) : partner.lines ? (
        <span className="flex flex-col items-center text-center leading-tight whitespace-nowrap">
          {partner.lines.map((line, i) => (
            <span
              key={i}
              className={i === 0 ? "text-sm font-semibold text-stone-700" : "text-sm font-medium text-stone-600"}
            >
              {line}
            </span>
          ))}
        </span>
      ) : (
        <span className="text-sm font-semibold whitespace-nowrap text-stone-700">{partner.name}</span>
      )}
    </div>
  );
}

export function TrustBar() {
  return (
    <section className="border-y border-stone-200 bg-canvas-raised py-12">
      <Container>
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-heading text-3xl font-bold text-brand-800 sm:text-4xl">
                  <StatCounter value={stat.value} />
                </div>
                <p className="mt-1 text-sm text-stone-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* organizations YOUnique has worked with — an infinite right-to-left
            marquee; the list is repeated so the track always spans wider
            than the viewport, with edge masks so logos fade in/out rather
            than clipping hard at the container */}
        <div
          className="mt-10 overflow-hidden border-t border-stone-200 pt-8"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div
            aria-label="Organizations we've worked with"
            className="flex w-max animate-[marquee-scroll_32s_linear_infinite] items-center hover:[animation-play-state:paused]"
          >
            {Array.from({ length: REPEAT_COUNT }).map((_, copyIndex) =>
              partnerLogos.map((partner) => (
                <PartnerItem
                  key={`${copyIndex}-${partner.name}`}
                  partner={partner}
                  hidden={copyIndex > 0}
                />
              ))
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
