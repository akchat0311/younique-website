import { createElement } from "react";
import Image from "next/image";
import { GraduationCap, Users, School, Briefcase, HeartHandshake, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollRevealGroup, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { testimonials } from "@/lib/data/testimonials";
import type { Testimonial } from "@/types/testimonial";

// Client feedback (Sep 2026): plain uniform cards read as filler. The
// section now leads with a featured quote and gives every entry an avatar.
// The avatars are icon medallions, NOT stock faces, on purpose: the
// testimonials in lib/data/testimonials.ts are real client reviews from
// the legacy site but carry no photos, and a photographed stranger above
// a quote invents a person who endorsed the business. If a client ever
// supplies a photo with permission, set `image` on the entry and the
// medallion is replaced automatically.
const AVATAR_ICONS: [pattern: RegExp, icon: LucideIcon][] = [
  [/parent of|class \d+ student/i, Users],
  [/undergraduate|student/i, GraduationCap],
  [/school|coordinator/i, School],
  [/professional|eft client/i, Briefcase],
  [/garbh sanskar|shubhagat/i, HeartHandshake],
];

function avatarIconFor(t: Testimonial): LucideIcon {
  return AVATAR_ICONS.find(([re]) => re.test(t.role))?.[1] ?? User;
}

function Avatar({ t, size = "md" }: { t: Testimonial; size?: "md" | "lg" }) {
  const cls = size === "lg" ? "h-14 w-14" : "h-11 w-11";
  if (t.image) {
    return (
      <span className={`relative ${cls} shrink-0 overflow-hidden rounded-full ring-2 ring-white`}>
        <Image src={t.image} alt={t.name} fill className="object-cover" />
      </span>
    );
  }
  const icon = avatarIconFor(t);
  return (
    <span
      className={`flex ${cls} shrink-0 items-center justify-center rounded-full bg-linear-to-br from-brand-500 to-accent-500 text-white shadow-card`}
    >
      {createElement(icon, { size: size === "lg" ? 26 : 20 })}
    </span>
  );
}

function QuoteMark({ className }: { className?: string }) {
  return (
    <span aria-hidden className={`font-display leading-none select-none ${className ?? ""}`}>
      &ldquo;
    </span>
  );
}

export function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="bg-brand-50/60 py-20 md:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Outcomes"
          title="What clarity looks like, in their words."
          className="mx-auto"
        />

        <ScrollRevealGroup className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* featured quote — spans two columns, larger type, oversized
              quotation mark as the visual anchor */}
          <ScrollRevealItem className="lg:col-span-2">
            <figure className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-stone-200 bg-white p-8 shadow-card sm:p-10">
              <QuoteMark className="absolute -top-4 left-6 text-[7rem] text-brand-100" />
              <blockquote className="relative text-xl leading-relaxed text-stone-800 sm:text-2xl">
                {featured.quote}
              </blockquote>
              <figcaption className="relative mt-8 flex items-center gap-4">
                <Avatar t={featured} size="lg" />
                <div>
                  <p className="text-sm font-semibold text-stone-900">{featured.name}</p>
                  <p className="text-sm text-stone-500">{featured.role}</p>
                </div>
              </figcaption>
            </figure>
          </ScrollRevealItem>

          {rest.map((t) => (
            <ScrollRevealItem key={`${t.name}-${t.role}`}>
              <figure className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-stone-200 bg-white p-6 shadow-card">
                <QuoteMark className="absolute -top-2 left-4 text-[4.5rem] text-brand-100" />
                <blockquote className="relative text-base leading-relaxed text-stone-700">
                  {t.quote}
                </blockquote>
                <figcaption className="relative mt-6 flex items-center gap-3">
                  <Avatar t={t} />
                  <div>
                    <p className="text-sm font-semibold text-stone-900">{t.name}</p>
                    <p className="text-sm text-stone-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </Container>
    </section>
  );
}
