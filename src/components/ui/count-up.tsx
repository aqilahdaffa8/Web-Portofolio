"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const value = useMotionValue(0);
  const text = useTransform(value, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) {
      const c = animate(value, to, { duration: 1.6, ease: "easeOut" });
      return () => c.stop();
    }
  }, [inView, to, value]);

  return <motion.span ref={ref}>{text}</motion.span>;
}
