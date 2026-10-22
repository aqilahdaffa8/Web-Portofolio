import type { Metadata } from "next";
import Link from "next/link";
import { CertificatesGrid } from "@/components/certificates-grid";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Certificates" };

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-ink px-6 pb-24 pt-32 text-[#ececec] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="mb-10 inline-block font-mono text-xs uppercase tracking-wider text-[#ececec]/50 hover:text-accent">← Home</Link>
        <SectionHeading index="03" label="Certificates">Semua sertifikat.</SectionHeading>
        <CertificatesGrid />
      </div>
    </main>
  );
}
