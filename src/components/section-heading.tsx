"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Judul section: kata-kata naik satu per satu saat masuk layar (GSAP ScrollTrigger). */
export function SectionHeading({ index, label, children }: { index: string; label: string; children: string }) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(min-width: 768px)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-w]", {
        yPercent: 115,
        duration: 1,
        ease: "power4.out",
        stagger: 0.05,
        scrollTrigger: { trigger: root.current, start: "top 85%", once: true },
      });
      gsap.from("[data-label]", {
        opacity: 0, x: -16, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 88%", once: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <header ref={root} className="mb-14 sm:mb-20">
      <p data-label className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-[#ececec]/50">
        <span className="text-accent">{index}</span>
        <span className="h-px w-10 bg-[#ececec]/20" />
        {label}
      </p>
      <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-[#ececec] sm:text-6xl">
        {children.split(" ").map((w, i) => (
          <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-[0.1em] align-bottom">
            <span data-w className="inline-block">{w}</span>
          </span>
        ))}
      </h2>
    </header>
  );
}
