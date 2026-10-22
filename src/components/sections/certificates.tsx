import Link from "next/link";
import { CertificateCard } from "@/components/certificate-card";
import { SectionHeading } from "@/components/section-heading";
import { CERTIFICATES } from "@/data";

export function Certificates() {
  return (
    <section id="certificates" className="px-6 py-20 sm:px-10 md:py-28 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="03" label="Certificates">
          Belajar terus, dengan bukti resmi.
        </SectionHeading>
        <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:-mx-10 sm:px-10 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {CERTIFICATES.slice(0, 3).map((c, i) => (
            <div key={c.id} className="w-[80%] shrink-0 snap-center sm:w-[55%] md:w-auto">
              <CertificateCard c={c} index={i} />
            </div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Link href="/certificates" className="rounded-full border border-white/20 px-7 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-[#ececec] transition hover:border-accent hover:text-accent">
            View all certificates →
          </Link>
        </div>
      </div>
    </section>
  );
}
