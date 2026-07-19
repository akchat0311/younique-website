"use client";

import Image from "next/image";
import { motion, type Transition } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

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
      {/* the photograph IS the hero — one canvas, not a banner behind a
          separate content block. everything below lives on top of it. */}
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/images/Consultation_image.png"
          alt="A counseling psychologist reviewing a personalized psychometric assessment report with a student, in a warm, book-lined consultation room"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] sm:object-[center_20%] lg:object-center"
        />
      </motion.div>

      {/* the lightest possible warm wash — never a fog. it exists only to
          keep the type legible against the wall, and fades out well
          before it reaches the faces or the report. */}
      <div
        className="absolute inset-x-0 top-0 h-[58%] sm:h-[52%] lg:h-[46%]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(251,247,238,0.78) 0%, rgba(251,247,238,0.5) 55%, transparent 100%)",
        }}
      />

      {/* a soft close at the foot of the frame — just enough to melt into
          the next section, never enough to fog the report */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-canvas/90 to-transparent sm:h-20 lg:h-24" />

      {/* everything the visitor needs — headline, copy, the ask — clusters
          in the one negative-space zone the photograph offers, above the
          interaction, so the composition reads as a single cover, not a
          stack of sections */}
      <div className="absolute inset-x-0 top-0 flex flex-col items-center px-6 pt-8 text-center sm:pt-11 lg:pt-14">
        <motion.p
          {...fadeUp(0)}
          className="text-[10px] font-semibold tracking-[0.2em] text-brand-800/80 uppercase sm:text-xs"
        >
          Counseling Psychology &amp; Career Guidance
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="mx-auto mt-3 max-w-2xl font-display text-[clamp(1.6rem,4.2vw,3rem)] leading-[1.12] font-medium text-stone-900"
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

        <motion.div
          {...fadeUp(0.3)}
          className="mt-4 flex flex-col items-center justify-center gap-2.5 sm:mt-6 sm:flex-row sm:gap-3"
        >
          <Button href="/book-consultation" size="md" className="w-full sm:w-auto lg:px-7 lg:py-3.5 lg:text-base">
            Book a Consultation
          </Button>
          <Button
            href="/sample-report"
            variant="secondary"
            size="md"
            className="w-full bg-white/90 backdrop-blur-sm sm:w-auto lg:px-7 lg:py-3.5 lg:text-base"
          >
            View Sample Report
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
