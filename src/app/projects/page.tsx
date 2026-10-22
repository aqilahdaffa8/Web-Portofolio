import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PhoneFrame } from "@/components/ui/scroll-01";
import { SectionHeading } from "@/components/section-heading";
import { PROJECTS } from "@/data";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-ink px-6 pb-24 pt-32 text-[#ececec] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="mb-10 inline-block font-mono text-xs uppercase tracking-wider text-[#ececec]/50 hover:text-accent">← Home</Link>
        <SectionHeading index="02" label="Projects">Semua project.</SectionHeading>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
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
      </div>
    </main>
  );
}
