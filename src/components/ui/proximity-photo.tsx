"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

interface Props {
  monoSrc: string;
  colorSrc: string;
  alt: string;
  width: number;
  height: number;
  /** Jarak (px) dari tepi foto tempat warna mulai muncul. */
  radius?: number;
}

/**
 * Foto monokrom yang berubah ke versi berwarna SELURUHNYA saat kursor mendekat
 * (crossfade satu lapisan penuh, bukan spotlight sebagian).
 */
export function ProximityPhoto({ monoSrc, colorSrc, alt, width, height, radius = 320 }: Props) {
  const box = useRef<HTMLDivElement>(null);
  const target = useMotionValue(0);
  const opacity = useSpring(target, { stiffness: 90, damping: 22, mass: 0.6 });

  useEffect(() => {
    // Perangkat sentuh tidak punya kursor: langsung tampilkan berwarna.
    if (!window.matchMedia("(hover: hover)").matches) {
      target.set(1);
      return;
    }
    const onMove = (e: PointerEvent) => {
      const r = box.current?.getBoundingClientRect();
      if (!r) return;
      const dx = Math.max(r.left - e.clientX, 0, e.clientX - r.right);
      const dy = Math.max(r.top - e.clientY, 0, e.clientY - r.bottom);
      const t = 1 - Math.min(Math.hypot(dx, dy) / radius, 1);
      target.set(t * t * (3 - 2 * t)); // smoothstep
    };
    const onLeave = () => target.set(0);
    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [radius, target]);

  const sizes = "(min-width: 1024px) 28rem, 90vw";
  return (
    <div ref={box} className="relative">
      <Image src={monoSrc} alt={alt} width={width} height={height} priority sizes={sizes} className="h-auto w-full" />
      <motion.div style={{ opacity }} className="absolute inset-0" aria-hidden>
        <Image src={colorSrc} alt="" fill priority sizes={sizes} className="object-cover" />
      </motion.div>
    </div>
  );
}
