"use client";

import dynamic from "next/dynamic";
import { ExternalLink } from "lucide-react";
import { Shell, SectionHeader, GapBand } from "@/components/layout/Shell";
import { Reveal } from "@/components/shared/Reveal";
import { site } from "@/config/site";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

export function GithubActivity() {
  const username = site.github.username;

  return (
    <>
      <SectionHeader title="GitHub" id="github" />
      <Shell className="px-6 py-6 sm:px-8">
        <Reveal>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <span
                className="text-[12px]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
              >
                {site.github.contributionsLastYear} contributions in the last year
              </span>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] hover:opacity-80 transition-opacity"
                style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
              >
                @{username}
                <ExternalLink size={12} />
              </a>
            </div>

            <div
              className="rounded-xl p-4 shadow-sm flex items-center justify-center overflow-x-auto"
              style={{ border: "1px solid var(--line)", background: "var(--chip)" }}
            >
              <div
                className="w-full flex justify-center min-w-162.5 sm:min-w-0 text-xs"
                style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
              >
                <GitHubCalendar
                  username={username}
                  blockSize={12}
                  blockMargin={4}
                  fontSize={12}
                  colorScheme="dark"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Shell>
      <GapBand />
    </>
  );
}
