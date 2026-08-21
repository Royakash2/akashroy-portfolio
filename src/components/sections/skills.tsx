import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, 
  SiNodedotjs, SiPython, SiGraphql, SiPostgresql, SiRedis, 
  SiDocker, SiVercel, SiGithubactions, SiLinux, 
  SiCloudflare 
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const skillIcons = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", icon: SiFramer, color: "#bb44f0" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Vercel", icon: SiVercel, color: "currentColor" },
  { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "CloudFlare", icon: SiCloudflare, color: "#F38020" },
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
