import Link from "next/link";
import { Shell, SectionHeader, GapBand } from "@/components/layout/Shell";
import { Reveal } from "@/components/shared/Reveal";
import { LayoutWrapper } from "@/components/shared/LayoutWrapper";
import { site } from "@/config/site";
import { ExternalLink } from "lucide-react";

export default function WritingPage() {
  return (
    <LayoutWrapper>
      <SectionHeader title="Writing" />
      <Shell className="px-6 py-6 sm:px-8">
        <Reveal>
          <div className="flex flex-col space-y-4">
            {site.writing.map((post, idx) => (
              <Link
                key={idx}
                href={post.url}
                target="_blank"
                className="group flex flex-col gap-2 p-4 rounded-sm transition-all duration-300 hover:shadow-lg"
                style={{ border: "1px solid var(--line)", background: "var(--chip)" }}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3
                    className="font-semibold text-[13px] transition-colors"
                    style={{ color: "var(--fg)" }}
                  >
                    {post.title}
                  </h3>
                  <ExternalLink
                    size={14}
                    className="shrink-0 transition-opacity opacity-50 group-hover:opacity-100"
                    style={{ color: "var(--soft)" }}
                  />
                </div>
                <p
                  className="text-[12px] leading-relaxed line-clamp-2"
                  style={{ color: "var(--muted)" }}
                >
                  {post.summary}
                </p>
                <div
                  className="flex items-center gap-3 text-[10px]"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--soft)" }}
                >
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
        </Reveal>
      </Shell>
      <GapBand />
    </LayoutWrapper>
  );
}
