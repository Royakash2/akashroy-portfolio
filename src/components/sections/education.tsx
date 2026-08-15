import { education } from "@/lib/data";
import Image from "next/image";

export default function Education() {
  return (
    <section id="education" className="flex flex-col space-y-4">
      <h2 className="text-xl font-bold tracking-tight">Education</h2>
      <div className="flex flex-col space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="flex gap-4">
            <div className="mt-1 relative w-10 h-10 flex-shrink-0 overflow-hidden rounded-full border border-border shadow-sm">
              <Image 
                src={edu.logo || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=100&fit=crop"} 
                alt={edu.institution} 
                fill
                className="object-cover" 
              />
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-foreground text-sm sm:text-base">{edu.institution}</h3>
                <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">{edu.period}</span>
              </div>
              <div className="text-sm text-muted-foreground">{edu.degree}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
