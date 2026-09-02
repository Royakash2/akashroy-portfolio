"use client";

import dynamic from "next/dynamic";
import { ExternalLink } from "lucide-react";
import { personalInfo } from "@/lib/data";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

const githubUsername = personalInfo.socials.github.split("/").pop() || "Royakash2";

export default function GithubActivity() {
  return (
    <section id="github-activity" className="flex flex-col space-y-4">
      {/* Header Row (Matching image design) */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight text-foreground">
          GitHub Activity
        </h2>
        <a
          href={personalInfo.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          @{githubUsername}
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Contribution Calendar Container */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 p-5 sm:p-6 shadow-sm flex items-center justify-center overflow-x-auto">
        <div className="w-full flex justify-center min-w-162.5 sm:min-w-0 font-mono text-xs text-muted-foreground">
          <GitHubCalendar
            username={githubUsername}
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            colorScheme="dark"
          />
        </div>
      </div>
    </section>
  );
}
