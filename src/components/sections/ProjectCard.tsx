"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/config/site";
import { Globe, ChevronDown, ChevronUp } from "lucide-react";
import { GitHubIcon } from "@/components/icons";

export function ProjectCard({
  project: p,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="group flex flex-col justify-between rounded-xl p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full"
      style={{ border: "1px solid var(--line)", background: "var(--card)" }}
    >
      <div>
        {/* Angled Screenshot Preview Canvas Box */}
        <div
          className="relative mb-4 h-48 w-full overflow-hidden rounded-lg p-3 flex flex-col justify-between"
          style={{
            border: "1px solid var(--line)",
            background: "linear-gradient(135deg, var(--chip), var(--card), color-mix(in srgb, var(--bg) 40%, transparent))",
          }}
        >
          {/* Stripes overlay */}
          <div className="bg-stripes absolute inset-0 opacity-20 pointer-events-none" />

          {/* Viewfinder Reticles (Camera REC / ISO) */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
            {/* Corner brackets */}
            <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l" style={{ borderColor: "rgba(255,255,255,0.7)" }} />
            <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r" style={{ borderColor: "rgba(255,255,255,0.7)" }} />
            <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l" style={{ borderColor: "rgba(255,255,255,0.7)" }} />
            <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r" style={{ borderColor: "rgba(255,255,255,0.7)" }} />

            {/* REC indicator */}
            <div
              className="absolute top-2.5 left-7 flex items-center gap-1 text-[8px] font-semibold"
              style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.8)" }}
            >
              <span className="size-1.5 rounded-full bg-rose-500 animate-pulse" /> REC
            </div>

            {/* ISO indicator */}
            <div
              className="absolute top-2.5 right-7 text-[8px] font-semibold"
              style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.8)" }}
            >
              ISO 400
            </div>
          </div>

          {/* Top Badges Row */}
          <div className="relative z-20 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {p.status ? (
                <span
                  className="rounded px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider backdrop-blur-md"
                  style={{
                    fontFamily: "var(--font-mono)",
                    background: "rgba(245, 158, 11, 0.2)",
                    border: "1px solid rgba(245, 158, 11, 0.4)",
                    color: "#fcd34d",
                  }}
                >
                  • {p.status}
                </span>
              ) : (
                <span
                  className="rounded px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider backdrop-blur-md flex items-center gap-1"
                  style={{
                    fontFamily: "var(--font-mono)",
                    background: "rgba(16, 185, 129, 0.2)",
                    border: "1px solid rgba(16, 185, 129, 0.4)",
                    color: "#6ee7b7",
                  }}
                >
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Live
                </span>
              )}
            </div>

            {p.featured && (
              <span
                className="rounded px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "rgba(245, 158, 11, 0.1)",
                  border: "1px solid rgba(245, 158, 11, 0.3)",
                  color: "#f59e0b",
                }}
              >
                Featured
              </span>
            )}
          </div>

          {/* Angled Screenshot Image */}
          {p.image && !imgError ? (
            <div
              className="absolute -right-6 -bottom-3 w-56 h-32 sm:-right-12 sm:-bottom-5 sm:w-72 sm:h-40 rounded-lg shadow-xl overflow-hidden group-hover:-right-4 group-hover:-bottom-1 sm:group-hover:-right-9 sm:group-hover:-bottom-2 transition-all duration-300 pointer-events-none"
              style={{ border: "4px solid color-mix(in srgb, var(--bg) 40%, transparent)" }}
            >
              <img
                src={p.image}
                alt={`${p.title} preview`}
                className="w-full h-full object-cover object-top"
                onError={() => setImgError(true)}
              />
            </div>
          ) : (
            <div
              className="text-2xl self-end opacity-90"
              style={{ fontFamily: "var(--font-serif)", color: "var(--fg)" }}
            >
              {p.title}
            </div>
          )}
        </div>

        {/* Project Header Info */}
        <div className="flex items-start justify-between gap-2">
          <h3
            className="text-[16px] font-semibold tracking-wide"
            style={{ color: "var(--fg)" }}
          >
            {p.title}
          </h3>
          <span
            className="text-xs"
            style={{ fontFamily: "var(--font-mono)", color: "var(--soft)" }}
          >
            {p.year}
          </span>
        </div>

        <p
          className="mt-2 text-[13px] leading-relaxed line-clamp-4"
          style={{ color: "var(--muted)" }}
        >
          {p.blurb}
        </p>

        {/* Collapsible Details Drawer */}
        {p.story && (
          <div className="mt-3">
            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-1 text-[10px] cursor-pointer outline-none hover:opacity-80 transition-opacity"
              style={{ fontFamily: "var(--font-mono)", color: "var(--soft)" }}
            >
              {showDetails ? "Hide engineering details" : "Show engineering details"}
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
                  <div
                    className="mt-2.5 rounded-lg p-3 text-[12px] leading-relaxed space-y-1.5"
                    style={{
                      border: "1px solid color-mix(in srgb, var(--line) 50%, transparent)",
                      borderLeft: "2px solid var(--soft)",
                      background: "color-mix(in srgb, var(--chip) 60%, transparent)",
                      color: "var(--muted)",
                    }}
                  >
                    {p.story.split("\n\n").map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Tech Pills & Direct Links */}
      <div
        className="mt-4 flex items-center justify-between gap-3 pt-3"
        style={{ borderTop: "1px solid color-mix(in srgb, var(--line) 50%, transparent)" }}
      >
        <div className="flex flex-wrap gap-1.5">
          {p.stack.map((t) => (
            <span
              key={t}
              className="rounded px-2 py-0.5 text-[10.5px]"
              style={{
                fontFamily: "var(--font-mono)",
                background: "var(--chip)",
                color: "var(--muted)",
                border: "1px solid color-mix(in srgb, var(--line) 30%, transparent)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div
          className="flex shrink-0 items-center gap-2.5"
          style={{ color: "var(--soft)" }}
        >
          {p.links.live && (
            <a
              href={p.links.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} live site`}
              className="transition-all duration-200 hover:-translate-y-0.5 hover:opacity-100"
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
              className="transition-all duration-200 hover:-translate-y-0.5 hover:opacity-100"
            >
              <GitHubIcon className="size-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
