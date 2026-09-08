"use client";

import { Shell, SectionHeader, GapBand } from "@/components/layout/Shell";
import { Reveal } from "@/components/shared/Reveal";
import { site } from "@/config/site";
import {
  SiReact,
  SiNextdotjs,
  SiGatsby,
  SiTypescript,
  SiJavascript,
  SiHtml5,
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
} from "react-icons/si";

const skillIcons: Record<
  string,
  {
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    darkColor: string;
    lightColor: string;
  }
> = {
  React: { icon: SiReact, darkColor: "#61DAFB", lightColor: "#087ea4" },
  "Next.js": { icon: SiNextdotjs, darkColor: "#ffffff", lightColor: "#000000" },
  Gatsby: { icon: SiGatsby, darkColor: "#663399", lightColor: "#663399" },
  TypeScript: { icon: SiTypescript, darkColor: "#3178C6", lightColor: "#3178C6" },
  JavaScript: { icon: SiJavascript, darkColor: "#F7DF1E", lightColor: "#b89900" },
  "HTML/CSS": { icon: SiHtml5, darkColor: "#E34F26", lightColor: "#E34F26" },
  "Tailwind CSS": { icon: SiTailwindcss, darkColor: "#06B6D4", lightColor: "#0891b2" },
  "shadcn/ui": { icon: SiShadcnui, darkColor: "#ffffff", lightColor: "#18181b" },
  "Node.js": { icon: SiNodedotjs, darkColor: "#339933", lightColor: "#2d7a2d" },
  Express: { icon: SiExpress, darkColor: "#ffffff", lightColor: "#333333" },
  MongoDB: { icon: SiMongodb, darkColor: "#47A248", lightColor: "#47A248" },
  Prisma: { icon: SiPrisma, darkColor: "#9CA3AF", lightColor: "#52525b" },
  PostgreSQL: { icon: SiPostgresql, darkColor: "#4169E1", lightColor: "#4169E1" },
  GraphQL: { icon: SiGraphql, darkColor: "#E10098", lightColor: "#E10098" },
  WordPress: { icon: SiWordpress, darkColor: "#21759B", lightColor: "#21759B" },
  Vercel: { icon: SiVercel, darkColor: "#ffffff", lightColor: "#000000" },
};

export function Skills() {
  return (
    <>
      <SectionHeader title="Skills" id="skills" />
      <Shell className="px-6 py-6 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {site.skills.map((skill, idx) => {
              const skillData = skillIcons[skill];
              if (!skillData) return null;
              const Icon = skillData.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-medium"
                  style={{
                    background: "var(--chip)",
                    color: "var(--muted)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <Icon
                    className="text-sm dark:hidden"
                    style={{ color: skillData.lightColor }}
                  />
                  <Icon
                    className="text-sm hidden dark:block"
                    style={{ color: skillData.darkColor }}
                  />
                  <span>{skill}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Shell>
      <GapBand />
    </>
  );
}
