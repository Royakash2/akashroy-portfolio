"use client";

import { useScrollSpy } from "@/hooks/useScrollSpy";

const INDEX_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

export function SideIndex() {
  const activeSection = useScrollSpy(
    INDEX_ITEMS.map((item) => item.id),
    200
  );

  return (
    <aside className="fixed top-[26vh] left-[calc(50%+410px)] pointer-events-auto hidden xl:flex flex-col gap-3.5 z-30">
      <h3
        className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1"
        style={{ fontFamily: "var(--font-mono)", color: "var(--soft)" }}
      >
        INDEX
      </h3>
      {INDEX_ITEMS.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group flex items-center gap-2.5 text-[12px] font-medium tracking-[0.05em] transition-all duration-300"
            style={{
              fontFamily: "var(--font-mono)",
              color: isActive ? "var(--fg)" : "var(--soft)",
              fontWeight: isActive ? 600 : 500,
            }}
          >
            <span
              className="h-[1px] transition-all duration-300"
              style={{
                background: "currentColor",
                width: isActive ? "16px" : "0px",
              }}
            />
            {item.label}
          </a>
        );
      })}
    </aside>
  );
}
