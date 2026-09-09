"use client";

import dynamic from "next/dynamic";
import { Shell, SectionHeader, GapBand } from "@/components/layout/Shell";
import { Reveal } from "@/components/shared/Reveal";
import { useTheme } from "@/components/shared/ThemeProvider";
import { site } from "@/config/site";
import { ExternalLink } from "lucide-react";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

export function GithubActivity() {
  const username = site.github.username;
  const { theme } = useTheme();

  return (
    <>
      <SectionHeader
        title="GitHub Activity"
        id="github"
        aside={
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[11px] text-(--muted) hover:text-(--fg) transition-colors"
          >
            <span>@{username}</span>
            <ExternalLink size={12} aria-hidden />
          </a>
        }
      />
      <Shell className="px-6 py-6 sm:px-8">
        <Reveal>
          <div className="w-full overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex w-max min-w-full justify-start md:justify-center py-2">
              <GitHubCalendar
                username={username}
                blockSize={12}
                blockMargin={4}
                fontSize={12}
                colorScheme={theme === "light" ? "light" : "dark"}
              />
            </div>
          </div>
        </Reveal>
      </Shell>
      <GapBand />
    </>
  );
}
