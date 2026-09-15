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
