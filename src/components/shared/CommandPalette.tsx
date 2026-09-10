"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/config/site";
import { useTheme } from "./ThemeProvider";
import { Input } from "@/components/ui/input";
import {
  Search,
  Compass,
  Globe,
  Copy,
  Check,
  Moon,
  Sun,
  ExternalLink,
  BookOpen,
  Mail,
} from "lucide-react";

interface PaletteItem {
  id: string;
  category: "navigation" | "projects" | "actions";
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  action: () => void;
}

export function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1000);
  };

  const items: PaletteItem[] = [
    {
      id: "nav-home",
      category: "navigation",
      title: "Go to Home",
      subtitle: "Overview, highlights, and recent code",
      icon: <Compass size={16} />,
      action: () => { router.push("/"); onClose(); },
    },
    {
      id: "nav-projects",
      category: "navigation",
      title: "Go to Projects",
      subtitle: "Browse all projects & live demos",
      icon: <Globe size={16} />,
      action: () => { router.push("/projects"); onClose(); },
    },
    {
      id: "nav-writing",
      category: "navigation",
      title: "Go to Writing",
      subtitle: "Technical articles & blog posts",
      icon: <BookOpen size={16} />,
      action: () => { router.push("/writing"); onClose(); },
    },
    {
      id: "nav-contact",
      category: "navigation",
      title: "Go to Contact",
      subtitle: "Social links, email, and contact form",
      icon: <Mail size={16} />,
      action: () => { router.push("/contact"); onClose(); },
    },
    ...site.projects.map((p) => ({
      id: `project-${p.title.toLowerCase()}`,
      category: "projects" as const,
      title: `View ${p.title}`,
      subtitle: p.blurb,
      icon: <Globe size={16} />,
      action: () => { router.push("/projects"); onClose(); },
    })),
    {
      id: "action-theme",
      category: "actions",
      title: theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme",
      subtitle: theme === "dark" ? "Go light mode" : "Go dark mode",
      icon: theme === "dark" ? <Sun size={16} /> : <Moon size={16} />,
      action: () => { toggleTheme(); onClose(); },
    },
    {
      id: "action-copy-email",
      category: "actions",
      title: copied ? "Copied!" : "Copy Email Address",
      subtitle: site.email,
      icon: copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />,
      action: handleCopyEmail,
    },
  ];

  const filteredItems = items.filter((item) => {
    const term = query.toLowerCase().trim();
    if (!term) return true;
    return (
      item.title.toLowerCase().includes(term) ||
      item.subtitle?.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term)
    );
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, filteredItems, selectedIndex, onClose]);

  useEffect(() => {
    const activeEl = listRef.current?.querySelector("[data-active='true']");
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[15vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 backdrop-blur-md"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative flex w-full max-w-lg flex-col overflow-hidden rounded-sm shadow-2xl backdrop-blur-xl max-h-[60vh] z-10"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              backgroundColor: "rgba(18, 18, 18, 0.95)",
            }}
          >
            <div
              className="flex items-center px-4 py-3.5 gap-2.5"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Search className="shrink-0" size={18} style={{ color: "#71717a" }} />
              <Input
                ref={inputRef}
                value={query}
                onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
                placeholder="Search pages, projects, or actions..."
                className="h-auto w-full border-none bg-transparent px-0 py-0 text-sm focus-visible:ring-0"
                style={{ color: "#f5f5f4" }}
              />
              <kbd
                className="hidden sm:inline-block rounded-sm px-1.5 py-0.5 text-[10px]"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  fontFamily: "var(--font-mono)",
                  color: "#71717a",
                }}
              >
                ESC
              </kbd>
            </div>

            <div ref={listRef} className="flex-1 overflow-y-auto py-2">
              {filteredItems.length === 0 ? (
                <div className="px-4 py-8 text-center text-xs" style={{ fontFamily: "var(--font-mono)", color: "#71717a" }}>
                  No commands matched &quot;{query}&quot;
                </div>
              ) : (
                Object.entries(
                  filteredItems.reduce((acc, item) => {
                    if (!acc[item.category]) acc[item.category] = [];
                    acc[item.category].push(item);
                    return acc;
                  }, {} as Record<string, PaletteItem[]>)
                ).map(([category, catItems]) => (
                  <div key={category} className="py-2 first:pt-0 last:pb-0">
                    <h4
                      className="px-4 py-1.5 text-[9px] uppercase tracking-wider font-semibold"
                      style={{ fontFamily: "var(--font-mono)", color: "#52525b" }}
                    >
                      {category}
                    </h4>
                    <div className="mt-1 flex flex-col px-2 gap-0.5">
                      {catItems.map((item) => {
                        const itemIndex = filteredItems.indexOf(item);
                        const isActive = itemIndex === selectedIndex;
                        return (
                          <button
                            key={item.id}
                            data-active={isActive}
                            onClick={item.action}
                            onMouseEnter={() => setSelectedIndex(itemIndex)}
                            className="flex items-center gap-3.5 rounded-sm px-3.5 py-2.5 text-left w-full transition-all duration-150"
                            style={{
                              border: isActive ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent",
                              backgroundColor: isActive ? "rgba(255,255,255,0.08)" : "transparent",
                              color: isActive ? "#f5f5f4" : "#d4d4d8",
                            }}
                          >
                            <span style={{ color: isActive ? "#f5f5f4" : "#71717a" }}>
                              {item.icon}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold leading-tight truncate">
                                {item.title}
                              </p>
                              {item.subtitle && (
                                <p
                                  className="text-[10px] leading-tight truncate mt-0.5"
                                  style={{ color: isActive ? "#d4d4d8" : "#71717a" }}
                                >
                                  {item.subtitle}
                                </p>
                              )}
                            </div>
                            {isActive && (
                              <ExternalLink size={12} className="opacity-60" style={{ color: "#f5f5f4" }} />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div
              className="flex items-center justify-between px-4 py-2.5 text-[9px]"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                backgroundColor: "rgba(0,0,0,0.3)",
                fontFamily: "var(--font-mono)",
                color: "#52525b",
              }}
            >
              <div className="flex gap-2">
                <span>↑↓ navigate</span>
                <span>•</span>
                <span>Enter select</span>
              </div>
              <span>ESC close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
