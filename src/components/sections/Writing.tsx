"use client";

import Link from "next/link";
import { Shell, SectionHeader, GapBand } from "@/components/layout/Shell";
import { Reveal } from "@/components/shared/Reveal";
import { site } from "@/config/site";
import { ExternalLink } from "lucide-react";

export function Writing({ limit }: { limit?: number }) {
  const posts = limit ? site.writing.slice(0, limit) : site.writing;

  return (
    <>
      <SectionHeader title="Writing" id="writing" />
      <Shell className="px-6 py-6 sm:px-8">
        <Reveal>
          <div className="flex flex-col space-y-4">
            {posts.map((post, idx) => (
              <Link
                key={idx}
                href={post.url}
                target="_blank"
                className="group flex flex-col gap-2 p-4 rounded-sm transition-all duration-300 hover:shadow-lg border border-(--line) bg-(--chip)"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-[13px] transition-colors text-(--fg)">
                    {post.title}
                  </h3>
                  <ExternalLink
                    size={14}
                    className="shrink-0 transition-opacity opacity-50 group-hover:opacity-100 text-(--soft)"
                  />
                </div>
                <p className="text-[12px] leading-relaxed line-clamp-2 text-(--muted)">
                  {post.summary}
                </p>
                <div className="flex items-center gap-3 text-[10px] font-mono text-(--soft)">
                  <span>{post.date}</span>
                  {post.readingTime && (
                    <>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </>
                  )}
                </div>
              </Link>
            ))}
          </div>
          {limit && site.writing.length > limit && (
            <div className="mt-4 text-center">
              <Link
                href="/writing"
                className="text-[11px] hover:opacity-80 transition-opacity font-mono text-(--muted)"
              >
                Read all articles →
              </Link>
            </div>
          )}
        </Reveal>
      </Shell>
      <GapBand />
    </>
  );
}
