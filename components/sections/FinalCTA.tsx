import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <ScrollReveal>
          <div className="overflow-hidden rounded-3xl bg-brand-800 px-8 py-16 text-center sm:px-16">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Clarity starts with one conversation.
            </h2>
            {/* Client feedback (Sep 2026): the "Download a Sample Report"
                CTA made the site read as though it sells reports, when the
                report is one artifact of one service line. The single CTA
                is the conversation — the actual front door to everything. */}
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-brand-100">
              Talk it through with us, free — whether it&apos;s career
              direction, counselling, or training. No obligation, no
              pressure.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/book-consultation" variant="secondary" size="lg">
                Let&apos;s Talk
              </Button>
              <Button href="/services" variant="outline-light" size="lg">
                Explore Our Services
              </Button>
            </div>
            <p className="mt-5 text-sm text-brand-200">
              No obligation. 100% confidential.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
