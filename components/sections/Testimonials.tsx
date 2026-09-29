"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

// Client feedback (Sep 2026, second round): the static card grid read as
// too flat once the real reviews arrived — the section is now a carousel:
// one review on stage at a time with the client's photo (the same photos
// the legacy Wix slider paired with each review), a photo-thumbnail rail
// as navigation, and gentle auto-advance.
//
// Motion rules: auto-advance pauses while the pointer or keyboard focus is
// inside the section, and is disabled entirely under the OS reduce-motion
// preference (the crossfade collapses to an instant swap there too) —
// navigation is then purely manual, which is also why the arrows and
// thumbnails exist at all instead of a bare timer.
const AUTO_ADVANCE_MS = 7000;

function QuoteMark({ className }: { className?: string }) {
  return (
    <span aria-hidden className={`font-display leading-none select-none ${className ?? ""}`}>
      &ldquo;
    </span>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotionSafe();

  const count = testimonials.length;
  const active = testimonials[index];
  const goTo = (i: number) => setIndex(((i % count) + count) % count);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [paused, reducedMotion, count]);

  const fade = reducedMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 }, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -14 },
        transition: { duration: 0.35, ease: "easeOut" as const },
      };

  return (
    <section className="bg-brand-50/60 py-20 md:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Outcomes"
          title="What clarity looks like, in their words."
          className="mx-auto"
        />

        <div
          role="group"
          aria-roledescription="carousel"
          aria-label="Client reviews"
          className="mx-auto mt-12 max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-8 shadow-card sm:p-10 md:p-12">
            <QuoteMark className="absolute -top-4 left-6 text-[7rem] text-brand-100" />

            {/* min-height keeps the card from jumping between short Hindi
                reviews and the long English ones */}
            <div className="relative min-h-[16rem] sm:min-h-[13rem]">
              {/* initial={false}: the server-rendered card must be visible
                  before hydration/animation — only slide CHANGES animate */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.figure key={index} {...fade} className="flex h-full flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
                  <span className="relative mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-full ring-4 ring-brand-100 sm:mx-0 sm:h-32 sm:w-32">
                    <Image
                      src={active.image ?? ""}
                      alt={active.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </span>
                  <div>
                    <blockquote className="text-lg leading-relaxed text-stone-800 sm:text-xl">
                      {active.quote}
                    </blockquote>
                    <figcaption className="mt-5">
                      <div className="font-semibold text-stone-900">{active.name}</div>
                      <div className="text-sm text-stone-500">{active.role}</div>
                    </figcaption>
                  </div>
                </motion.figure>
              </AnimatePresence>
            </div>
          </div>

          {/* photo-thumbnail rail doubles as slide navigation */}
          {/* wraps + smaller thumbs below sm so 6 photos + 2 arrows never
              overflow a phone viewport into horizontal scroll */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous review"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 bg-white text-stone-600 shadow-sm transition hover:border-brand-400 hover:text-brand-700 sm:h-9 sm:w-9"
            >
              <ChevronLeft size={18} />
            </button>

            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show review by ${t.name}`}
                aria-current={i === index}
                className={`relative h-9 w-9 shrink-0 overflow-hidden rounded-full transition-all duration-200 sm:h-12 sm:w-12 ${
                  i === index
                    ? "ring-3 ring-brand-500 ring-offset-2 ring-offset-brand-50"
                    : "opacity-55 grayscale hover:opacity-100 hover:grayscale-0"
                }`}
              >
                <Image src={t.image ?? ""} alt="" fill sizes="48px" className="object-cover" />
              </button>
            ))}

            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next review"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 bg-white text-stone-600 shadow-sm transition hover:border-brand-400 hover:text-brand-700 sm:h-9 sm:w-9"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
