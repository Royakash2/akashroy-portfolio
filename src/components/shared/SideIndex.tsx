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
      <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1 font-mono text-(--soft)">
        INDEX
      </h3>
      {INDEX_ITEMS.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`group flex items-center gap-2.5 text-[12px] tracking-wider transition-all duration-300 hover:text-(--fg) font-mono ${
              isActive ? "text-(--fg) font-semibold" : "text-(--soft) font-medium"
            }`}
          >
            <span
              className={`h-px transition-all duration-300 bg-current ${
                isActive ? "w-4" : "w-0"
              }`}
            />
            {item.label}
          </a>
        );
      })}
    </aside>
  );
}
