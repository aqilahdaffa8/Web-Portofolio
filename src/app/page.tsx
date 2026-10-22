import { HashScroll } from "@/components/contact-link";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Marquee } from "@/components/sections/marquee";
import { Projects } from "@/components/sections/projects";
import { Certificates } from "@/components/sections/certificates";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <HashScroll />
      {/* Hero + blok charcoal berada di satu lapisan (z-10) yang menutupi Contact. */}
      <div className="relative z-10">
        <Hero />
        <div className="relative z-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-ink text-[#ececec]">
          <About />
          <Marquee />
          <Projects />
          <Certificates />
          <Skills />
        </div>
      </div>

      {/* Ruang scroll agar Contact (fixed di belakang) tersingkap penuh; hanya md ke atas. */}
      <div className="hidden h-svh md:block" aria-hidden />
      <Contact />
    </main>
  );
}
