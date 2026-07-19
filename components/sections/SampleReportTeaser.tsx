import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SampleReportForm } from "@/components/forms/SampleReportForm";

function ReportMockup() {
  return (
    <svg viewBox="0 0 420 480" fill="none" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="420" height="480" rx="20" fill="#FFFFFF" stroke="#E7E5E4" />
      <rect x="32" y="32" width="180" height="14" rx="4" fill="#1F2C5C" />
      <rect x="32" y="54" width="120" height="10" rx="4" fill="#D6D3D1" />

      <g transform="translate(32,90)">
        <circle cx="60" cy="60" r="56" fill="none" stroke="#E7E5E4" strokeWidth="2" />
        <circle cx="60" cy="60" r="38" fill="none" stroke="#E7E5E4" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="20" fill="none" stroke="#E7E5E4" strokeWidth="1.5" />
        <polygon
          points="60,10 96,44 82,96 38,96 24,44"
          fill="#34A6B6"
          opacity="0.25"
          stroke="#268797"
          strokeWidth="2"
        />
      </g>

      <g transform="translate(220,90)">
        <rect x="0" y="70" width="16" height="40" rx="2" fill="#93A7DE" />
        <rect x="26" y="50" width="16" height="60" rx="2" fill="#4E69BE" />
        <rect x="52" y="20" width="16" height="90" rx="2" fill="#2C3E80" />
        <rect x="78" y="60" width="16" height="50" rx="2" fill="#93A7DE" />
        <rect x="104" y="35" width="16" height="75" rx="2" fill="#4E69BE" />
        <line x1="0" y1="110" x2="140" y2="110" stroke="#E7E5E4" strokeWidth="1" />
      </g>

      <rect x="32" y="228" width="356" height="1" fill="#E7E5E4" />

      <rect x="32" y="250" width="140" height="10" rx="4" fill="#1F2C5C" />
      <rect x="32" y="272" width="356" height="8" rx="3" fill="#E7E5E4" />
      <rect x="32" y="288" width="356" height="8" rx="3" fill="#E7E5E4" />
      <rect x="32" y="304" width="260" height="8" rx="3" fill="#E7E5E4" />

      <rect x="32" y="334" width="140" height="10" rx="4" fill="#1F2C5C" />
      <rect x="32" y="356" width="356" height="8" rx="3" fill="#E7E5E4" />
      <rect x="32" y="372" width="300" height="8" rx="3" fill="#E7E5E4" />

      <rect x="32" y="410" width="130" height="28" rx="8" fill="#C8A24A" opacity="0.15" />
      <rect x="44" y="420" width="106" height="8" rx="3" fill="#B08830" />
    </svg>
  );
}

export function SampleReportTeaser() {
  return (
    <section className="bg-canvas-raised py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <ScrollReveal className="order-2 lg:order-1">
          <div className="mx-auto aspect-[7/8] w-full max-w-sm rounded-3xl border border-stone-200 bg-white p-4 shadow-elevated">
            <ReportMockup />
          </div>
        </ScrollReveal>

        <div className="order-1 lg:order-2">
          <Badge tone="accent">See It Before You Book</Badge>
          <h2 className="mt-6 text-3xl font-semibold text-stone-900 sm:text-4xl">
            See exactly what you&apos;ll receive.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            No commitment required. Get an illustrative sample of a YOUnique
            psychometric report — the same structure real clients receive —
            sent straight to your inbox.
          </p>
          <div className="mt-8 max-w-md">
            <SampleReportForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
