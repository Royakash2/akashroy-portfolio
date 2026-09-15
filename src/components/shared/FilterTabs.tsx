"use client";

import type { ComponentType, CSSProperties } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface FilterTabsProps {
  tabs: readonly string[] | string[];
  value: string;
  onValueChange: (value: string) => void;
  icons?: Record<string, ComponentType<{ className?: string; style?: CSSProperties }>>;
  size?: "sm" | "md";
  className?: string;
}

export function FilterTabs({
  tabs,
  value,
  onValueChange,
  icons,
  size = "sm",
  className = "",
}: FilterTabsProps) {
  const isSm = size === "sm";

  return (
    <Tabs value={value} onValueChange={(val) => onValueChange(val as string)}>
      <TabsList
        className={`inline-flex flex-wrap items-center gap-1 rounded-sm border border-(--line) bg-(--chip) ${
          isSm ? "p-0.5 h-auto w-fit" : "p-0.5 sm:p-1 h-auto w-fit justify-start gap-1 sm:gap-1.5"
        } ${className}`}
      >
        {tabs.map((tab) => {
          const Icon = icons?.[tab];
          const isActive = value === tab;

          return (
            <TabsTrigger
              key={tab}
              value={tab}
              className={`flex items-center justify-center gap-1.5 text-center rounded-sm transition-all duration-200 cursor-pointer border-0 shadow-none hover:opacity-80 data-[state=active]:shadow-none ${
                isSm ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-[11.5px]"
              } ${
                isActive
                  ? "bg-(--fg)! text-(--bg)! font-semibold"
                  : "bg-transparent text-(--muted) font-normal"
              }`}
            >
              {Icon && <Icon className={isSm ? "size-3" : "size-3.5"} aria-hidden />}
              <span>{tab}</span>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
