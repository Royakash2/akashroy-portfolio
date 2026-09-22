"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shell, SectionHeader, GapBand } from "@/components/layout/Shell";
import { site } from "@/config/site";
import { ProjectCard } from "./ProjectCard";
import { FilterTabs } from "@/components/shared/FilterTabs";

const PROJECT_TABS = ["All", "Frontend", "Backend", "Fullstack"] as const;

export function Projects({ isSearchable = false }: { isSearchable?: boolean }) {
  const [projectTab, setProjectTab] = useState<string>("All");

  const displayedProjects = useMemo(() => {
    return site.projects.filter((p) => {
      if (projectTab === "Frontend" && !p.categories?.includes("Frontend")) return false;
      if (projectTab === "Backend" && !p.categories?.includes("Backend")) return false;
      if (projectTab === "Fullstack" && !p.categories?.includes("Fullstack")) return false;
      return true;
    });
  }, [projectTab]);

  return (
    <div id="projects">
      <SectionHeader
        title="Projects"
        aside={
          !isSearchable ? (
            <FilterTabs
              tabs={PROJECT_TABS}
              value={projectTab}
              onValueChange={setProjectTab}
              size="md"
            />
          ) : undefined
        }
      />
      <Shell className="px-6 py-6 sm:px-8">
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
          <div className="py-12 text-center text-[13.5px] font-mono text-(--muted)">
            No projects match your current filter.
          </div>
        )}
      </Shell>
      <GapBand />
    </div>
  );
}
