import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";

import { personalInfo } from "@/lib/data";

// Free-to-use landscape banner from Unsplash (nature road, like the reference)
const BANNER_URL =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&auto=format&fit=crop&q=80";

// Free-to-use developer avatar from Unsplash
const AVATAR_URL =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col space-y-5">
      {/* Banner + Avatar */}
      <div className="relative">
        {/* Wide Banner Image */}
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden">
          <Image
            src={BANNER_URL}
            alt="Banner"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Circular Avatar overlapping the banner */}
        <div className="absolute -bottom-10 left-4">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-background shadow-lg">
            <Image
              src={AVATAR_URL}
              alt={personalInfo.name}
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Content — pushed down to clear the avatar */}
      <div className="pt-12 space-y-3">
        {/* Name */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono">
          HI I&apos;M {personalInfo.name.toUpperCase()}&nbsp;👋
        </h1>

        {/* Role */}
        <p className="text-sm sm:text-base font-bold text-foreground font-mono">
          {personalInfo.title}
        </p>

        {/* Bio */}
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-mono max-w-xl">
          Started web dev in 2023. By 2025, I was working professionally —
          then quit after 6 months to go all-in on my own builds. I work with{" "}
          <strong>React, Next.js, JavaScript</strong> and{" "}
          <strong>PostgreSQL</strong>. Now doubling down on the full{" "}
          <strong>MERN stack</strong>.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground font-mono">
          Open to{" "}
          <strong className="text-foreground">freelance projects,</strong>
          {" "}and{" "}
          <strong className="text-foreground">full-time roles</strong>. If
          you&apos;re building something meaningful, I&apos;d love to be a
          part of it.
        </p>



        {/* Buttons: Resume & Contact */}
        <div className="flex items-center gap-4 pt-2 flex-wrap">
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            <Download size={14} />
            Resume
          </a>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-5 py-1.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
