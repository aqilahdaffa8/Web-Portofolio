"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { PROFILE } from "@/data";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-ink focus:ring-2 focus:ring-accent/50";

function useSubmit() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(PROFILE.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }
  return { status, setStatus, onSubmit };
}

function Fields({
  status,
  onSubmit,
  firstRef,
}: {
  status: Status;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  firstRef?: React.Ref<HTMLInputElement>;
}) {
  if (status === "success") {
    return <p className="py-10 text-center text-lg">Terima kasih! Pesan kamu sudah terkirim, saya akan segera membalas.</p>;
  }
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input ref={firstRef} name="name" required placeholder="Nama" autoComplete="name" className={field} />
      <input name="email" type="email" required placeholder="Email" autoComplete="email" className={field} />
      <textarea name="message" required rows={4} placeholder="Pesan" className={`${field} resize-none`} />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">Gagal mengirim. Coba lagi, atau kirim lewat email langsung.</p>
      )}
      <button
        disabled={status === "sending"}
        className="w-full rounded-full bg-ink py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-paper transition hover:bg-ink-raised disabled:opacity-60"
      >
        {status === "sending" ? "Mengirim…" : "Kirim"}
      </button>
    </form>
  );
}

/** Desktop (lg+): form langsung tampil di sisi kanan Contact. */
export function InlineContactForm() {
  const { status, onSubmit } = useSubmit();
  return (
    <div className="rounded-3xl border border-ink/10 p-8">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-ink/50">Send a message</p>
      <Fields status={status} onSubmit={onSubmit} />
    </div>
  );
}

/** Mobile: Contact fixed setinggi layar, jadi form dibuka lewat modal agar tidak terpotong. */
export function ContactForm() {
  const [open, setOpen] = useState(false);
  const { status, setStatus, onSubmit } = useSubmit();
  const first = useRef<HTMLInputElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!open) return;
    // Kunci scroll halaman di belakang modal (Lenis + scroll native HP)
    lenis?.stop();
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    // Autofokus hanya di perangkat dengan mouse; di HP keyboard tidak langsung menutupi form
    if (window.matchMedia("(hover: hover)").matches) first.current?.focus();
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, lenis]);

  return (
    <>
      <button
        onClick={() => { setStatus("idle"); setOpen(true); }}
        className="rounded-full bg-ink px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-paper transition hover:bg-ink-raised"
      >
        Send a message
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            data-lenis-prevent
            role="dialog"
            aria-modal="true"
            aria-label="Kirim pesan"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.target === e.currentTarget && setOpen(false)}
            className="fixed inset-0 z-[90] flex items-end justify-center overflow-y-auto overscroll-contain bg-ink-deep/90 p-4 sm:items-center"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="my-auto w-full max-w-lg rounded-3xl bg-paper p-6 text-ink shadow-2xl sm:p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <h3 className="font-display text-3xl font-semibold tracking-tight">Say hello.</h3>
                <button onClick={() => setOpen(false)} aria-label="Tutup" className="font-mono text-xl leading-none text-ink/50 hover:text-ink">×</button>
              </div>
              <Fields status={status} onSubmit={onSubmit} firstRef={first} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
