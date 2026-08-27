import { 
  SiReact, SiNextdotjs, SiGatsby, SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiTailwindcss, SiShadcnui, SiNodedotjs, SiExpress, SiMongodb, SiMongoose,
  SiPrisma, SiPostgresql, SiGraphql, SiWordpress, SiElementor, SiVercel
} from "react-icons/si";

const skillIcons = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
  { name: "Gatsby", icon: SiGatsby, color: "#663399" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "shadcn/ui", icon: SiShadcnui, color: "currentColor" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "currentColor" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Mongoose", icon: SiMongoose, color: "#880000" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B" },
  { name: "Elementor", icon: SiElementor, color: "#92003B" },
  { name: "Vercel", icon: SiVercel, color: "currentColor" },
];

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Skills</h2>
      <div className="flex flex-wrap gap-2 sm:gap-2.5">
        {skillIcons.map((skill, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-2 rounded-full bg-zinc-100 dark:bg-[#1c1c1c] px-3.5 py-2 text-xs sm:text-sm font-medium text-zinc-900 dark:text-gray-200 border border-zinc-200 dark:border-white/10"
          >
            <skill.icon 
              className="text-base sm:text-lg" 
              style={{ color: skill.color !== "currentColor" ? skill.color : undefined }} 
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
