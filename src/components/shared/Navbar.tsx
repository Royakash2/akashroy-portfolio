"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/config/site";
import { ThemeToggle, ThemeToggleMobile } from "./ThemeToggle";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { OutlineButton } from "@/components/ui/OutlineButton";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md"
      style={{
        borderBottom: "1px solid var(--line)",
        backgroundColor: "color-mix(in srgb, var(--bg) 85%, transparent)",
      }}
    >
      <div className="relative flex items-center px-6 py-3 sm:px-8 mx-auto w-full max-w-190">

        {/* Logo — left */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="text-2xl tracking-wide hover:opacity-80 transition-opacity shrink-0"
          style={{ fontFamily: "var(--font-dancing-script)", color: "var(--fg)" }}
        >
          {site.firstName}
        </Link>

        {/* Desktop Nav Links — centered absolutely */}
        <nav
          className="hidden sm:flex items-center gap-1 text-[13px] absolute left-1/2 -translate-x-1/2"
          style={{ color: "var(--muted)" }}
        >
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="group relative px-3 py-1.5 rounded-sm transition-colors duration-200 hover:text-(--fg)"
              style={{ color: "var(--muted)" }}
            >
              {label}
              <span className="absolute -bottom-0.5 left-3 right-3 h-px origin-right scale-x-0 bg-current transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Right side — Theme toggle + Let's Talk */}
        <div className="hidden sm:flex items-center gap-2 ml-auto shrink-0">
          <ThemeToggle
            className="grid size-7 place-items-center rounded-full transition-all duration-300 hover:rotate-45 hover:opacity-100 cursor-pointer"
            style={{ border: "1px solid var(--line)", color: "var(--muted)" }}
          />

          <OutlineButton
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let&apos;s talk
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </OutlineButton>
        </div>

        {/* Mobile Trigger */}
        <div className="flex sm:hidden items-center gap-3 ml-auto">
          <ThemeToggleMobile
            className="grid size-8 place-items-center rounded-full cursor-pointer"
            style={{ border: "1px solid var(--line)", color: "var(--muted)" }}
          />
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
            className="sm:hidden absolute top-full left-0 w-full overflow-hidden shadow-lg z-50"
            style={{
              borderBottom: "1px solid var(--line)",
              backgroundColor: "var(--bg)",
            }}
          >
            <div
              className="px-6 py-6 space-y-4 flex flex-col text-lg"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 pb-2.5 transition-colors hover:opacity-100"
                  style={{
                    borderBottom: "1px dashed color-mix(in srgb, var(--line) 50%, transparent)",
                    color: "var(--muted)",
                  }}
                >
                  <span
                    className="size-1.5 rounded-full opacity-40"
                    style={{ background: "var(--fg)" }}
                  />
                  {label}
                </Link>
              ))}

              <div className="pt-1">
                <OutlineButton
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full justify-center"
                >
                  Let&apos;s talk
                  <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </OutlineButton>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
