"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/section-heading";
import { CountUp } from "@/components/ui/count-up";
import { CERTIFICATES, PROFILE, PROJECTS, SKILLS } from "@/data";

const STATS = [
  { label: "Projects", value: PROJECTS.length },
  { label: "Certificates", value: CERTIFICATES.length },
  { label: "Technologies", value: SKILLS.programming.length + SKILLS.framework.length },
];

export function About() {
  return (
    <section id="about" className="px-6 pb-20 pt-24 sm:px-10 md:pb-24 md:pt-28 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="01" label="About">
          Building clean, useful web &amp; mobile apps.
        </SectionHeading>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-10 lg:grid-cols-[1.4fr_1fr]"
        >
          <div className="space-y-5 text-lg leading-relaxed text-[#ececec]/70">
            {PROFILE.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="space-y-3 font-mono text-sm text-[#ececec]/70 lg:justify-self-end">
            {PROFILE.languages.map((l) => (
              <li key={l} className="flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="size-1.5 rounded-full bg-accent" />
                {l}
              </li>
            ))}
          </ul>
        </motion.div>

        <dl className="mt-14 grid grid-cols-3 md:mt-20 gap-6 border-t border-white/10 pt-10">
          {STATS.map((st) => (
            <div key={st.label}>
              <dt className="font-mono text-xs uppercase tracking-wider text-[#ececec]/45">{st.label}</dt>
              <dd className="mt-2 font-display text-4xl font-semibold tracking-tight text-[#ececec] sm:text-7xl">
                <CountUp to={st.value} suffix="+" />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
