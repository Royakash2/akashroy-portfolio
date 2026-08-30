"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Sun, Moon } from "lucide-react";
import { useTheme } from "@wrksz/themes/client";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-background/90 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left: Serif Logo */}
        <Link
          href="/"
          className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground hover:opacity-90 transition-opacity"
        >
          Akash
        </Link>

        {/* Right Nav Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Navigation Links */}
          <nav className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activeItem === item.name;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveItem(item.name)}
                  className={`transition-colors relative py-1 ${
                    isActive
                      ? "text-foreground font-semibold border-b-2 border-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Icon Buttons */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <button
              onClick={() => {}}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Search"
            >
              <Search size={15} />
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
