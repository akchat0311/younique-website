import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { SampleReportForm } from "@/components/forms/SampleReportForm";

export const metadata: Metadata = {
  title: "Sample Report",
  description:
    "See exactly what a YOUnique psychometric report looks like before you book a consultation — no commitment required.",
};

const included = [
  "Aptitude profile across verbal, numerical, spatial, and abstract reasoning",
  "Interest mapping against academic streams or career categories",
  "Personality snapshot relevant to work and study environments",
  "Ranked recommendations with plain-language reasoning",
  "Counselor notes from the 1:1 interpretation session",
];

export default function SampleReportPage() {
  return (
    <>
      <PageHero
        eyebrow="Sample Report"
        title="See exactly what you'll receive."
        description="No commitment required. Get an illustrative sample of a YOUnique psychometric report sent straight to your inbox."
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-stone-900">What&apos;s inside</h2>
            <ul className="mt-6 space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success-600" />
                  <span className="text-base leading-relaxed text-stone-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-stone-500">
              This is an illustrative sample built to show the structure and
              depth of a real report — figures and names shown are for
              demonstration only.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-card sm:p-8">
            <SampleReportForm />
          </div>
        </Container>
      </section>
    </>
  );
}
