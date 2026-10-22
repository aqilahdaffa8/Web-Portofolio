import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { CurvedMenu } from "@/components/ui/curved-menu";
import { ScrollProgress } from "@/components/scroll-progress";
import { SmoothScroll } from "@/components/smooth-scroll";
import { PROFILE } from "@/data";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${PROFILE.name} — ${PROFILE.role}`, template: `%s — ${PROFILE.nickname}` },
  description: PROFILE.heroBio,
  openGraph: {
    type: "website",
    title: `${PROFILE.name} — ${PROFILE.role}`,
    description: PROFILE.heroBio,
    images: [{ url: PROFILE.avatarColor, width: 1143, height: 1376 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <SmoothScroll>
          <ScrollProgress />
          <CurvedMenu />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
