"use client";

import { services } from "@/data/site";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Core Competencies &amp; Capabilities"
          title={
            <>
              High-Value Systems That <span className="accent-text">Generate Revenue</span>
            </>
          }
          subtitle="From 3D interactive web experiences to custom e-commerce stores and autonomous WhatsApp AI agents."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} i={i}>
              <div
                data-cursor-text="SERVICE"
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-ink-line bg-ink-card p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan/50 hover:shadow-[0_15px_35px_rgba(34,211,238,0.12)]"
              >
                {/* Glow Hover Backing */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: s.from }}
                />

                <div>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl text-ink font-bold shadow-md transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold text-fog group-hover:text-cyan-light transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 font-sans text-[13.5px] leading-relaxed text-fog-muted">
                    {s.desc}
                  </p>
                </div>

                <ul className="mt-6 space-y-2 border-t border-ink-line/50 pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 font-sans text-[12px] text-fog-dim">
                      <span className="text-cyan">▸</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal i={2}>
          <div className="mt-12 rounded-2xl border border-ink-line/60 bg-ink-soft/40 p-4 text-center backdrop-blur-sm">
            <p className="font-sans text-[13px] text-fog-muted">
              Need a bespoke stack? I architect custom full-stack solutions tailored to your unique workflow.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
