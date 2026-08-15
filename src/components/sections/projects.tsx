import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { TbBrandGithub } from "react-icons/tb";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col space-y-4">
      <div className="flex flex-col items-center justify-center space-y-2 text-center mb-4">
        <span className="inline-flex items-center rounded-md bg-foreground px-3 py-1 text-sm font-semibold text-background">
          My Projects
        </span>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2>
        <p className="max-w-[600px] text-muted-foreground text-sm sm:text-base">
          I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col border border-border/50 rounded-xl overflow-hidden bg-card/50 transition-all hover:bg-card hover:shadow-md">
            <Link href={project.liveUrl || project.repoUrl || "#"} className="relative w-full h-48 sm:h-56 overflow-hidden">
              <Image 
                src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform hover:scale-105" 
              />
            </Link>
            <div className="flex flex-col p-4 flex-1">
              <div className="flex flex-col space-y-1 mb-2">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <span className="text-xs text-muted-foreground font-mono">{project.period || "Jan 2023 - Present"}</span>
              </div>
              <div className="prose prose-sm dark:prose-invert text-muted-foreground mb-4 flex-1 line-clamp-3">
                {project.description}
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-md bg-secondary px-1.5 py-0.5 text-[10px] font-semibold text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                {project.liveUrl && (
                  <Link href={project.liveUrl} target="_blank" className="inline-flex items-center justify-center gap-1.5 rounded-md bg-foreground px-2.5 py-1 text-xs font-semibold text-background transition-colors hover:bg-foreground/90">
                    <Globe size={12} /> Website
                  </Link>
                )}
                {project.repoUrl && (
                  <Link href={project.repoUrl} target="_blank" className="inline-flex items-center justify-center gap-1.5 rounded-md bg-foreground px-2.5 py-1 text-xs font-semibold text-background transition-colors hover:bg-foreground/90">
                    <TbBrandGithub size={12} /> Source
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
