"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Shell } from "@/components/layout/Shell";
import { site } from "@/config/site";
import { MapPin, Download, RotateCw } from "lucide-react";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { toast } from "sonner";

const HEADLINE_TITLES = [
  "Full Stack Developer",
  "Next.js & React Expert",
  "Clean Code Focus",
];

export function Hero() {
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
        <div className="relative h-36 overflow-hidden rounded-sm sm:h-44 border border-(--line) bg-(--chip)">
          <Image
            src={site.bannerImage}
            alt="Cover"
            fill
            priority
            className="object-cover object-center opacity-90 transition-opacity duration-300"
          />
          {/* <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_0%,transparent_70%)]" />
          <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_5px)]" />
          <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.12)_0,rgba(0,0,0,0.12)_1px,transparent_1px,transparent_28px)]" /> */}
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
              className="relative grid size-20 shrink-0 place-items-center overflow-hidden rounded-sm shadow-md group cursor-pointer select-none animate-fade-up border border-(--line) bg-(--chip)"
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
                className="absolute inset-0 pointer-events-none rounded-sm overflow-hidden opacity-[0.18] group-hover:opacity-30 transition-opacity bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-size-[100%_4px]"
              >
                <div className="absolute inset-0 h-1 bg-white/20 blur-[1px] animate-scanline" />
              </div>

              {/* Switch image icon */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-1 top-1 rounded-full p-1 transition-all hover:scale-110 opacity-100 z-20 cursor-pointer shadow-sm border border-(--line) bg-(--chip) text-(--muted)"
                aria-label="Switch profile image"
              >
                <RotateCw size={10} strokeWidth={2} />
              </button>
            </div>

            <div>
              <h1
                className="text-3xl sm:text-[38px] leading-none tracking-tight text-glitch font-serif text-(--fg)"
              >
                {site.name}
              </h1>
              <div className="h-5 overflow-hidden mt-1">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={headlineIndex}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-[13px] font-mono text-(--muted)"
                  >
                    {HEADLINE_TITLES[headlineIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
              <p
                className="mt-1 flex items-center justify-center sm:justify-start gap-1 text-[11px] font-mono text-(--soft)"
              >
                <MapPin size={12} className="shrink-0" /> {site.location}
              </p>
            </div>
          </div>

          {/* Resume Download Button */}
          <OutlineButton onClick={() => toast("Resume will be added soon!", { description: "I am currently updating my resume. Check back later.", icon: "📝" })}>
            <Download className="size-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
            <span>Resume</span>
          </OutlineButton>
        </motion.div>
      </Shell>
    </>
  );
}
