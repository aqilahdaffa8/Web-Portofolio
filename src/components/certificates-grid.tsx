import { CertificateCard } from "@/components/certificate-card";
import { CERTIFICATES } from "@/data";

export function CertificatesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {CERTIFICATES.map((c, i) => (
        <CertificateCard key={c.id} c={c} index={i} />
      ))}
    </div>
  );
}
