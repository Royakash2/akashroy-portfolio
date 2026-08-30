"use client";

import Image from "next/image";
import { Search, MapPin, Eye } from "lucide-react";
import { personalInfo } from "@/lib/data";

// High quality vintage / tech banner image (matching Steve Jobs reference style)
const BANNER_URL =
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80";

const AVATAR_URL =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col space-y-6 pt-2">
      {/* Top Banner */}
      <div className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden border border-border/40 shadow-sm bg-muted">
        <Image
          src={BANNER_URL}
          alt="Header Banner"
          fill
          priority
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>

      {/* Profile Info Row (Matching reference design) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-1">
        {/* Left: Avatar + Title Details */}
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Avatar Box (Rounded Square like reference image) */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-border/80 bg-muted shrink-0 shadow-md">
            <Image
              src={AVATAR_URL}
              alt={personalInfo.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Name & Role & Location metadata */}
          <div className="flex flex-col justify-center">
            {/* Serif Name Header (Matching "Anurag Jha" in image) */}
            <h1 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight text-foreground">
              {personalInfo.name}
            </h1>

            {/* Role Subtitle */}
            <p className="text-xs sm:text-sm font-mono text-muted-foreground mt-0.5">
              {personalInfo.title}
            </p>

            {/* Location & Views metadata */}
            <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground/80 mt-2">
              <span className="inline-flex items-center gap-1">
                <MapPin size={12} className="text-muted-foreground" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Eye size={12} className="text-muted-foreground" />
                15,102 views
              </span>
            </div>
          </div>
        </div>

        {/* Right: Search / Cmd+K Pill Button */}
        <div className="self-start sm:self-end">
          <button
            onClick={() => {}}
            className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/60 backdrop-blur-sm px-3.5 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-border transition-colors shadow-sm"
          >
            <Search size={13} />
            <span>⌘K</span>
          </button>
        </div>
      </div>
    </section>
  );
}
