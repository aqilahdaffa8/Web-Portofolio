import { SKILLS } from "@/data";

/** Satu baris teks yang berjalan santai dengan kecepatan tetap (CSS murni, tidak terpengaruh scroll). */
function Row({ items, seconds, reverse = false }: { items: string[]; seconds: number; reverse?: boolean }) {
  const group = (
    <div className="flex shrink-0 items-center" aria-hidden>
      {items.map((name, i) => (
        <span key={name} className="flex items-center gap-5 pr-5 sm:gap-8 sm:pr-8">
          <span
            className={`font-display text-2xl font-semibold uppercase tracking-tight sm:text-4xl lg:text-5xl ${
              i % 2 === 0 ? "text-[#ececec]" : "text-transparent [-webkit-text-stroke:1px_rgba(236,236,236,0.55)]"
            }`}
          >
            {name}
          </span>
          <span className="text-base text-accent sm:text-xl">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee-track flex w-max${reverse ? " marquee-reverse" : ""}`} style={{ animationDuration: `${seconds}s` }}>
      {group}
      {group}
    </div>
  );
}

export function Marquee() {
  return (
    <div
      className="marquee space-y-3 overflow-hidden border-y border-white/10 py-8"
      aria-label={`Tech stack: ${[...SKILLS.programming, ...SKILLS.framework].join(", ")}`}
    >
      <Row items={SKILLS.programming} seconds={23} />
      <Row items={SKILLS.framework} seconds={23} reverse />
    </div>
  );
}
