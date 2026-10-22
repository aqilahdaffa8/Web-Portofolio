"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/** Menjaga posisi ScrollTrigger tetap sinkron dengan scroll Lenis. */
function SyncScrollTrigger() {
  useLenis(() => ScrollTrigger.update());
  return null;
}

/** Setiap pindah halaman, hitung ulang tinggi halaman di Lenis agar batas scroll tidak basi. */
function RouteSync() {
  const lenis = useLenis();
  const pathname = usePathname();
  useEffect(() => {
    if (!lenis) return;
    const raf = requestAnimationFrame(() => lenis.resize());
    const timer = setTimeout(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    }, 300);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [pathname, lenis]);
  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      <SyncScrollTrigger />
      <RouteSync />
      {children}
    </ReactLenis>
  );
}
