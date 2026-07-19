import { Container } from "@/components/layout/Container";
import { StatCounter } from "@/components/ui/StatCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { stats, partnerLogos } from "@/lib/data/stats";

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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-stone-200 pt-8 opacity-70 grayscale sm:justify-between">
          {partnerLogos.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-sm font-medium tracking-wide text-stone-500"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
