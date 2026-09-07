"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shell, SectionHeader, GapBand } from "@/components/layout/Shell";
import { site } from "@/config/site";
import { ProjectCard } from "./ProjectCard";

export function Projects({ isSearchable = false }: { isSearchable?: boolean }) {
  const [projectTab, setProjectTab] = useState<string>("All");
  const [searchQuery] = useState("");

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
            <div
              className="flex gap-1 rounded-lg p-0.5"
              style={{ border: "1px solid var(--line)", background: "var(--chip)" }}
            >
              {["All", "Frontend", "Backend", "Fullstack"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setProjectTab(tab)}
                  className="flex items-center justify-center text-center rounded-md px-2.5 py-1 text-[11px] font-medium transition-all duration-200 cursor-pointer"
                  style={{
                    background: projectTab === tab ? "var(--fg)" : "transparent",
                    color: projectTab === tab ? "var(--bg)" : "var(--muted)",
                    fontWeight: projectTab === tab ? 600 : 400,
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
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
          <div
            className="py-12 text-center text-[13.5px]"
            style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
          >
            No projects match your current filter.
          </div>
        )}
      </Shell>
      <GapBand />
    </div>
  );
}
