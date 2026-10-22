"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Certificate } from "@/types";

export function CertificateCard({ c, index = 0 }: { c: Certificate; index?: number }) {
  return (
    <motion.a
      href={c.pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-ink-raised transition hover:-translate-y-1 hover:border-accent/60"
    >
      <div className="relative aspect-[7/5] overflow-hidden bg-ink-deep">
        <Image src={c.image} alt={c.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="space-y-2 p-5">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">{c.issuer}</p>
        <h3 className="font-display text-lg font-semibold leading-snug text-[#ececec]">{c.title}</h3>
        <p className="font-mono text-xs text-[#ececec]/45">{c.date}</p>
      </div>
    </motion.a>
  );
}
