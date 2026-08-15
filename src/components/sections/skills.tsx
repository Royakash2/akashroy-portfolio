import { skills } from "@/lib/data";

export default function Skills() {
  const allSkills = skills.flatMap(s => s.items);

  return (
    <section id="skills" className="flex flex-col space-y-4">
      <h2 className="text-xl font-bold tracking-tight">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {allSkills.map((skill, idx) => (
          <span 
            key={idx} 
            className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
