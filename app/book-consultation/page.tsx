import type { Metadata } from "next";
import { ShieldCheck, Clock, Users } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { ConsultationForm } from "@/components/forms/ConsultationForm";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book a free, confidential consultation with a YOUnique counseling psychologist. No obligation.",
};

const reassurances = [
  { icon: ShieldCheck, text: "100% confidential — never shared without consent" },
  { icon: Clock, text: "We respond within one business day" },
  { icon: Users, text: "Reviewed personally by a counseling psychologist" },
];

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Consultation"
        title="Start with a conversation, not a commitment."
        description="Tell us a bit about your situation and we'll reach out to schedule a free, no-obligation consultation."
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <div className="space-y-6">
            {reassurances.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
                  <p className="text-base text-stone-700">{item.text}</p>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-card sm:p-8">
            <ConsultationForm />
          </div>
        </Container>
      </section>
    </>
  );
}
