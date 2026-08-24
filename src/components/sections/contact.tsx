import Link from "next/link";
import { TbBrandGithub, TbBrandLinkedin, TbBrandX } from "react-icons/tb";

import { personalInfo } from "@/lib/data";

const socials = [
  { icon: TbBrandGithub, href: personalInfo.socials?.github || "#", label: "GitHub" },
  { icon: TbBrandLinkedin, href: personalInfo.socials?.linkedin || "#", label: "LinkedIn" },
  { icon: TbBrandX, href: personalInfo.socials?.twitter || "#", label: "Twitter" },
];

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center text-center space-y-8 pb-24 pt-8">

      {/* Contact badge with horizontal lines */}
      <div className="relative w-full flex items-center justify-center">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center">
          <span className="inline-flex items-center rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-5 py-1.5 text-sm font-bold shadow-sm">
            Contact
          </span>
        </div>
      </div>

      {/* Large heading */}
      <div className="space-y-3">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Let&apos;s work together
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
          Open to freelance work, full-time roles, and cool side projects.
          Drop me a message anytime.
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 w-full max-w-xs">
        <div className="flex-1 h-[1px] bg-border" />
        <span className="text-xs text-muted-foreground">or find me on</span>
        <div className="flex-1 h-[1px] bg-border" />
      </div>

      {/* Social links */}
      <div className="flex items-center gap-3">
        {socials.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            target="_blank"
            aria-label={s.label}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-white/10 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-zinc-400 dark:hover:border-white/30 transition-colors"
          >
            <s.icon size={16} />
            {s.label}
          </Link>
        ))}
      </div>

    </section>
  );
}
