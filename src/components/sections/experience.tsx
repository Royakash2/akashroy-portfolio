import { experience } from "@/lib/data";
import { MapPin, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border/40 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-4">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Experience
          </span>
        </div>
        <h2 className="mb-16 text-3xl font-bold tracking-tight sm:text-4xl">
          Where I&apos;ve worked
        </h2>

        <div className="relative space-y-0">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border/60 hidden md:block" />

          {experience.map((exp, idx) => (
            <div
              key={exp.id}
              className="relative md:pl-12 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-4.5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background hidden md:block" />

              {/* Period badge for mobile */}
              <div className="mb-3 md:hidden">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary/60 px-3 py-1 text-xs text-secondary-foreground">
                  <Calendar size={12} />
                  {exp.period}
                </span>
              </div>

              <div className="rounded-xl border border-border/50 bg-white p-6 shadow-xs transition-all hover:border-border hover:shadow-sm">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <div className="hidden md:flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                </div>

                <p className="my-4 text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <ul className="mb-4 space-y-2">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-sm text-muted-foreground pl-5 relative before:absolute before:left-0 before:top-[7px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/60"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-primary/[0.06] px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
