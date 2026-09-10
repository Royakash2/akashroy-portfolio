"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shell, SectionHeader, GapBand } from "@/components/layout/Shell";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { site } from "@/config/site";
import type { ComponentType, CSSProperties } from "react";
import {
  Layers,
  Code,
  PanelsTopLeft,
  Server,
  Database,
  Terminal,
  Cpu,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiGatsby,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiPostgresql,
  SiGraphql,
  SiWordpress,
  SiVercel,
  SiGit,
  SiFigma,
} from "react-icons/si";

type IconType = ComponentType<{ className?: string; style?: CSSProperties }>;

const CATEGORY_ICONS: Record<string, IconType> = {
  All: Layers,
  Languages: Code,
  Frontend: PanelsTopLeft,
  Backend: Server,
  Databases: Database,
  Tools: Terminal,
};

const skillIcons: Record<string, { icon: IconType; darkColor?: string; lightColor?: string }> = {
  React: { icon: SiReact, darkColor: "#61DAFB", lightColor: "#087ea4" },
  "Next.js": { icon: SiNextdotjs, darkColor: "#ffffff", lightColor: "#000000" },
  Gatsby: { icon: SiGatsby, darkColor: "#663399", lightColor: "#663399" },
  TypeScript: { icon: SiTypescript, darkColor: "#3178C6", lightColor: "#3178C6" },
  JavaScript: { icon: SiJavascript, darkColor: "#F7DF1E", lightColor: "#b89900" },
  "Tailwind CSS": { icon: SiTailwindcss, darkColor: "#06B6D4", lightColor: "#0891b2" },
  "shadcn/ui": { icon: SiShadcnui, darkColor: "#ffffff", lightColor: "#18181b" },
  "Node.js": { icon: SiNodedotjs, darkColor: "#339933", lightColor: "#2d7a2d" },
  Express: { icon: SiExpress, darkColor: "#ffffff", lightColor: "#333333" },
  PostgreSQL: { icon: SiPostgresql, darkColor: "#4169E1", lightColor: "#4169E1" },
  MongoDB: { icon: SiMongodb, darkColor: "#47A248", lightColor: "#47A248" },
  Prisma: { icon: SiPrisma, darkColor: "#9CA3AF", lightColor: "#52525b" },
  GraphQL: { icon: SiGraphql, darkColor: "#E10098", lightColor: "#E10098" },
  WordPress: { icon: SiWordpress, darkColor: "#21759B", lightColor: "#21759B" },
  Git: { icon: SiGit, darkColor: "#F05032", lightColor: "#F05032" },
  Vercel: { icon: SiVercel, darkColor: "#ffffff", lightColor: "#000000" },
  Figma: { icon: SiFigma, darkColor: "#F24E1E", lightColor: "#F24E1E" },
  "VS Code": { icon: Cpu },
  Cursor: { icon: Cpu },
  Antigravity: { icon: Cpu },
  // Neutral / lucide-style icon — inherits the chip color.
  "REST APIs": { icon: Cpu },
};

function SkillIcon({ skill, hovered }: { skill: string; hovered?: boolean }) {
  const meta = skillIcons[skill];
  const Icon = (meta?.icon ?? Cpu) as IconType;

  // No brand colors — inherit current text color (goes white on hover automatically)
  if (!meta?.darkColor && !meta?.lightColor) {
    return <Icon className="size-4 shrink-0 text-current" aria-hidden />;
  }

  // Keep brand color unless badge is hovered, then inherit (turns white/bg)
  return (
    <span className="flex items-center">
      <Icon
        className="size-4 shrink-0 dark:hidden transition-colors"
        style={{ color: hovered ? "currentColor" : meta.lightColor }}
        aria-hidden
      />
      <Icon
        className="hidden dark:block size-4 shrink-0 transition-colors"
        style={{ color: hovered ? "currentColor" : meta.darkColor }}
        aria-hidden
      />
    </span>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  if (!site.skills.length) return null;

  const categories = ["All", ...Object.keys(site.skillCategories)];

  const filteredSkills =
    activeCategory === "All"
      ? site.skills
      : site.skills.filter((skill) =>
          (site.skillCategories as Record<string, readonly string[]>)[activeCategory]?.includes(skill)
        );

  return (
    <>
      <SectionHeader
        title="Tech Stack"
        id="skills"
        aside={
          <span className="hidden font-mono text-[10px] tracking-wider text-(--soft) sm:inline">
            ( select tab to filter )
          </span>
        }
      />
      <Shell className="px-6 py-6 sm:px-8">
        {/* Category Tabs — shadcn Tabs component */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList
            className="h-auto w-full flex-wrap justify-start gap-1.5 rounded-sm border border-(--line) bg-(--chip) p-1"
          >
            {categories.map((cat) => {
              const TabIcon = CATEGORY_ICONS[cat] ?? Layers;
              return (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="cursor-pointer h-auto rounded-sm px-3 py-1.5 text-[12px] font-medium
                    text-(--muted) hover:bg-(--hover) hover:text-(--fg)
                    data-active:bg-(--fg) data-active:font-semibold data-active:text-(--bg) data-active:shadow-sm
                    data-active:hover:bg-(--fg) data-active:hover:text-(--bg)"
                >
                  <TabIcon className="size-3.5" aria-hidden />
                  {cat}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* All categories share one content panel — filtering is done in JS */}
          {categories.map((cat) => (
            <TabsContent key={cat} value={cat}>
              <motion.div layout className="mt-6 flex flex-wrap gap-2.5">
                <AnimatePresence mode="popLayout">
                  {filteredSkills.map((skill) => (
                    <motion.span
                      key={skill}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <Badge
                        variant="outline"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="flex h-auto w-auto cursor-default items-center gap-2 rounded-sm border-(--line) bg-card px-3 py-1.5 font-mono text-[12px] font-normal text-(--muted) shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-(--fg) hover:bg-(--fg) hover:text-(--bg)"
                      >
                        <SkillIcon skill={skill} hovered={hoveredSkill === skill} />
                        <span>{skill}</span>
                      </Badge>
                    </motion.span>
                  ))}
                </AnimatePresence>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </Shell>
      <GapBand />
    </>
  );
}
