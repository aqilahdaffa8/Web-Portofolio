# Portfolio (Next.js + TypeScript)

## Setup
```bash
npm install next@latest react@latest react-dom@latest gsap motion lenis lucide-react clsx tailwind-merge
npm install -D typescript @types/node @types/react @types/react-dom tailwindcss @tailwindcss/postcss
npm run dev
```
Struktur mengikuti shadcn (`components.json`, alias `@/*`, komponen UI di `src/components/ui`).

## Environment
Buat `.env.local` berisi `NEXT_PUBLIC_SITE_URL=https://domain-kamu.com` agar sitemap dan Open Graph memakai domain asli.
