"use client";

import { Shell, SectionHeader, GapBand } from "@/components/layout/Shell";
import { Reveal } from "@/components/shared/Reveal";
import { Terminal, Lightbulb, Target, BookOpen, LucideIcon } from "lucide-react";
import { site } from "@/config/site";

const iconMap: Record<string, LucideIcon> = {
  Terminal,
  Lightbulb,
  Target,
  BookOpen,
};

export function Now() {
  return (
    <div id="now">
      <SectionHeader
        title="What I'm up to right now"
        aside={
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-emerald-500">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
            </span>
            Currently Active
          </div>
        }
      />
      <Shell className="px-6 py-6 sm:px-8">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {site.now.map((item, idx) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={idx}
                  className="flex flex-col gap-2.5 rounded-sm p-4 border border-l-2 border-[color-mix(in_srgb,var(--line)_50%,transparent)] border-l-(--soft) bg-[color-mix(in_srgb,var(--chip)_60%,transparent)]"
                >
                  <div className="flex items-center gap-2 text-[11px] font-mono text-(--soft)">
                    {Icon && <Icon size={14} />}
                    <span>{`// ${item.title}`}</span>
                  </div>
                  <p className="text-[13px] leading-relaxed text-(--muted)">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Shell>
      <GapBand />
    </div>
  );
}
