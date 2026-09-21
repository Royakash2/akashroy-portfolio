"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface OutlineButtonProps {
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
}

/**
 * Reusable Outline Button component for consistent site-wide design.
 * Automatically renders a Next.js <Link>, external <a>, or <button> element based on props.
 */
export function OutlineButton({
  href,
  target,
  rel,
  onClick,
  children,
  className,
  ariaLabel,
  type = "button",
}: OutlineButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-1.5 rounded-sm border border-(--line) bg-transparent px-3 py-1.5 text-[12px] font-mono font-medium text-(--muted) transition-all duration-200 hover:-translate-y-0.5 hover:border-(--fg) hover:bg-(--fg) hover:text-(--bg) group shrink-0 cursor-pointer select-none";

  if (href) {
    const isExternal = target === "_blank" || href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          target={target || "_blank"}
          rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
          onClick={onClick}
          aria-label={ariaLabel}
          className={cn(baseClasses, className)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        className={cn(baseClasses, className)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(baseClasses, className)}
    >
      {children}
    </button>
  );
}
