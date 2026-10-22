import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhoneFrame } from "@/components/ui/scroll-01";
import { PROJECTS } from "@/data";

type Params = { params: Promise<{ slug: string }> };
const find = (slug: string) => PROJECTS.find((p) => p.id.toLowerCase() === slug.toLowerCase());

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.id.toLowerCase() }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = find((await params).slug);
  return { title: p ? `${p.title} — Projects` : "Project" };
}

export default async function ProjectPage({ params }: Params) {
  const p = find((await params).slug);
  if (!p) notFound();
  const btn = "rounded-full px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider transition";

  return (
    <main className="min-h-screen bg-ink px-6 pb-24 pt-32 text-[#ececec] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <Link href="/projects" className="mb-10 inline-block font-mono text-xs uppercase tracking-wider text-[#ececec]/50 hover:text-accent">← All projects</Link>

        <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">{p.number} · {p.category}{p.role ? ` · ${p.role}` : ""}</p>
        <h1 className="font-display text-5xl font-semibold leading-[1] tracking-tight sm:text-7xl">{p.title}</h1>
        <p className="mt-4 text-xl text-[#ececec]/60">{p.subtitle}</p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-[#ececec]/75">{p.description}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className={`${btn} bg-accent text-ink hover:brightness-110`}>Source code ↗</a>
              {p.demoUrl && <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className={`${btn} border border-white/20 hover:border-accent hover:text-accent`}>Live demo ↗</a>}
            </div>
          </div>
          <div className="space-y-8">
            <ul className="space-y-3">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-[#ececec]/75"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />{h}</li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t} className="rounded-full border border-white/10 bg-ink-raised px-4 py-1.5 font-mono text-xs text-[#ececec]/80">{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20">
          {p.category === "mobile" ? (
            <div className="-mx-6 flex gap-6 overflow-x-auto px-6 pb-6 sm:-mx-10 sm:px-10 lg:mx-0 lg:px-0">
              {p.images.map((src, i) => (
                <div key={src} className="relative aspect-[9/19.5] w-56 shrink-0 sm:w-64">
                  <PhoneFrame src={src} alt={`${p.title} ${i + 1}`} />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {p.images.map((src, i) => (
                <div key={src} className="relative aspect-[2/1] overflow-hidden rounded-2xl border border-white/10">
                  <Image src={src} alt={`${p.title} ${i + 1}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
