"use client";

import Link from "next/link";
import { Home, NotebookPen, Briefcase, Pencil, Mail } from "lucide-react";
import { TbBrandX, TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { personalInfo } from "@/lib/data";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const dockItems = [
  { icon: Home, href: "/", label: "Home" },
  { icon: NotebookPen, href: "#about", label: "About" },
  { icon: Briefcase, href: "#experience", label: "Experience" },
  { icon: Pencil, href: "#projects", label: "Projects" },
];

const socialItems = [
  { icon: TbBrandX, href: personalInfo.socials?.twitter || "#", label: "Twitter" },
  { icon: TbBrandGithub, href: personalInfo.socials?.github || "#", label: "GitHub" },
  { icon: TbBrandLinkedin, href: personalInfo.socials?.linkedin || "#", label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function Dock() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur-md px-4 py-2 shadow-lg">
        {dockItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="p-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full transition-colors relative group"
            aria-label={item.label}
          >
            <item.icon size={20} />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {item.label}
            </span>
          </Link>
        ))}
        
        <div className="w-[1px] h-8 bg-border mx-2"></div>

        {socialItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            target="_blank"
            className="p-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full transition-colors relative group"
            aria-label={item.label}
          >
            <item.icon size={20} />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
