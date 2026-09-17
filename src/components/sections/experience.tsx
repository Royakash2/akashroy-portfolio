"use client";

import { Shell, SectionHeader, GapBand } from "@/components/layout/Shell";
import { Reveal } from "@/components/shared/Reveal";
import { site } from "@/config/site";

export function Experience({ hideHeader = false }: { hideHeader?: boolean } = {}) {
  return (
    <>
      {!hideHeader && <SectionHeader title="Experience" id="experience" />}
      <Shell className="px-6 py-6 sm:px-8">
        <Reveal>
          <div className="flex flex-col divide-y divide-(--line)">
            {site.experience.map((exp, idx) => (
              <div key={idx} className="flex flex-col py-5 first:pt-0 last:pb-0">
                {/* Header row: Role · Company | Period */}
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="font-bold text-sm text-(--fg)">
                      {exp.role}
                    </h3>
                    <span className="text-(--muted) text-[13px] select-none">·</span>
                    <span className="font-semibold text-sm text-(--muted)">
                      {exp.company}
                    </span>
                  </div>
                  <span className="text-[12px] whitespace-nowrap font-mono text-(--muted) shrink-0">
                    {exp.period}
                  </span>
                </div>

                {/* Blurb */}
                {exp.blurb && (
                  <p className="mt-2 text-[13px] leading-relaxed text-(--muted)">
                    {exp.blurb}
                  </p>
                )}

                {/* Highlights */}
                {exp.highlights && (
                  <ul className="mt-3 space-y-1">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-[12px] flex items-start gap-2 font-mono text-(--soft)"
                      >
                        <span className="size-1 rounded-full mt-1.5 shrink-0 opacity-40 bg-(--fg)" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies */}
                {exp.technologies && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.5 text-[10px] rounded font-mono text-(--soft) bg-[color-mix(in_srgb,var(--muted)_10%,transparent)] border border-(--line)"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </Shell>
      <GapBand />
    </>
  );
}
