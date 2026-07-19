import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { contactInfo } from "@/lib/data/contact";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of YOUnique's website and services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <section className="py-16 md:py-20">
        <Container className="max-w-2xl space-y-8 text-base leading-relaxed text-stone-700">
          <p className="text-sm text-stone-500">
            Last updated: TODO — insert launch date. This is a placeholder;
            have it reviewed by counsel before launch.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-stone-900">Nature of services</h2>
            <p className="mt-3">
              YOUnique provides psychometric assessment, career counseling,
              and related training services. Assessment results and
              recommendations are advisory in nature and do not guarantee any
              specific academic, career, or professional outcome.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-900">Booking and consultations</h2>
            <p className="mt-3">
              Submitting a consultation or sample-report request does not
              constitute a binding commitment on either party. Pricing and
              scheduling are confirmed directly with our team before any
              paid service begins.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-900">Intellectual property</h2>
            <p className="mt-3">
              All content on this website, including assessment
              methodologies, reports, and written material, is the property
              of YOUnique and may not be reproduced without permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-900">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be directed to{" "}
              <a href={`mailto:${contactInfo.email}`} className="font-medium text-brand-700 underline underline-offset-2">
                {contactInfo.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
