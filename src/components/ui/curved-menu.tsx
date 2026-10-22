"use client";

import { AnimatePresence, motion, type Variants } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { markContactScroll } from "@/components/contact-link";
import { LogoMark } from "@/components/logo";
import { PROFILE } from "@/data";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const ITEMS = [
  { heading: "Home", href: "/" },
  { heading: "Projects", href: "/projects" },
  { heading: "Certificates", href: "/certificates" },
  { heading: "Contact", href: "/#contact" },
];

const slide: Variants = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0%", transition: { duration: 0.8, ease: EASE } },
  exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: EASE } },
};

/** Sisi kiri panel yang melengkung lalu meluruskan diri. Tinggi diukur setelah mount (aman untuk SSR). */
function Curve() {
  const [h, setH] = useState(0);
  useEffect(() => {
    setH(window.innerHeight);
  }, []);
  if (!h) return null;

  const from = `M100 0 L200 0 L200 ${h} L100 ${h} Q-100 ${h / 2} 100 0`;
  const to = `M100 0 L200 0 L200 ${h} L100 ${h} Q100 ${h / 2} 100 0`;
  return (
    <svg className="absolute -left-[99px] top-0 h-full w-[100px]" style={{ fill: "var(--ink-deep)" }} aria-hidden>
      <motion.path
        initial={{ d: from }}
        animate={{ d: to, transition: { duration: 1, ease: EASE } }}
        exit={{ d: from, transition: { duration: 0.8, ease: EASE } }}
      />
    </svg>
  );
}

function NavLink({ heading, href, index, onNavigate }: { heading: string; href: string; index: number; onNavigate: () => void }) {
  const lenis = useLenis();
  const pathname = usePathname();

  return (
    <motion.div initial="initial" whileHover="hover" className="border-b border-white/15">
      <Link
        href={href}
        onClick={(e) => {
          onNavigate();
          const toContact = href === "/#contact";
          const toHome = href === "/";
          if (pathname === "/" && lenis && (toContact || toHome)) {
            // Sudah di beranda: Home = ke paling atas, Contact = ke paling bawah.
            e.preventDefault();
            lenis.start();
            lenis.scrollTo(toHome ? 0 : lenis.limit);
          } else if (toContact) {
            markContactScroll(); // dari halaman lain: beranda akan turun ke dasar setelah termuat
          }
        }}
        className="flex items-baseline gap-4 py-5 md:py-7"
      >
        <span className="font-mono text-xs text-accent">{String(index).padStart(2, "0")}</span>
        <motion.span
          variants={{ initial: { x: 0 }, hover: { x: -8 } }}
          transition={{ type: "spring", staggerChildren: 0.04 }}
          className="block font-display text-3xl font-semibold uppercase tracking-tight sm:text-4xl md:text-5xl"
        >
          {heading.split("").map((letter, i) => (
            <motion.span key={i} variants={{ initial: { x: 0 }, hover: { x: 8 } }} transition={{ type: "spring" }} className="inline-block">
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </Link>
    </motion.div>
  );
}

export function CurvedMenu() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();

  // Kunci scroll saat menu terbuka; Esc menutup.
  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [open, lenis]);

  const bar = "absolute left-0 block h-[2px] w-7 bg-white transition-transform duration-300";

  return (
    <>
      {/* mix-blend-difference: logo dan tombol otomatis kontras di atas putih maupun charcoal */}
      <header className="fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-20">
          <Link
            href="/"
            onClick={(e) => {
              setOpen(false);
              if (pathname === "/" && lenis) {
                e.preventDefault();
                lenis.start();
                lenis.scrollTo(0);
              }
            }}
            className="flex items-center gap-3 font-display text-xl font-semibold tracking-tight">
            {/* Kotak putih + glyph hitam: dengan mix-blend-difference otomatis terbalik di atas putih/charcoal */}
            <span className="flex size-9 items-center justify-center rounded-xl bg-white text-black">
              <LogoMark className="h-5 w-auto" />
            </span>
            {PROFILE.nickname}
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="relative h-5 w-7 before:absolute before:-inset-3 before:content-['']"
          >
            <span className={`${bar} top-0 ${open ? "translate-y-[9px] rotate-45" : ""}`} />
            <span className={`${bar} top-[9px] ${open ? "opacity-0" : ""}`} />
            <span className={`${bar} top-[18px] ${open ? "-translate-y-[9px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 bg-black/50"
          />
        )}
        {open && (
          <motion.nav
            key="panel"
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
            aria-label="Menu utama"
            className="fixed right-0 top-0 z-40 flex h-[100dvh] w-screen max-w-md flex-col justify-between bg-ink-deep px-8 pb-8 pt-28 text-[#ececec] sm:px-10"
          >
            <div>
              <p className="border-b border-white/15 pb-3 font-mono text-xs uppercase tracking-[0.25em] text-[#ececec]/50">Navigation</p>
              {ITEMS.map((item, i) => (
                <NavLink key={item.href} {...item} index={i + 1} onNavigate={() => setOpen(false)} />
              ))}
            </div>
            <div className="flex justify-between font-mono text-xs uppercase tracking-wider text-[#ececec]/60">
              <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub</a>
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
              <a href={`mailto:${PROFILE.socials.email}`} className="hover:text-accent">Email</a>
            </div>
            <Curve />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
