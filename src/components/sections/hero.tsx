"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Shell } from "@/components/layout/Shell";
import { site } from "@/config/site";
import { MapPin, Search, RotateCw } from "lucide-react";

const HEADLINE_TITLES = [
  "Full Stack Developer",
  "Next.js & React Expert",
  "Open Source Contributor",
  "Clean Code Advocate",
];

export function Hero({ onOpenPalette }: { onOpenPalette?: () => void }) {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  const handleNextImage = () => {
    const nextIndex = (imgIndex + 1) % site.profileImages.length;
    setImgIndex(nextIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % HEADLINE_TITLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Cover Banner */}
      <Shell className="px-2 pt-2 sm:px-3 sm:pt-3">
        <div
          className="relative h-36 overflow-hidden rounded-xl sm:h-44"
          style={{ border: "1px solid var(--line)", background: "var(--chip)" }}
        >
          <Image
            src={site.bannerImage}
            alt="Cover"
            fill
            priority
            className="object-cover object-center opacity-65 grayscale"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, var(--bg), transparent)",
            }}
          />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 5px)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(0,0,0,0.12) 0, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 28px)",
            }}
          />
        </div>
      </Shell>

      {/* Profile Avatar & Identity */}
      <Shell className="px-6 py-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-6 justify-between"
        >
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-5">
            {/* Avatar */}
            <div
              onClick={handleNextImage}
              className="relative grid size-20 shrink-0 place-items-center overflow-hidden rounded-xl shadow-md group cursor-pointer select-none animate-fade-up"
              style={{ border: "1px solid var(--line)", background: "var(--chip)" }}
              title="Click to change profile image"
            >
              <Image
                src={site.profileImages[imgIndex]}
                alt={site.name}
                fill
                className="object-cover pointer-events-none"
              />

              {/* CRT scanline overlay */}
              <div
                className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden opacity-[0.18] group-hover:opacity-30 transition-opacity"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%)",
                  backgroundSize: "100% 4px",
                }}
              >
                <div className="absolute inset-0 h-1 bg-white/20 blur-[1px] animate-scanline" />
              </div>

              {/* Switch image icon */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-1 top-1 rounded-full p-1 transition-all hover:scale-110 sm:opacity-100 opacity-0 group-hover:opacity-100 z-20 cursor-pointer shadow-sm"
                style={{
                  border: "1px solid var(--line)",
                  background: "var(--chip)",
                  color: "var(--muted)",
                }}
                aria-label="Switch profile image"
              >
                <RotateCw size={10} strokeWidth={2} />
              </button>
            </div>

            <div>
              <h1
                className="text-3xl sm:text-[38px] leading-none tracking-tight text-glitch"
                style={{ fontFamily: "var(--font-serif)", color: "var(--fg)" }}
              >
                {site.name}
              </h1>
              <div className="h-[20px] overflow-hidden mt-1">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={headlineIndex}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-[13px]"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
                  >
                    {HEADLINE_TITLES[headlineIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
              <p
                className="mt-1 flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 text-[11px]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--soft)" }}
              >
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="shrink-0" /> {site.location}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  {site.status.availableText}
                </span>
              </p>
            </div>
          </div>

          {/* Command Palette Keyboard Badge */}
          {onOpenPalette && (
            <button
              onClick={onOpenPalette}
              className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-[11px] transition-all duration-300 shadow-sm cursor-pointer hover:opacity-80"
              style={{
                border: "1px solid var(--line)",
                background: "var(--chip)",
                fontFamily: "var(--font-mono)",
                color: "var(--muted)",
              }}
              title="Open Command Palette (Ctrl+K)"
            >
              <Search size={14} />
              <span>⌘K</span>
            </button>
          )}
        </motion.div>
      </Shell>
    </>
  );
}
