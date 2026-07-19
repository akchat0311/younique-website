"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

function parseNumeric(value: string): { prefix: string; number: number; suffix: string } | null {
  const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  return { prefix, number: parseFloat(numStr.replace(/,/g, "")), suffix };
}

export function StatCounter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const parsed = parseNumeric(value);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 });
  const [display, setDisplay] = useState(parsed ? `${parsed.prefix}0${parsed.suffix}` : value);

  useEffect(() => {
    if (isInView && parsed) {
      motionValue.set(parsed.number);
    }
  }, [isInView, motionValue, parsed]);

  useEffect(() => {
    if (!parsed) return;
    return spring.on("change", (latest) => {
      const rounded = Number.isInteger(parsed.number) ? Math.round(latest) : Math.round(latest * 10) / 10;
      setDisplay(`${parsed.prefix}${rounded.toLocaleString("en-IN")}${parsed.suffix}`);
    });
  }, [spring, parsed]);

  return (
    <span ref={ref} className={className}>
      {parsed ? display : value}
    </span>
  );
}
