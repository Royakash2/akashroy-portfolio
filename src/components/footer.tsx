"use client";

import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { site } from "@/config/site";
import { QuoteBand } from "@/components/sections/QuoteBand";

export function Footer() {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        const formatted = now.toLocaleTimeString("en-US", {
          timeZone: site.timezone || "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        setTimeString(formatted);
      } catch {
        setTimeString(
          now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          })
        );
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const locationText = site.location
    ? site.location.split(",").slice(0, 2).join(",").trim()
    : "Bangladesh";

  return (
    <footer className="bg-(--bg)">
      <QuoteBand />
      <div className="h-5 w-full bg-(--bg)" />
      <div className="border-t border-(--line)">
        <div className="mx-auto max-w-190 px-6 py-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            {/* Copyright */}
            <p className="font-mono text-[12px] tracking-wide text-(--soft) sm:text-[13px]">
              &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>

            {/* Location + Time */}
            <div className="flex items-center gap-1.5 font-mono text-[12px] text-(--soft) sm:text-[13px]">
              <MapPin className="size-3.5 shrink-0 text-(--muted)" />
              <span>
                {locationText}
                {timeString && ` · ${timeString}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
