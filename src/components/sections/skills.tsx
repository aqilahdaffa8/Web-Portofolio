"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/section-heading";
import { SKILL_GROUPS } from "@/data";

export function Skills() {
  return (
    <section id="skills" className="px-6 pb-24 pt-20 sm:px-10 md:pb-32 md:pt-28 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="04" label="Skills">
          Tools yang saya pakai sehari-hari.
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-ink-raised p-6"
            >
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent">{g.label}</p>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-white/10 bg-ink px-3.5 py-2 font-mono text-sm text-[#ececec]/80 transition hover:border-accent hover:text-accent"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
