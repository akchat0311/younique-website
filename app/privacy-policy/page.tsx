import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { contactInfo } from "@/lib/data/contact";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How YOUnique collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="py-16 md:py-20">
        <Container className="max-w-2xl space-y-8 text-base leading-relaxed text-stone-700">
          <p className="text-sm text-stone-500">
            Last updated: TODO — insert launch date. This is a placeholder
            policy; have it reviewed by counsel before launch, particularly
            regarding psychometric/assessment data handling and any
            India-specific data protection requirements (DPDP Act, 2023).
          </p>

          <div>
            <h2 className="text-xl font-semibold text-stone-900">Information we collect</h2>
            <p className="mt-3">
              When you book a consultation or request a sample report, we
              collect your name, email address, phone number, and the
              category that best describes you (student, parent,
              professional, or school). If you complete a psychometric
              assessment, we also collect your assessment responses and
              results.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-900">How we use it</h2>
            <p className="mt-3">
              We use this information to schedule and conduct consultations,
              deliver assessment reports, and respond to inquiries. Assessment
              data and consultation notes are treated as confidential and are
              not shared with third parties — including schools or employers
              — without your explicit consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-900">Data retention</h2>
            <p className="mt-3">
              We retain personal information for as long as necessary to
              provide our services and comply with legal obligations. You may
              request deletion of your data by contacting us at{" "}
              <a href={`mailto:${contactInfo.email}`} className="font-medium text-brand-700 underline underline-offset-2">
                {contactInfo.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-900">Contact</h2>
            <p className="mt-3">
              Questions about this policy can be directed to{" "}
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
