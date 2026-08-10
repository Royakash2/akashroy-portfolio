import { projects } from "@/lib/data";
import { ExternalLink, GitBranch } from "lucide-react";

const featuredProjects = projects.filter((p) => p.featured);

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-border/40 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-4">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Projects
          </span>
        </div>
        <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Things I&apos;ve built
        </h2>
        <p className="mb-12 max-w-lg text-muted-foreground">
          Featured projects that showcase my approach to solving problems with
          code.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col rounded-xl border border-border/50 bg-white shadow-xs transition-all hover:shadow-md hover:border-border"
            >
              {/* Image placeholder */}
              <div className="aspect-video w-full rounded-t-xl bg-gradient-to-br from-primary/[0.04] to-primary/[0.08] flex items-center justify-center overflow-hidden">
                <div className="flex flex-col items-center gap-2 text-muted-foreground/30 transition-transform group-hover:scale-105">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl font-bold text-primary/40">
                      {project.title[0]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-primary/[0.06] px-2 py-0.5 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 border-t border-border/40 pt-4">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-foreground transition-all hover:bg-muted active:scale-[0.97]"
                  >
                    <GitBranch size={13} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.97]"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
