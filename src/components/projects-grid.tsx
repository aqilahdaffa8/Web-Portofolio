"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PhoneFrame } from "@/components/ui/scroll-01";
import { PROJECTS } from "@/data";

const FILTERS = ["all", "mobile", "web", "game"] as const;
type Filter = (typeof FILTERS)[number];
const LABEL: Record<Filter, string> = { all: "All", mobile: "Mobile", web: "Web", game: "Game" };

export function ProjectsGrid() {
  const [active, setActive] = useState<Filter>("all");
  const list = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);
  const count = (f: Filter) => (f === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
              active === f ? "border-accent bg-accent text-ink" : "border-white/15 text-[#ececec]/70 hover:border-white/40"
            }`}
          >
            {LABEL[f]} ({count(f)})
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {list.map((p) => (
          <Link
            key={p.id}
            href={`/projects/${p.id.toLowerCase()}`}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-raised transition hover:-translate-y-1 hover:border-accent/60"
          >
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-ink-deep">
              {p.category === "mobile" ? (
                <div className="relative aspect-[9/19.5] h-[86%] transition duration-500 group-hover:scale-105">
                  <PhoneFrame src={p.images[0]} alt={p.title} />
                </div>
              ) : (
                <Image src={p.images[0]} alt={p.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              )}
            </div>
            <div className="space-y-2 p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">{p.number} · {p.category}</p>
              <h2 className="font-display text-2xl font-semibold tracking-tight">{p.title}</h2>
              <p className="text-sm text-[#ececec]/60">{p.subtitle}</p>
              <p className="pt-1 font-mono text-xs text-[#ececec]/40">{p.tech.slice(0, 4).join(" · ")}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
