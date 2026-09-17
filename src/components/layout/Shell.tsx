import React from "react";

export function Shell({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-190 [border-left:1px_dashed_var(--line)] [border-right:1px_dashed_var(--line)] ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  title,
  aside,
  id,
}: {
  title: string;
  aside?: React.ReactNode;
  id?: string;
}) {
  return (
    <div id={id} className="relative w-full bg-(--bg)">
      <Shell className="bg-(--bg) border-y border-(--line)">
        {/* Crosshair Dot Anchors (inside container corners) */}
        <span className="absolute top-0 left-0 h-0.75 w-0.75 -translate-x-1/2 -translate-y-1/2 opacity-40 z-20 bg-(--fg)" />
        <span className="absolute top-0 right-0 h-0.75 w-0.75 translate-x-1/2 -translate-y-1/2 opacity-40 z-20 bg-(--fg)" />
        <span className="absolute bottom-0 left-0 h-0.75 w-0.75 -translate-x-1/2 translate-y-1/2 opacity-40 z-20 bg-(--fg)" />
        <span className="absolute bottom-0 right-0 h-0.75 w-0.75 translate-x-1/2 translate-y-1/2 opacity-40 z-20 bg-(--fg)" />

        <div className="flex items-center justify-between gap-4 px-6 py-3 sm:px-8 w-full bg-(--bg)">
          <h2 className="text-2xl tracking-wide font-serif text-(--fg)">
            {title}
          </h2>
          {aside}
        </div>
      </Shell>
    </div>
  );
}

export function GapBand({
  h = "h-7",
  className = "",
}: {
  h?: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full bg-(--bg) ${h} ${className}`}>
      <Shell className="h-full bg-(--bg)" />
    </div>
  );
}

export function PageHero({
  title,
  subtitle,
  description,
  aside,
}: {
  title: string;
  subtitle: string;
  description?: string;
  aside?: React.ReactNode;
}) {
  return (
    <div className="relative w-full bg-(--bg)">
      <Shell className="bg-(--bg) border-y border-(--line) py-16 sm:py-24 px-6 sm:px-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
        {/* Crosshair Dot Anchors */}
        <span className="absolute top-0 left-0 h-0.75 w-0.75 -translate-x-1/2 -translate-y-1/2 opacity-40 z-20 bg-(--fg)" />
        <span className="absolute top-0 right-0 h-0.75 w-0.75 translate-x-1/2 -translate-y-1/2 opacity-40 z-20 bg-(--fg)" />
        <span className="absolute bottom-0 left-0 h-0.75 w-0.75 -translate-x-1/2 translate-y-1/2 opacity-40 z-20 bg-(--fg)" />
        <span className="absolute bottom-0 right-0 h-0.75 w-0.75 translate-x-1/2 translate-y-1/2 opacity-40 z-20 bg-(--fg)" />

        <div className="flex flex-col gap-5 max-w-3xl">
          <div className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-emerald-500">
            {subtitle}
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-(--fg) tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-[15px] sm:text-[17px] text-(--muted) leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
        {aside && <div className="shrink-0">{aside}</div>}
      </Shell>
    </div>
  );
}
