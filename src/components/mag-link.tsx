"use client";

import { cn } from "@/lib/utils";

/**
 * A link that leans toward the cursor (max ±5 px) with a soft spotlight under it.
 * Mouse only — touch and reduced-motion get a normal link.
 */
export function MagLink({
  href,
  children,
  className,
  variant = "solid",
  external,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "line";
  external?: boolean;
}) {
  const move = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--px", `${x}px`);
    el.style.setProperty("--py", `${y}px`);
    el.style.setProperty("--mx", `${Math.max(-5, Math.min(5, (x - r.width / 2) * 0.06))}px`);
    el.style.setProperty("--my", `${Math.max(-4, Math.min(4, (y - r.height / 2) * 0.12))}px`);
  };
  const leave = (e: React.PointerEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.setProperty("--mx", "0px");
    e.currentTarget.style.setProperty("--my", "0px");
  };

  return (
    <a
      href={href}
      onPointerMove={move}
      onPointerLeave={leave}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "mag inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[0.875rem] font-medium",
        variant === "solid"
          ? "bg-accent text-canvas hover:bg-accent-soft"
          : "border border-ink/30 text-ink hover:border-ink",
        className
      )}
    >
      {children}
    </a>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("h-4 w-4", className)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
