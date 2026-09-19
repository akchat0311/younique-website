import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { faqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about YOUnique's psychometric assessments, consultations, pricing, and confidentiality.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common questions, answered directly."
        image="/images/photos/faq-questions.jpg"
        imageAlt="Students raising their hands to ask questions in a classroom"
      />

      <section className="py-20 md:py-28">
        <Container className="max-w-2xl">
          <div className="divide-y divide-stone-200 border-t border-b border-stone-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-stone-900">
                  {faq.question}
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-stone-400 transition-transform duration-150 group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 text-base leading-relaxed text-stone-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
