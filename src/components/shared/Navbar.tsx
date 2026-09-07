"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/config/site";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
];

export function Navbar({
  onOpenPalette,
}: {
  onOpenPalette?: () => void;
}) {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md"
      style={{
        borderBottom: "1px solid var(--line)",
        backgroundColor: "color-mix(in srgb, var(--bg) 85%, transparent)",
      }}
    >
      <div className="flex items-center justify-between px-6 py-3 sm:px-8 mx-auto w-full max-w-[760px]">
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="text-xl tracking-wide hover:opacity-80 transition-opacity"
          style={{ fontFamily: "var(--font-serif)", color: "var(--fg)" }}
        >
          {site.firstName}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-5 text-[13px]" style={{ color: "var(--muted)" }}>
          {navLinks.map(({ label, href }) => {
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="group relative transition-colors hover:opacity-100"
              >
                {label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100"
                />
              </Link>
            );
          })}

          {onOpenPalette && (
            <button
              type="button"
              onClick={onOpenPalette}
              aria-label="Search Command Palette"
              className="grid size-7 place-items-center rounded-full transition-all duration-300 hover:opacity-100 cursor-pointer"
              style={{ border: "1px solid var(--line)", color: "var(--muted)" }}
            >
              <Search className="size-3.5" />
            </button>
          )}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid size-7 place-items-center rounded-full transition-all duration-300 hover:rotate-45 hover:opacity-100 cursor-pointer"
            style={{ border: "1px solid var(--line)", color: "var(--muted)" }}
          >
            {dark ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}
          </button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="flex sm:hidden items-center gap-3">
          {onOpenPalette && (
            <button
              type="button"
              onClick={onOpenPalette}
              aria-label="Search Command Palette"
              className="grid size-8 place-items-center rounded-full cursor-pointer"
              style={{ border: "1px solid var(--line)", color: "var(--muted)" }}
            >
              <Search className="size-4" />
            </button>
          )}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid size-8 place-items-center rounded-full cursor-pointer"
            style={{ border: "1px solid var(--line)", color: "var(--muted)" }}
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label="Toggle Mobile Menu"
            className="grid size-8 place-items-center rounded-full cursor-pointer"
            style={{ border: "1px solid var(--line)", color: "var(--muted)" }}
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="sm:hidden absolute top-full left-0 w-full overflow-hidden shadow-lg z-50 bg-stripes"
            style={{
              borderBottom: "1px solid var(--line)",
              backgroundColor: "var(--bg)",
            }}
          >
            <div className="px-6 py-6 space-y-4 flex flex-col text-lg" style={{ background: "var(--bg)", fontFamily: "var(--font-serif)" }}>
              {navLinks.map(({ label, href }) => {
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 pb-2.5 transition-colors"
                    style={{
                      borderBottom: "1px dashed color-mix(in srgb, var(--line) 50%, transparent)",
                      color: "var(--muted)",
                    }}
                  >
                    <span
                      className="size-1.5 rounded-full opacity-0"
                      style={{ background: "var(--fg)" }}
                    />
                    {label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
