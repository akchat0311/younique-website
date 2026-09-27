import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { contactInfo } from "@/lib/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with YOUnique to ask a question or arrange a free consultation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        description="Have a question before booking? Reach out directly, or fill out the form and we'll respond within one business day."
        image="/images/photos/contact-friendly.jpg"
        imageAlt="Two friends smiling while looking at their phones"
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
              <div>
                <p className="text-sm font-semibold text-stone-900">Email</p>
                <a href={`mailto:${contactInfo.email}`} className="text-stone-600 hover:text-brand-700">
                  {contactInfo.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
              <div>
                <p className="text-sm font-semibold text-stone-900">Phone</p>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="text-stone-600 hover:text-brand-700">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
              <div>
                <p className="text-sm font-semibold text-stone-900">Location</p>
                <p className="whitespace-pre-line text-stone-600">{contactInfo.address}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-card sm:p-8">
            <ConsultationForm />
          </div>
        </Container>
      </section>
    </>
  );
}
