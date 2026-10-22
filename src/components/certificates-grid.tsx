"use client";

import { useState } from "react";
import { CertificateCard } from "@/components/certificate-card";
import { CERTIFICATES } from "@/data";

const CATEGORIES = ["All", ...Array.from(new Set(CERTIFICATES.map((c) => c.category)))];

export function CertificatesGrid() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? CERTIFICATES : CERTIFICATES.filter((c) => c.category === active);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
              active === cat ? "border-accent bg-accent text-ink" : "border-white/15 text-[#ececec]/70 hover:border-white/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((c, i) => (
          <CertificateCard key={c.id} c={c} index={i} />
        ))}
      </div>
    </>
  );
}
