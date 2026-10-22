export interface Profile {
  name: string;
  nickname: string;
  role: string;
  tagline: string;
  location: string;
  status: string;
  heroBio: string;
  bio: string[];
  languages: string[];
  avatarMonochrome: string;
  avatarColor: string;
  socials: { github: string; linkedin: string; email: string; resume: string };
  formEndpoint: string;
}
export interface Skills {
  programming: string[];
  framework: string[];
}
export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  role?: string;
  category: "mobile" | "web" | "game";
  description: string;
  highlights: string[];
  tech: string[];
  images: string[];
  repoUrl: string;
  demoUrl?: string;
}
export interface Certificate {
  id: number;
  number: string;
  title: string;
  issuer: string;
  category: string;
  badge: string;
  date: string;
  certId: string;
  description: string;
  highlights: string[];
  image: string;
  pdfUrl: string;
  verifyUrl: string;
}
export interface SkillGroup {
  label: string;
  items: string[];
}
