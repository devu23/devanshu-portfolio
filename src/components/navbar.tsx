"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { identity, nav } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        solid ? "glass" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold tracking-tight text-fog">
            {identity.name}
          </span>
          <span className="mt-0.5 font-sans text-[10px] uppercase tracking-luxe text-iris-light">
            {identity.company}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <li key={n.label}>
              <a href={n.href} className="font-sans text-[13px] text-fog-muted transition-colors hover:text-fog">
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn hidden rounded-full bg-iris-cyan px-5 py-2.5 text-ink hover:opacity-90 sm:inline-flex"
          >
            Let&apos;s talk
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="text-fog md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink-line bg-ink-soft px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {nav.map((n) => (
              <li key={n.label}>
                <a href={n.href} onClick={() => setOpen(false)} className="font-sans text-[14px] text-fog-muted">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}
