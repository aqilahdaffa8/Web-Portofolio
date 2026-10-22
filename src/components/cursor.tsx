"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

/** Cincin kursor yang mengikuti mouse dan membesar di atas link/tombol. Hanya di perangkat dengan mouse. */
export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 42, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 42, mass: 0.4 });
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHover(!!(e.target as Element | null)?.closest?.("a, button, [data-cursor]"));
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference" aria-hidden>
      <motion.div
        animate={{ scale: hover ? 1.9 : 1, backgroundColor: hover ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)" }}
        transition={{ duration: 0.2 }}
        className="-ml-3.5 -mt-3.5 size-7 rounded-full border-2 border-white"
      />
    </motion.div>
  );
}
