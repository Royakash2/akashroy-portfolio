"use client";

import { useState, useEffect } from "react";
import { Neko } from "neko-ts";
import { moka } from "neko-ts/breeds";
import { Navbar } from "./Navbar";
import { CommandPalette } from "./CommandPalette";
import { SideIndex } from "./SideIndex";
import { ScrollProgress } from "./ScrollProgress";
import { Footer } from "@/components/footer";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [paletteOpen, setPaletteOpen] = useState(false);

  // ⌘K / Ctrl+K command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);


  useEffect(() => {
    const neko = new Neko({ breed: moka, speed: 10, animationSpeed: 180 });
    return () => neko.destroy();
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <SideIndex />
      <main className="relative z-10">{children}</main>
      <Footer />
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
      />
    </>
  );
}
