"use client";

import { useEffect, useRef, useState } from "react";
import { identity, nav, bookingHref } from "@/data/site";
import { cn } from "@/lib/utils";

/** Sticky bar: blurs after 24 px, thin accent reading-progress line, current-section highlight. */
export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("");
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setSolid(y > 24);
      const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
      if (bar.current) bar.current.style.transform = `scaleX(${Math.min(1, y / max)})`;
      let cur = "";
      nav.forEach((n) => {
        const el = document.querySelector(n.href);
        if (el && el.getBoundingClientRect().top < innerHeight * 0.35) cur = n.href;
      });
      setCurrent(cur);
    };
    const on = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on, { passive: true });
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        solid || open ? "border-b border-line bg-canvas/90 backdrop-blur-xl" : "border-b border-white/5 bg-canvas/70 backdrop-blur-md"
      )}
    >
      <nav className="wrap flex items-center justify-between py-4">
        <a href="#top" className="text-[1.0625rem] font-black tracking-[-0.04em]" aria-label={`${identity.name}, home`}>
          DR<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <li key={n.label}>
              <a
                href={n.href}
                aria-current={current === n.href ? "location" : undefined}
                className={cn("text-[0.8438rem] transition-colors hover:text-ink", current === n.href ? "text-ink" : "text-ink-mute")}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={bookingHref}
            className="rounded-full border border-line px-4 py-2 text-[0.8125rem] font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Book a call
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 9h16M4 15h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="wrap flex flex-col gap-5 pb-7 pt-2 md:hidden">
          {nav.map((n) => (
            <li key={n.label}>
              <a href={n.href} onClick={() => setOpen(false)} className="text-[1.625rem] font-bold tracking-[-0.03em]">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <div ref={bar} aria-hidden className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent" />
    </header>
  );
}
