import Link from "next/link";
import { ContactLink } from "@/components/contact-link";
import { PROFILE } from "@/data";

const link = "transition-opacity hover:opacity-60";

/** mix-blend-difference: teks otomatis kontras di atas putih maupun charcoal. */
export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-20">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight">
          {PROFILE.nickname}.
        </Link>
        <div className="flex items-center gap-5 font-mono text-xs uppercase tracking-wider sm:gap-8">
          <Link href="/projects" className={link}>Projects</Link>
          <Link href="/certificates" className={link}>Certificates</Link>
          <ContactLink className={link}>Contact</ContactLink>
        </div>
      </nav>
    </header>
  );
}
