"use client";

import { useState } from "react";
import { services } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Accordion. Height animates with the grid-rows 0fr → 1fr trick (no JS measuring).
 * Real <button aria-expanded> so keyboard + screen readers work.
 */
export function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="border-t border-line py-24 sm:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
        <div data-reveal>
          <span className="label">Services</span>
          <h2 className="mt-5 text-[clamp(2.4rem,5vw,4.6rem)] font-black uppercase leading-[0.88] tracking-tightest">
            What I can <span className="font-serif font-normal normal-case italic tracking-[-0.02em] text-accent">build</span> for you
          </h2>
          <p className="mt-6 max-w-sm text-[1rem] leading-relaxed text-ink-mute">
            A first website, a better store, or a system that answers your leads. Pick the problem; I pick the right stack.
          </p>
        </div>

        <ul className="border-t border-line" data-reveal style={{ ["--d" as string]: "120ms" }}>
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <li key={s.title} className="border-b border-line">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`svc-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="group flex w-full items-center gap-5 py-6 text-left"
                >
                  <span className="font-mono text-[0.75rem] text-accent">0{i + 1}</span>
                  <span className="flex-1 text-[clamp(1.25rem,2.2vw,1.75rem)] font-semibold tracking-[-0.03em] transition-colors group-hover:text-accent">
                    {s.title}
                  </span>
                  <span
                    aria-hidden
                    className={cn("relative h-4 w-4 transition-transform duration-500 ease-out", isOpen && "rotate-45")}
                  >
                    <span className="absolute left-0 top-1/2 h-px w-4 bg-ink" />
                    <span className="absolute left-1/2 top-0 h-4 w-px bg-ink" />
                  </span>
                </button>
                <div
                  id={`svc-${i}`}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-500 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pb-7 pl-[2.6rem]">
                      <p className="max-w-lg text-[0.9688rem] leading-relaxed text-ink-mute">{s.desc}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {s.points.map((p) => (
                          <li key={p} className="rounded-full border border-line px-3 py-1 text-[0.7812rem] text-ink">
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
