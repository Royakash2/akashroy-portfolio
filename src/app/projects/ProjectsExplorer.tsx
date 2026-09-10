"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shell, SectionHeader, GapBand } from "@/components/layout/Shell";
import { Reveal } from "@/components/shared/Reveal";
import { site } from "@/config/site";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";

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
      <SectionHeader
        title="Projects"
        aside={
          <div
            className="flex gap-1 rounded-sm p-0.5"
            style={{ border: "1px solid var(--line)", background: "var(--chip)" }}
          >
            {["All", "Frontend", "Backend", "Fullstack"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setProjectTab(tab)}
                className="flex items-center justify-center text-center rounded-sm px-2.5 py-1 text-[11px] font-medium transition-all duration-200 cursor-pointer"
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
        }
      />
      <Shell className="px-6 py-6 sm:px-8">
        {/* Search Bar */}
        <Reveal>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pb-5" style={{ borderBottom: "1px solid var(--line)" }}>
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2" style={{ color: "var(--soft)" }} />
              <Input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-sm py-2 pl-9 pr-4 text-[12px] md:text-[12px] focus-visible:ring-0 transition-all"
                style={{
                  border: "1px solid var(--line)",
                  background: "var(--chip)",
                  color: "var(--fg)",
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ color: "var(--soft)" }}
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
          <div
            className="py-12 text-center text-[13px]"
            style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
          >
            No projects match your current filter.
          </div>
        )}
      </Shell>
      <GapBand />
    </>
  );
}
