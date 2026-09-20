"use client";

import { Shell, SectionHeader, GapBand } from "@/components/layout/Shell";
import { Reveal } from "@/components/shared/Reveal";
import { Terminal, Lightbulb, Target, BookOpen, Code2, LucideIcon } from "lucide-react";
import { site } from "@/config/site";

const iconMap: Record<string, LucideIcon> = {
  Terminal,
  Code2,
  Lightbulb,
  Target,
  BookOpen,
};

export function Now() {
  return (
    <div id="now">
      <SectionHeader
        title="What I'm up to right now"
      />
      <Shell className="px-6 py-6 sm:px-8">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {site.now.map((item, idx) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={idx}
                  className="flex flex-col gap-2.5 rounded-sm p-4 border border-(--line) bg-[color-mix(in_srgb,var(--chip)_60%,transparent)] transition-colors hover:border-[color-mix(in_srgb,var(--fg)_25%,transparent)]"
                >
                  <div className="flex items-center gap-2 text-[11.5px] font-mono text-(--fg) font-medium">
                    {Icon && <Icon size={14} className="text-(--fg)" />}
                    <span>{`${item.title}`}</span>
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
