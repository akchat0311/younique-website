"use client";

import Image from "next/image";
import { motion, type Transition } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PLATFORM_ROUTES, platformHref } from "@/lib/site";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

// The photograph IS the hero — one canvas, not a banner behind a separate
// content block. Everything below lives on top of it.
//
// Swapping the image: overwrite the file at HERO_IMAGE.src and nothing else
// needs to change. The washes below are tuned for a light, warm frame whose
// upper third is quiet — see docs note in the repo brief. If a replacement
// is darker or busier at the top, raise the first wash's alpha rather than
// moving the type.
//
// A note for whoever replaces it: the previous frame was AI-generated and
// the report on the table read "Pdchurnetric Profile", "Interest Areas Mao",
// "Top 5 Shengths", with body copy that was pure noise. On a site selling
// rigorous documented reports that quietly discredited the real report shown
// two sections below. Any replacement must contain NO legible text — no
// documents, screens, signage or book spines in focus.
const HERO_IMAGE = {
  src: "/images/Consultation_image.png",
  alt: "A counselling psychologist in conversation with a young client across a table in a warm, naturally lit consulting room",
};

export function Hero() {
  const reduceMotion = Boolean(useReducedMotionSafe());

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: (reduceMotion
      ? { duration: 0 }
      : { duration: 0.8, delay, ease: "easeOut" }) as Transition,
  });

  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden sm:h-[85vh] lg:h-[92vh]">
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] sm:object-[center_20%] lg:object-center"
        />
      </motion.div>

      {/* The lightest possible warm wash — never a fog. It exists only to keep
          the type legible against the wall, and fades out well before it
          reaches the faces. */}
      <div
        className="absolute inset-x-0 top-0 h-[58%] sm:h-[52%] lg:h-[46%]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(251,247,238,0.80) 0%, rgba(251,247,238,0.52) 55%, transparent 100%)",
        }}
      />

      {/* A soft close at the foot of the frame, so it melts into the section
          below rather than ending on a hard edge. */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-canvas/90 to-transparent sm:h-20 lg:h-24" />

      {/* Headline, copy and the ask cluster in the one negative-space zone the
          photograph offers, so the composition reads as a single cover rather
          than a stack of sections. */}
      <div className="absolute inset-x-0 top-0 flex flex-col items-center px-6 pt-8 text-center sm:pt-11 lg:pt-14">
        <motion.p
          {...fadeUp(0)}
          className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-800 sm:text-xs"
        >
          Counseling Psychology &amp; Career Guidance
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="mx-auto mt-3 max-w-2xl font-display text-[clamp(1.6rem,4.2vw,3rem)] font-semibold leading-[1.12] tracking-tight text-stone-900"
        >
          Understand Yourself.
          <br />
          Make Better Life Decisions.
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-3 max-w-md text-[13.5px] leading-relaxed text-stone-700 sm:mt-4 sm:max-w-lg sm:text-base"
        >
          Gain clarity through scientific assessments and expert guidance. We
          help students, parents, and professionals make confident decisions
          about careers, learning, and personal growth.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="mt-5 flex flex-col items-center sm:mt-6">
          <Button
            href={platformHref(PLATFORM_ROUTES.getStarted)}
            size="md"
            className="w-full sm:w-auto lg:px-8 lg:py-3.5 lg:text-base"
          >
            Get Started
          </Button>
          <p className="mt-3 max-w-sm text-[12.5px] leading-relaxed text-stone-700 sm:max-w-md sm:text-sm">
            Assessment, counselling, or something else — we&apos;ll help you work
            out what fits. Free to start.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
