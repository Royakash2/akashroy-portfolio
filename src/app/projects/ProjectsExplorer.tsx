"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shell, PageHero, GapBand } from "@/components/layout/Shell";
import { Reveal } from "@/components/shared/Reveal";
import { site } from "@/config/site";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { FilterTabs } from "@/components/shared/FilterTabs";

const PROJECT_TABS = ["All", "Frontend", "Backend", "Fullstack"] as const;

export function ProjectsExplorer() {
  const [projectTab, setProjectTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const displayedProjects = useMemo(() => {
    return site.projects.filter((p) => {
      if (projectTab === "Frontend" && !p.categories?.includes("Frontend")) return false;
      if (projectTab === "Backend" && !p.categories?.includes("Backend")) return false;
      if (projectTab === "Fullstack" && !p.categories?.includes("Fullstack")) return false;

      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.blurb.toLowerCase().includes(q) ||
          p.stack.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [projectTab, searchQuery]);

  return (
    <>
      <PageHero
        subtitle="02 / PORTFOLIO"
        title="Projects & Works"
        description="A collection of web applications, open-source tools, and experiments I've built along my engineering journey."
        aside={
          <FilterTabs
            tabs={PROJECT_TABS}
            value={projectTab}
            onValueChange={setProjectTab}
            size="sm"
          />
        }
      />
      <Shell className="px-6 py-6 sm:px-8">
        {/* Search Bar */}
        <Reveal>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pb-5 border-b border-(--line)">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-(--soft)" />
              <Input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-sm py-2 pl-9 pr-4 text-[12px] md:text-[12px] focus-visible:ring-0 transition-all border border-(--line) bg-(--chip) text-(--fg)"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-(--soft)"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          <AnimatePresence>
            {displayedProjects.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <ProjectCard project={p} index={idx} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {displayedProjects.length === 0 && (
          <div className="py-12 text-center text-[13px] font-mono text-(--muted)">
            No projects match your current filter.
          </div>
        )}
      </Shell>
      <GapBand />
    </>
  );
}
