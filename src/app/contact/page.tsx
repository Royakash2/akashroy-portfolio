import Link from "next/link";
import { Shell, SectionHeader } from "@/components/layout/Shell";
import { Reveal } from "@/components/shared/Reveal";
import { LayoutWrapper } from "@/components/shared/LayoutWrapper";
import { site } from "@/config/site";
import { Separator } from "@/components/ui/separator";
import { TbBrandGithub, TbBrandLinkedin, TbBrandX } from "react-icons/tb";
import { Mail } from "lucide-react";

const socials = [
  { icon: TbBrandGithub, href: site.socials.github, label: "GitHub" },
  { icon: TbBrandLinkedin, href: site.socials.linkedin, label: "LinkedIn" },
  { icon: TbBrandX, href: site.socials.twitter, label: "Twitter" },
  { icon: Mail, href: site.socials.email, label: "Email" },
];

export default function ContactPage() {
  return (
    <LayoutWrapper>
      <SectionHeader title="Contact" />
      <Shell className="px-6 py-6 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center text-center space-y-8 pb-24">
            {/* Large heading */}
            <div className="space-y-3">
              <h2
                className="text-3xl sm:text-4xl tracking-tight"
                style={{ fontFamily: "var(--font-serif)", color: "var(--fg)" }}
              >
                Let&apos;s work together
              </h2>
              <p
                className="text-[13px] max-w-sm mx-auto leading-relaxed"
                style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
              >
                Open to freelance work, full-time roles, and cool side projects.
                Drop me a message anytime.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 w-full max-w-xs">
              <Separator className="flex-1 w-auto" />
              <span
                className="text-[11px]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--soft)" }}
              >
                or find me on
              </span>
              <Separator className="flex-1 w-auto" />
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-sm px-4 py-2 text-[12px] transition-all duration-300 hover:opacity-80"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--muted)",
                    border: "1px solid var(--line)",
                    background: "var(--chip)",
                  }}
                >
                  <s.icon size={14} />
                  <span>{s.label}</span>
                </Link>
              ))}
            </div>

            {/* Status */}
            <div
              className="mt-8 p-4 rounded-sm max-w-sm"
              style={{ border: "1px solid var(--line)", background: "var(--chip)" }}
            >
              <p
                className="text-[11px] mb-2"
                style={{ fontFamily: "var(--font-mono)", color: "var(--soft)" }}
              >
                CURRENT STATUS
              </p>
              <p
                className="text-[12px]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--fg)" }}
              >
                {site.status.available
                  ? `✅ ${site.status.availableText}`
                  : "❌ Not available"}
              </p>
            </div>
          </div>
        </Reveal>
      </Shell>
    </LayoutWrapper>
  );
}
