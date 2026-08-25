import { experience } from "@/lib/data";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col space-y-4">
      <h2 className="text-xl font-bold tracking-tight">Work Experience</h2>
      <div className="flex flex-col space-y-6">
        {experience.map((exp) => (
          <div key={exp.id} className="flex gap-4">
            <div className="mt-1 relative w-10 h-10 shrink-0 overflow-hidden rounded-full border border-border shadow-sm">
              <Image 
                src={exp.logo || "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop"} 
                alt={exp.company} 
                fill
                className="object-cover" 
              />
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-foreground text-sm sm:text-base">{exp.company}</h3>
                <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
              </div>
              <div className="text-sm text-muted-foreground mb-2">{exp.role}</div>
              {exp.description && (
                <p className="text-sm text-muted-foreground mt-1 mb-2">
                  {exp.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
