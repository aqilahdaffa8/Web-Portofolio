"use client";

import { useEffect, useRef } from "react";
import { ProximityPhoto } from "@/components/ui/proximity-photo";
import { ContactLink } from "@/components/contact-link";
import gsap from "gsap";
import { PROFILE } from "@/data";

const GREETING = ["Hi,", "I'm"];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // HP: tanpa animasi masuk, supaya ringan dan konten langsung terlihat
    if (reduce || !window.matchMedia("(min-width: 768px)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from("[data-word]", { yPercent: 110, duration: 1.1, stagger: 0.09 })
        .from("[data-fade]", { y: 18, opacity: 0, duration: 0.8, stagger: 0.08 }, "-=0.7")
        .from("[data-photo]", { clipPath: "inset(100% 0 0 0)", duration: 1.2, ease: "power3.inOut" }, 0.1);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="home"
      className="relative z-0 flex min-h-svh items-center bg-paper px-6 pb-16 pt-28 text-ink sm:px-10 md:sticky md:top-0 md:py-24 lg:px-20"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p data-fade className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.25em] text-ink/60">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-3 py-1.5 text-ink">
              <span className="size-2 rounded-full bg-accent shadow-[0_0_0_3px_rgba(163,230,53,0.3)]" />
              {PROFILE.status}
            </span>
            <span>{PROFILE.location}</span>
          </p>

          <h1 className="font-display text-[clamp(3.5rem,11vw,9rem)] font-semibold leading-[0.9] tracking-tight">
            <span className="block overflow-hidden pb-[0.08em]">
              {GREETING.map((w) => (
                <span key={w} data-word className="mr-[0.25em] inline-block">{w}</span>
              ))}
            </span>
            <span className="block overflow-hidden pb-[0.1em]">
              <span data-word className="inline-block">{PROFILE.nickname}</span>
              <span data-word className="inline-block text-accent [-webkit-text-stroke:2px_var(--ink)]">.</span>
            </span>
          </h1>

          <p data-fade className="mt-6 font-mono text-base font-medium text-ink sm:text-xl">
            {PROFILE.role}
          </p>
          <p data-fade className="mt-4 max-w-xl text-sm leading-relaxed text-ink/65 sm:text-base">
            {PROFILE.heroBio}
          </p>

          <div data-fade className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded-full bg-ink px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-paper transition hover:bg-ink-raised">
              View projects
            </a>
            <ContactLink className="rounded-full border border-ink/20 px-6 py-3.5 font-mono text-xs font-medium uppercase tracking-wider transition hover:border-ink hover:bg-white">Get in touch</ContactLink>
            <div className="ml-2 flex gap-4 font-mono text-xs uppercase tracking-wider text-ink/60">
              <a className="hover:text-ink" href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="hover:text-ink" href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        <div data-photo className="mx-auto w-full max-w-[15rem] overflow-hidden rounded-[1.5rem] bg-ink sm:max-w-sm sm:rounded-[2rem] lg:max-w-md">
          <ProximityPhoto
            monoSrc={PROFILE.avatarMonochrome}
            colorSrc={PROFILE.avatarColor}
            alt={`Foto ${PROFILE.name}`}
            width={1143}
            height={1376}
          />
        </div>
      </div>
    </section>
  );
}
