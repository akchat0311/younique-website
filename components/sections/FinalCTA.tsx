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
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-brand-100">
              Book a free consultation, or start with a sample report — either
              way, there&apos;s no obligation and no pressure.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/book-consultation" variant="secondary" size="lg">
                Book a Free Consultation
              </Button>
              <Button href="/sample-report" variant="outline-light" size="lg">
                Download a Sample Report
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
