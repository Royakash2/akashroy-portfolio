import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-border/40 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-4">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Skills
          </span>
        </div>
        <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          Tech stack &amp; tools
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((category) => (
            <div key={category.category}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-border/60 bg-white px-3 py-1.5 text-sm text-foreground shadow-xs transition-colors hover:border-primary/30 hover:bg-primary/[0.04]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
