"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Globe, ChevronDown } from "lucide-react";
import { TbBrandGithub } from "react-icons/tb";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Frontend", "Backend", "Fullstack"];

  return (
    <section id="projects" className="py-12 flex flex-col space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-b border-border/40 pb-6">
        <h2 className="text-4xl sm:text-5xl font-serif text-[#1e3a8a] dark:text-[#93c5fd] tracking-tight">
          Projects
        </h2>
        <div className="flex items-center p-1 bg-muted/40 rounded-lg border border-border/60">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all ${
                filter === f
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col p-4 sm:p-5 rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:border-foreground/30 hover:shadow-xl dark:hover:border-foreground/50"
          >
            {/* Image Container */}
            <Link
              href={project.liveUrl || project.repoUrl || "#"}
              className="relative w-full h-[220px] rounded-xl overflow-hidden border border-border/40 bg-muted/20"
            >
              <Image
                src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2">
                {project.liveUrl ? (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-50/90 dark:bg-green-950/90 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800 text-[10px] font-bold tracking-wider backdrop-blur-sm uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Live
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50/90 dark:bg-amber-950/90 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 text-[10px] font-bold tracking-wider backdrop-blur-sm uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    In Progress
                  </span>
                )}
              </div>
              {project.featured && (
                <div className="absolute top-3 right-3">
                  <span className="flex items-center px-2.5 py-1 rounded-md bg-orange-50/90 dark:bg-orange-950/90 text-orange-500 dark:text-orange-400 border border-orange-200 dark:border-orange-800 text-[10px] font-bold tracking-wider backdrop-blur-sm uppercase">
                    Featured
                  </span>
                </div>
              )}
            </Link>

            {/* Content */}
            <div className="flex flex-col flex-1 mt-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="text-sm text-muted-foreground font-mono">
                  {project.period || "2024"}
                </span>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              <button className="text-xs text-muted-foreground hover:text-foreground font-medium flex items-center gap-1 mb-5 transition-colors w-fit">
                Show engineering details <ChevronDown size={14} />
              </button>

              <hr className="border-border/60 mb-5" />

              <div className="flex items-end justify-between mt-auto gap-4">
                <div className="flex flex-wrap gap-2 flex-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[11px] font-medium text-muted-foreground bg-muted/40 border border-border/60 rounded-md whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-muted-foreground pb-1">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="hover:text-foreground transition-colors"
                    >
                      <Globe size={18} strokeWidth={2} />
                    </Link>
                  )}
                  {project.repoUrl && (
                    <Link
                      href={project.repoUrl}
                      target="_blank"
                      className="hover:text-foreground transition-colors"
                    >
                      <TbBrandGithub size={20} strokeWidth={2} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
