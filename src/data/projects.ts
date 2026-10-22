import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "smart-budget",
    number: "01",
    title: "Smart Budget",
    subtitle: "Personal Finance & Expense Tracker",
    role: "Lead Mobile Developer",
    category: "mobile",
    description:
      "Aplikasi pencatatan keuangan modern berbasis Flutter untuk membantu pengguna melacak arus kas harian, kategorisasi pengeluaran, visualisasi grafik pengeluaran, dan manajemen sinkronisasi data cloud.",
    highlights: [
      "Real-time expense & income recording with category tagging",
      "Interactive analytics chart and spending distribution visualizer",
      "Cloud synchronization and real-time database with Firebase",
      "Clean UI/UX flow with intuitive transaction inputs"
    ],
    tech: ["Flutter", "Dart", "Firebase", "Clean Architecture"],
    images: [
      "/images/projects/smartbudget0.jpeg",
      "/images/projects/smartbudget1.jpeg",
      "/images/projects/smartbudget2.jpeg",
      "/images/projects/smartbudget3.jpeg",
      "/images/projects/smartbudget4.jpeg",
      "/images/projects/smartbudget5.jpeg",
      "/images/projects/smartbudget6.jpeg",
      "/images/projects/smartbudget7.jpeg"
    ],
    repoUrl: "https://github.com/aqilahdaffa8/smart_budget"
  },
  {
    id: "quickpos",
    number: "02",
    title: "QuickPOS",
    subtitle: "Offline-First Point of Sale & Receipt Engine",
    role: "Mobile Software Engineer",
    category: "mobile",
    description:
      "Sistem Point of Sale (POS) offline-first yang andal untuk UMKM. Mendukung transaksi kasir cepat, manajemen stok produk dinamis, kalkulasi omset, serta pencetakan struk digital (PDF) dan printer thermal Bluetooth.",
    highlights: [
      "Offline-first local relational database powered by SQLite",
      "Bluetooth thermal printer integration with ESC/POS formatting",
      "Automated PDF digital receipt generation and export",
      "Dynamic revenue and sales turnover reporting dashboards"
    ],
    tech: ["Flutter", "Dart", "SQLite", "Provider", "ESC/POS"],
    images: [
      "/images/projects/quickpos1.jpeg",
      "/images/projects/quickpos2.jpeg",
      "/images/projects/quickpos3.jpeg",
      "/images/projects/quickpos4.jpeg",
      "/images/projects/quickpos5.jpeg",
      "/images/projects/quickpos6.jpeg",
      "/images/projects/quickpos7.jpeg",
      "/images/projects/quickpos8.jpeg"
    ],
    repoUrl: "https://github.com/aqilahdaffa8/quickpos"
  },
  {
    id: "catatan-ai",
    number: "03",
    title: "Catatan AI",
    subtitle: "AI-Powered Smart Note & Summarizer",
    role: "Mobile Developer & AI Integrator",
    category: "mobile",
    description:
      "Aplikasi produktivitas berbasis Flutter yang mengintegrasikan kecerdasan buatan (Gen AI) untuk meringkas catatan panjang secara instan, mengekstrak poin penting, dan menyimpan data secara lokal berkecepatan tinggi.",
    highlights: [
      "Intelligent text summarization & key points extraction via AI API",
      "High-performance local key-value persistence with Hive",
      "Categorized markdown note editor with search & filter",
      "Instant response streaming and resilient error handling"
    ],
    tech: ["Flutter", "Dart", "Hive", "Gen AI API", "Markdown"],
    images: [
      "/images/projects/catatan-ai-4.jpg",
      "/images/projects/catatan-ai-1.jpg",
      "/images/projects/catatan-ai-2.jpg",
      "/images/projects/catatan-ai-3.jpg"
    ],
    repoUrl: "https://github.com/aqilahdaffa8/Catatan_AI"
  },
  {
    id: "creart",
    number: "04",
    title: "CreArt — Creative Agency",
    subtitle: "Modern Agency Landing & Showcase Platform",
    role: "Fullstack Web Developer",
    category: "web",
    description:
      "Website Company Profile berkinerja tinggi untuk agensi kreatif digital. Dibangun dengan Next.js 15 App Router, tipografi kontemporer, animasi scroll interaktif dengan Framer Motion, dan desain responsif optimal.",
    highlights: [
      "Next.js 15 App Router & Server Components for fast load times",
      "Smooth fluid motion & scroll animations via Framer Motion",
      "Modern dark aesthetic with Tailwind CSS and glassmorphism",
      "Fully responsive layout audited for high performance"
    ],
    tech: [
      "Next.js 15",
      "React 18",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion"
    ],
    images: ["/images/projects/creart1.png"],
    repoUrl: "https://github.com/aqilahdaffa8/CreArt_ComponyProfile",
    demoUrl: "https://creart-componyprofile.vercel.app/"
  },
  {
    id: "cinemax",
    number: "05",
    title: "Cinemax",
    subtitle: "Movie Discovery & TMDb Catalog",
    role: "Mobile Developer",
    category: "mobile",
    description:
      "Aplikasi penjelajah film yang terhubung dengan TMDB REST API untuk menelusuri katalog sinema terkini, melihat trailer, ulasan, daftar pemeran, dan menyimpan daftar film favorit pengguna.",
    highlights: [
      "RESTful API integration with TMDB for trending & search feeds",
      "Local bookmarking and favorite movie storage with SharedPreferences",
      "Detailed film metadata, genres, ratings, and cast members",
      "Smooth cached network image rendering with shimmer placeholders"
    ],
    tech: ["Flutter", "Dart", "TMDB API", "SharedPreferences", "HTTP"],
    images: [
      "/images/projects/cinemax0.jpeg",
      "/images/projects/cinemax1.jpeg",
      "/images/projects/cinemax2.jpeg",
      "/images/projects/cinemax3.jpeg",
      "/images/projects/cinemax4.jpeg",
      "/images/projects/cinemax5.jpeg"
    ],
    repoUrl: "https://github.com/aqilahdaffa8/movie_explorer"
  },
  {
    id: "Stickman",
    number: "06",
    title: "Stickman Arena — 2D Combat Platformer",
    subtitle: "Fast-Paced 2D Arena Shooter & Wave Survival Game",
    role: "Game Developer & Frontend Engineer",
    category: "web",
    description:
      "Game 2D action yang dilengkapi custom 2D physics engine, sistem parkour dan jump pad bertingkat, animasi karakter prosedural, mekanika tembak-menembak proyektil balistik, serta gelombang musuh adaptif berbasis state machine.",
    highlights: [
      "Custom 2D Physics Engine with coyote time, double jump, jump-through ledges, and calibrated jump pads",
      "Procedural stickman rendering and weapon aiming with real-time inverse kinematics on HTML5 Canvas",
      "Dynamic combat system featuring melee weapons, firearms, grenades, hit reactions, and screen shake",
      "Finite state machine (FSM) enemy AI with distinct enemy classes, pathfinding, and wave progression",
    ],
    tech: [
      "React",
      "TypeScript",
      "HTML5 Canvas API",
      "Web Audio API",
      "Tailwind CSS",
      "Google AI"
    ],
    images: ["/images/projects/stickman1.png"],
    repoUrl: "http://github.com/aqilahdaffa8/Game-Stickman",
    demoUrl: "https://game-stickman.vercel.app/"
  },
];
