import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Scroll01, type Scroll01Item } from "@/components/ui/scroll-01";
import { PROJECTS } from "@/data";

const FEATURED = ["smart-budget", "quickpos", "catatan-ai"];

const items: Scroll01Item[] = FEATURED.map((id) => PROJECTS.find((p) => p.id === id)!).map((p) => ({
  title: p.title,
  description: p.subtitle,
  media: p.images[0],
  tag: p.tech.slice(0, 3).join(" · "),
  href: `/projects/${p.id.toLowerCase()}`,
}));

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20 sm:px-10 md:py-28 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="02" label="Selected work">
          Karya pilihan, dari ide sampai rilis.
        </SectionHeading>
        <Scroll01 items={items} />
        <div className="mt-20 flex justify-center">
          <Link
            href="/projects"
            className="rounded-full bg-accent px-7 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-ink transition hover:brightness-110"
          >
            View all projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
