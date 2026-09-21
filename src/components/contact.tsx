"use client";

import { useState } from "react";
import { identity } from "@/data/site";
import { Reveal } from "./reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(identity.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background Ambient Aura */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-iris/20 via-cyan/20 to-iris/15 blur-[140px]" />

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-ink-soft/80 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_#22d3ee]" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-cyan">
              Initiate Project
            </span>
          </div>
        </Reveal>

        <Reveal i={1}>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-fog sm:text-6xl lg:text-7xl">
            Have a project in mind? <br />
            <span className="accent-text">Let&apos;s build it right.</span>
          </h2>
        </Reveal>

        <Reveal i={2}>
          <p className="mx-auto mt-6 max-w-xl font-sans text-[16px] leading-relaxed text-fog-muted">
            Whether you need a high-converting 3D web experience, a custom online store, or an autonomous WhatsApp AI lead engine — I reply within 24 hours with an honest scope and roadmap.
          </p>
        </Reveal>

        <Reveal i={3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${identity.email}`}
              data-cursor-text="EMAIL"
              className="btn rounded-full bg-iris-cyan px-9 py-4 text-ink font-semibold shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-[1.03] hover:opacity-95"
            >
              Email Devanshu
            </a>
            <button
              onClick={copyEmail}
              data-cursor-text="COPY"
              className="btn rounded-full border border-ink-line bg-ink-soft/70 px-8 py-4 font-mono text-sm text-fog backdrop-blur-md transition-all hover:border-cyan hover:bg-cyan/10"
            >
              {copied ? "✓ Copied to Clipboard" : `Copy: ${identity.email}`}
            </button>
          </div>
        </Reveal>

        <Reveal i={4}>
          <div className="mt-12 flex items-center justify-center gap-6 font-sans text-xs text-fog-dim">
            <span>Direct: devanshu007raturi@gmail.com</span>
            <span>•</span>
            <span>Worldwide Delivery</span>
            <span>•</span>
            <span>Neev Automation</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
