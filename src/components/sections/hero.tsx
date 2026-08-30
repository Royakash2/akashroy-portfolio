"use client";

import Image from "next/image";
import { Download, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Custom cover image from public directory
const BANNER_URL = "/cover-image.jfif";

const AVATAR_URL =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80";

const heroTitles = [
  "Full Stack Developer",
  "Next.js & React Expert",
  "Open Source Contributor",
];

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col space-y-6 pt-2">
      {/* Top Banner */}
      <div className="relative w-full h-40  rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-muted">
        <Image
          src={BANNER_URL}
          alt="Header Banner"
          fill
          priority
          className="object-cover transition-all duration-700"
        />
      </div>

      {/* Profile Info Row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-1">
        {/* Left: Avatar + Title Details */}
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Avatar Box */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-muted shrink-0">
            <Image
              src={AVATAR_URL}
              alt={personalInfo.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Name & Role & Location metadata */}
          <div className="flex flex-col justify-center min-w-0">
            {/* Serif Name Header */}
            <h1 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight text-foreground">
              {personalInfo.name}
            </h1>

            {/* Role Subtitle with Swiper.js Auto-slider */}
            <div className="h-5 sm:h-6 overflow-hidden mt-0.5 w-64 sm:w-72">
              <Swiper
                direction="vertical"
                modules={[Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                className="h-full"
              >
                {heroTitles.map((title, idx) => (
                  <SwiperSlide key={idx} className="flex items-center">
                    <span className="text-xs sm:text-sm font-mono text-muted-foreground truncate">
                      {title}
                    </span>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Location & Status metadata */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground/80 mt-2">
              <span className="inline-flex items-center gap-1">
                <MapPin size={12} className="text-muted-foreground" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {personalInfo.availability || "Available for work"}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Resume Download Button using shadcn Button (Dark in light mode, Light in dark mode) */}
        <div className="self-start sm:self-end">
          <Button
            size="sm"
            className="rounded-md bg-foreground text-background hover:bg-foreground/90 font-medium px-4 py-2"
            render={<a href={personalInfo.resumeUrl} download />}
          >
            <Download className="size-3.5" />
            <span>Resume</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
