import { education } from "@/lib/data";
import { Calendar } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-t border-border/40 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-4">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Education
          </span>
        </div>
        <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          Where I studied
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="rounded-xl border border-border/50 bg-white p-6 shadow-xs transition-all hover:shadow-sm"
            >
              <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar size={13} />
                {edu.period}
                {edu.gpa && (
                  <>
                    <span className="text-border/60">·</span>
                    <span>GPA: {edu.gpa}</span>
                  </>
                )}
              </div>

              <h3 className="mb-1 font-semibold text-foreground">
                {edu.degree}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {edu.institution}
              </p>

              <ul className="space-y-1.5">
                {edu.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-muted-foreground pl-4 relative before:absolute before:left-0 before:top-[7px] before:h-1 before:w-1 before:rounded-full before:bg-primary/60"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
