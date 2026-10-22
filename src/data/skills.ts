import type { SkillGroup, Skills } from "@/types";

export const SKILLS: Skills = {
  programming: ["Dart", "Kotlin", "Blade","TypeScript", "JavaScript", "PHP"],
  framework: ["Flutter", "Laravel", "Next.js", "React", "Tailwind CSS", "Firebase", "Supabase", "SQLite", "Hive", "Git & GitHub", "REST API"]
};


export const SKILL_GROUPS: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "PHP"] },
  { label: "Mobile", items: ["Flutter", "Dart", "Kotlin"] },
  { label: "Web & backend", items: ["Laravel", "Blade", "Next.js", "React", "Tailwind CSS"] },
  { label: "Data", items: ["Firebase", "Supabase", "SQLite", "Hive"] },
  { label: "Tools", items: ["Git & GitHub", "REST API"] },
];
