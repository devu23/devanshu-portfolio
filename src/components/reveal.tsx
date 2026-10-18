"use client";

import { useEffect } from "react";

/**
 * One IntersectionObserver for the whole page.
 * Any element with `data-reveal` fades up once when it enters the screen.
 * Stagger with style={{ "--d": "120ms" }}. CSS lives in globals.css.
 */
export function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    // Keyboard users: focusing inside a hidden block reveals it.
    const onFocus = (ev: FocusEvent) =>
      (ev.target as HTMLElement)?.closest?.("[data-reveal]")?.classList.add("is-in");
    document.addEventListener("focusin", onFocus);
    return () => {
      io.disconnect();
      document.removeEventListener("focusin", onFocus);
    };
  }, []);
  return null;
}
