import React from "react";

export function Shell({
  children,
  className = "",
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[760px] ${className}`}
      style={{
        borderLeft: "1px dashed var(--line)",
        borderRight: "1px dashed var(--line)",
        ...style,
      }}
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
    <div
      id={id}
      className="relative w-full bg-stripes"
      style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
    >
      <Shell style={{ background: "var(--bg)" }}>
        {/* Crosshair Dot Anchors */}
        <span
          className="absolute top-0 left-0 h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 opacity-40 z-20"
          style={{ background: "var(--fg)" }}
        />
        <span
          className="absolute top-0 right-0 h-[3px] w-[3px] translate-x-1/2 -translate-y-1/2 opacity-40 z-20"
          style={{ background: "var(--fg)" }}
        />
        <span
          className="absolute bottom-0 left-0 h-[3px] w-[3px] -translate-x-1/2 translate-y-1/2 opacity-40 z-20"
          style={{ background: "var(--fg)" }}
        />
        <span
          className="absolute bottom-0 right-0 h-[3px] w-[3px] translate-x-1/2 translate-y-1/2 opacity-40 z-20"
          style={{ background: "var(--fg)" }}
        />

        <div className="flex items-center justify-between gap-4 px-6 py-3 sm:px-8 w-full" style={{ background: "var(--bg)" }}>
          <h2
            className="text-2xl tracking-wide"
            style={{ fontFamily: "var(--font-serif)", color: "var(--fg)" }}
          >
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
    <div className={`relative w-full bg-stripes ${h} ${className}`}>
      <Shell className="h-full" style={{ background: "var(--bg)" }} />
    </div>
  );
}
