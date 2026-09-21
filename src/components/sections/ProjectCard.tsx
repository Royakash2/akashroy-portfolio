"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/config/site";
import Image from "next/image";
import { Globe, ChevronDown, ChevronUp } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({
  project: p,
}: {
  project: Project;
  index?: number;
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <Card
      className="group flex flex-col justify-between rounded-sm p-5 h-full border border-(--line) bg-card text-inherit shadow-none ring-0 gap-0"
    >
      <div>
        {/* Angled Screenshot Preview Canvas Box */}
        <div
          className="relative mb-4 h-48 w-full overflow-hidden rounded-sm p-3 flex flex-col justify-between border border-(--line) bg-[linear-gradient(135deg,var(--chip),var(--card),color-mix(in_srgb,var(--bg)_40%,transparent))]"
        >
          {/* Stripes overlay */}
          <div className="bg-stripes absolute inset-0 opacity-20 pointer-events-none" />

          {/* Viewfinder Reticles (Camera REC / ISO) */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
            {/* Corner brackets */}
            <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l opacity-70 border-(--fg)" />
            <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r opacity-70 border-(--fg)" />
            <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l opacity-70 border-(--fg)" />
            <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r opacity-70 border-(--fg)" />

            {/* REC indicator */}
            <div
              className="absolute top-2.5 left-7 flex items-center gap-1 text-[8px] font-semibold opacity-80 font-mono text-(--fg)"
            >
              <span className="size-1.5 rounded-full bg-rose-500 animate-pulse" /> REC
            </div>

            {/* ISO indicator */}
            <div
              className="absolute top-2.5 right-7 text-[8px] font-semibold opacity-80 font-mono text-(--fg)"
            >
              ISO 400
            </div>
          </div>

          {/* Angled Screenshot Image */}
          {p.image && !imgError ? (
            <div
              className="absolute -right-4 -bottom-3 w-72 h-40 sm:-right-12 sm:-bottom-5 sm:w-80 sm:h-40 rounded-sm shadow-xl overflow-hidden group-hover:-right-2 group-hover:-bottom-1 sm:group-hover:-right-9 sm:group-hover:-bottom-2 transition-all duration-300 pointer-events-none border-4 border-[color-mix(in_srgb,var(--bg)_40%,transparent)]"
            >
              <Image
                src={p.image}
                alt={`${p.title} preview`}
                fill
                sizes="(max-width: 640px) 224px, 288px"
                className="object-cover object-top"
                onError={() => setImgError(true)}
              />
            </div>
          ) : (
            <div className="text-2xl self-end opacity-90 font-serif text-(--fg)">
              {p.title}
            </div>
          )}
        </div>

        {/* Project Header Info */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[16px] font-semibold tracking-wide text-(--fg)">
            {p.title}
          </h3>
          <span className="text-xs font-mono text-(--soft)">
            {p.year}
          </span>
        </div>

        <p className="mt-2 text-[13px] leading-relaxed line-clamp-4 text-(--muted)">
          {p.blurb}
        </p>

        {/* Collapsible Details Drawer */}
        {p.story && (
          <div className="mt-3">
            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-1 text-[10px] cursor-pointer outline-none hover:opacity-80 transition-opacity font-mono text-(--soft)"
            >
              {showDetails ? "Hide details" : "Show details"}
              {showDetails ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </button>
            <AnimatePresence initial={false}>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-2.5 rounded-sm border border-l-2 border-[color-mix(in_srgb,var(--line)_50%,transparent)] border-l-(--soft) bg-[color-mix(in_srgb,var(--chip)_60%,transparent)]">
                    <div className="max-h-40 overflow-y-auto p-3 text-[12px] leading-relaxed space-y-1.5 text-(--muted) scrollbar-thin [scrollbar-color:color-mix(in_srgb,var(--fg)_20%,transparent)_transparent]">
                      {p.story.split("\n\n").map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Tech Pills & Direct Links */}
      <div className="mt-4 flex items-center justify-between gap-3 pt-3 border-t border-[color-mix(in_srgb,var(--line)_50%,transparent)]">
        <div className="flex flex-wrap gap-1.5">
          {p.stack.map((t) => (
            <Badge
              key={t}
              variant="outline"
              className="rounded px-2 py-0.5 text-[10.5px] font-mono h-auto font-normal text-(--muted) bg-[color-mix(in_srgb,var(--fg)_8%,transparent)] border border-(--line)"
            >
              {t}
            </Badge>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2.5 text-(--soft)">
          {p.links.live && (
            <a
              href={p.links.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} live site`}
              className="text-(--soft) hover:text-(--fg) transition-all duration-200 hover:-translate-y-0.5"
            >
              <Globe className="size-4" />
            </a>
          )}
          {p.links.source && (
            <a
              href={p.links.source}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} repository`}
              className="text-(--soft) hover:text-(--fg) transition-all duration-200 hover:-translate-y-0.5"
            >
              <GitHubIcon className="size-4" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
