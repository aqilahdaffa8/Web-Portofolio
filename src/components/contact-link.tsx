"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useLenis } from "lenis/react";

const FLAG = "scroll-to-contact";

/** Dipanggil sebelum pindah dari halaman lain ke beranda, supaya beranda tahu harus turun ke dasar. */
export function markContactScroll() {
  try {
    sessionStorage.setItem(FLAG, "1");
  } catch {
    /* sessionStorage bisa saja diblokir; hash #contact tetap jadi cadangan */
  }
}

/** Contact fixed di belakang halaman, jadi "menuju kontak" = scroll ke dasar halaman. */
export function ContactLink({ className, children }: { className?: string; children: React.ReactNode }) {
  const lenis = useLenis();
  const pathname = usePathname();
  return (
    <Link
      href="/#contact"
      className={className}
      onClick={(e) => {
        if (pathname === "/" && lenis) {
          e.preventDefault();
          lenis.scrollTo(lenis.limit);
        } else {
          markContactScroll();
        }
      }}
    >
      {children}
    </Link>
  );
}

/**
 * Pasang di beranda. Kalau datang dari halaman lain lewat tautan Contact, langsung ke dasar.
 * lenis.resize() wajib dulu: tinggi halaman baru belum tentu sudah dihitung ulang oleh Lenis.
 */
export function HashScroll() {
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    let flagged = false;
    try {
      flagged = sessionStorage.getItem(FLAG) === "1";
    } catch {}
    const stripHash = () => {
      if (window.location.hash === "#contact") {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };
    // Hanya scroll jika datang lewat tautan Contact di dalam situs. Hash di URL TIDAK dipakai sebagai pemicu,
    // kalau tidak, reload halaman akan selalu melompat ke bawah.
    if (!flagged) {
      stripHash();
      return;
    }

    const go = () => {
      lenis.resize();
      lenis.scrollTo(lenis.limit, { immediate: true, force: true });
    };
    const raf = requestAnimationFrame(go);
    const timer = setTimeout(() => {
      go(); // ulangi setelah layout/gambar settle
      stripHash();
      try {
        sessionStorage.removeItem(FLAG);
      } catch {}
    }, 400);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [lenis]);
  return null;
}
