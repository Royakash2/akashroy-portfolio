import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              Made with <Heart size={13} className="text-primary" />
            </span>
            <span className="text-border/60">|</span>
            <Link
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href={`mailto:${personalInfo.email}`}
              className="hover:text-foreground transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
