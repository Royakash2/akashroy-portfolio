"use client";

import Link from "next/link";
import { site } from "@/config/site";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", backgroundColor: "var(--bg)" }}>
      <div className="mx-auto max-w-[760px] px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm" style={{ color: "var(--muted)" }}>
            <span className="inline-flex items-center gap-1.5">
              {site.footerNote}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
