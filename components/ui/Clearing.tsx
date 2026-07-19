"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

/**
 * "The Clearing" — the brand's signature visual: a soft field of diffused
 * light that resolves, once, from indistinct haze into a single warm point
 * of clarity, then keeps a barely-there breathing motion forever after.
 *
 * The five-stage arc it plays on mount (confusion → discovery →
 * understanding → confidence → direction) is deliberately not a diagram of
 * the assessment methodology — it's the felt shape of a visitor's own
 * uncertainty resolving. Built as a standalone primitive so the same
 * language can recur elsewhere on the site without rebuilding it.
 */

type HazeRole = "ambient" | "discovery" | "halo" | "resolution";

interface Haze {
  id: string;
  x: number;
  y: number;
  size: number;
  role: HazeRole;
  driftDuration: number;
  driftDelay: number;
}

const hazes: Haze[] = [
  // ambient — ever-present soft atmosphere, never fully resolves
  { id: "a1", x: 10, y: 16, size: 260, role: "ambient", driftDuration: 13, driftDelay: 0 },
  { id: "a2", x: 88, y: 14, size: 220, role: "ambient", driftDuration: 16, driftDelay: 1.2 },
  { id: "a3", x: 16, y: 84, size: 240, role: "ambient", driftDuration: 14, driftDelay: 0.6 },
  { id: "a4", x: 80, y: 88, size: 200, role: "ambient", driftDuration: 11, driftDelay: 2 },
  { id: "a5", x: 46, y: 6, size: 180, role: "ambient", driftDuration: 15, driftDelay: 0.8 },
  { id: "a6", x: 3, y: 52, size: 210, role: "ambient", driftDuration: 12, driftDelay: 1.6 },
  { id: "a7", x: 95, y: 60, size: 190, role: "ambient", driftDuration: 17, driftDelay: 0.3 },
  { id: "a8", x: 26, y: 28, size: 170, role: "ambient", driftDuration: 10, driftDelay: 2.4 },
  { id: "a9", x: 62, y: 16, size: 150, role: "ambient", driftDuration: 13, driftDelay: 1 },

  // discovery — individually noticed, partially resolve, quiet indigo presence
  { id: "d1", x: 38, y: 40, size: 150, role: "discovery", driftDuration: 9, driftDelay: 0.4 },
  { id: "d2", x: 54, y: 74, size: 130, role: "discovery", driftDuration: 10, driftDelay: 1.1 },
  { id: "d3", x: 28, y: 62, size: 120, role: "discovery", driftDuration: 8, driftDelay: 0.7 },

  // halo — the warm bloom behind the resolution point, larger and softer
  { id: "r1-halo", x: 66, y: 58, size: 260, role: "halo", driftDuration: 6, driftDelay: 0 },

  // resolution — the single point that fully clarifies and stays
  { id: "r1", x: 66, y: 58, size: 92, role: "resolution", driftDuration: 4, driftDelay: 0 },
];

const introTimes = [0, 0.19, 0.44, 0.69, 1];

const introByRole: Record<HazeRole, { opacity: number[]; blur: number[]; scale: number[] }> = {
  ambient: {
    opacity: [0, 0.14, 0.13, 0.11, 0.09],
    blur: [26, 24, 22, 20, 20],
    scale: [0.85, 1, 1, 1, 1],
  },
  discovery: {
    opacity: [0, 0.1, 0.26, 0.38, 0.4],
    blur: [28, 26, 16, 10, 9],
    scale: [0.85, 0.95, 1, 1.05, 1.05],
  },
  halo: {
    opacity: [0, 0.05, 0.14, 0.28, 0.32],
    blur: [40, 38, 34, 30, 28],
    scale: [0.7, 0.85, 0.95, 1.05, 1.1],
  },
  resolution: {
    opacity: [0, 0.08, 0.22, 0.55, 0.9],
    blur: [30, 28, 18, 8, 3],
    scale: [0.7, 0.85, 0.95, 1.05, 1],
  },
};

const colorByRole: Record<HazeRole, string> = {
  ambient: "radial-gradient(circle, rgba(168,162,158,0.9) 0%, rgba(168,162,158,0) 72%)",
  discovery: "radial-gradient(circle, rgba(78,105,190,0.9) 0%, rgba(78,105,190,0) 72%)",
  halo: "radial-gradient(circle, rgba(200,162,74,0.8) 0%, rgba(200,162,74,0) 68%)",
  resolution: "radial-gradient(circle, rgba(200,162,74,0.95) 0%, rgba(200,162,74,0) 70%)",
};

function HazeShape({ haze, reduceMotion }: { haze: Haze; reduceMotion: boolean }) {
  const intro = introByRole[haze.role];
  const finalIndex = intro.opacity.length - 1;

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${haze.x}%`,
        top: `${haze.y}%`,
        width: haze.size,
        height: haze.size,
        marginLeft: -haze.size / 2,
        marginTop: -haze.size / 2,
        background: colorByRole[haze.role],
      }}
      initial={
        reduceMotion
          ? {
              opacity: intro.opacity[finalIndex],
              scale: intro.scale[finalIndex],
              filter: `blur(${intro.blur[finalIndex]}px)`,
            }
          : { opacity: 0, scale: intro.scale[0], filter: `blur(${intro.blur[0]}px)` }
      }
      animate={{
        opacity: intro.opacity,
        scale: intro.scale,
        filter: intro.blur.map((b) => `blur(${b}px)`),
      }}
      transition={reduceMotion ? { duration: 0 } : { duration: 8, times: introTimes, ease: "easeInOut" }}
    >
      {!reduceMotion && (
        <motion.div
          className="h-full w-full rounded-full"
          animate={
            haze.role === "resolution" || haze.role === "halo"
              ? { scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] }
              : { x: [0, 8, -6, 0], y: [0, -6, 5, 0] }
          }
          transition={{
            duration: haze.driftDuration,
            delay: haze.driftDelay,
            repeat: Infinity,
            repeatType: haze.role === "resolution" || haze.role === "halo" ? "loop" : "mirror",
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  );
}

export function Clearing({ className }: { className?: string }) {
  const reduceMotion = useReducedMotionSafe();

  return (
    <div
      className={cn("pointer-events-none relative", className)}
      style={{
        maskImage: "radial-gradient(ellipse 62% 62% at 58% 50%, black 45%, transparent 88%)",
        WebkitMaskImage: "radial-gradient(ellipse 62% 62% at 58% 50%, black 45%, transparent 88%)",
      }}
      aria-hidden="true"
    >
      {hazes.map((h) => (
        <HazeShape key={h.id} haze={h} reduceMotion={Boolean(reduceMotion)} />
      ))}
    </div>
  );
}
