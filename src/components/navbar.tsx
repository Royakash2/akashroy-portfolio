"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "Home", href: "#hero", active: true },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Works", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-border/80 shadow-xs"
          : "bg-transparent border-border/50"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-5xl items-center justify-between px-6 relative">
        <Link
          href="#"
          className="flex items-center gap-3 text-lg font-semibold tracking-wide text-foreground hover:text-primary transition-colors z-10"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border border-border/50 flex-shrink-0">
            <img 
              src={personalInfo.avatar || "/avatar.jpg"} 
              alt={personalInfo.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="uppercase tracking-widest">{personalInfo.name.split(" ")[0]}</span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm transition-all hover:text-primary relative ${
                link.active ? "text-foreground font-medium" : "text-muted-foreground"
              }`}
            >
              {link.label}
              {link.active && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Resume Button */}
        <div className="hidden md:flex items-center z-10">
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center gap-2 justify-center rounded border border-border/80 px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted active:scale-[0.97]"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors z-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-background border-b border-border/50 px-6 pb-5 pt-2 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm transition-colors py-2 ${
                  link.active ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 justify-center rounded border border-border/80 px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted mt-2"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
