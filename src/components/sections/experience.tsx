"use client";

import Image from "next/image";
import { Shell, SectionHeader, GapBand } from "@/components/layout/Shell";
import { Reveal } from "@/components/shared/Reveal";
import { site } from "@/config/site";

export function Experience() {
  return (
    <>
      <SectionHeader title="Experience" id="experience" />
      <Shell className="px-6 py-6 sm:px-8">
        <Reveal>
          <div className="flex flex-col space-y-6">
            {site.experience.map((exp, idx) => (
              <div key={idx} className="flex gap-4">
                <div
                  className="mt-1 relative w-10 h-10 shrink-0 overflow-hidden rounded-full shadow-sm"
                  style={{ border: "1px solid var(--line)" }}
                >
                  {exp.logo ? (
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-xs"
                      style={{ background: "var(--chip)", fontFamily: "var(--font-mono)", color: "var(--muted)" }}
                    >
                      {exp.company[0]}
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-sm" style={{ color: "var(--fg)" }}>
                      {exp.company}
                    </h3>
                    <span
                      className="text-[11px] whitespace-nowrap"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <div
                    className="text-[12px] mb-2"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
                  >
                    {exp.role}
                  </div>
                  {exp.blurb && (
                    <p className="text-[12px] leading-relaxed" style={{ color: "var(--muted)" }}>
                      {exp.blurb}
                    </p>
                  )}
                  {exp.highlights && (
                    <ul className="mt-2 space-y-1">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-[11px] flex items-start gap-2"
                          style={{ fontFamily: "var(--font-mono)", color: "var(--soft)" }}
                        >
                          <span
                            className="size-1 rounded-full mt-1.5 shrink-0 opacity-40"
                            style={{ background: "var(--fg)" }}
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-1.5 py-0.5 text-[9px] rounded"
                          style={{
                            fontFamily: "var(--font-mono)",
                            color: "var(--soft)",
                            background: "color-mix(in srgb, var(--muted) 10%, transparent)",
                            border: "1px solid var(--line)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Shell>
      <GapBand />
    </>
  );
}
