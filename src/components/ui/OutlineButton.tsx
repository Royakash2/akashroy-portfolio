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
  style?: React.CSSProperties;
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
  style,
  ariaLabel,
  type = "button",
}: OutlineButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-[12px] font-medium transition-all duration-200 hover:opacity-80 group shrink-0 cursor-pointer select-none";

  const baseStyle: React.CSSProperties = {
    border: "1px solid var(--line)",
    color: "var(--muted)",
    fontFamily: "var(--font-mono)",
    ...style,
  };

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
          style={baseStyle}
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
        style={baseStyle}
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
      style={baseStyle}
    >
      {children}
    </button>
  );
}
