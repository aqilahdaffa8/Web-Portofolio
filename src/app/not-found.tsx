import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center text-[#ececec]">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">404</p>
      <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl">Halaman tidak ditemukan.</h1>
      <Link href="/" className="mt-10 rounded-full bg-accent px-7 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-ink hover:brightness-110">
        Kembali ke beranda
      </Link>
    </main>
  );
}
