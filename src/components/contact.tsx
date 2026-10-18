"use client";

import { useRef, useState } from "react";
import { identity, bookingHref } from "@/data/site";
import { MagLink, Arrow } from "./mag-link";

/**
 * Closing section: big line + a booking card.
 * The card tilts max ~2° toward the mouse with a soft glow — small on purpose.
 */
export function Contact() {
  const card = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const tilt = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !card.current) return;
    const r = card.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    card.current.style.transform = `perspective(1000px) rotateX(${(0.5 - y) * 4}deg) rotateY(${(x - 0.5) * 4}deg)`;
    card.current.style.setProperty("--gx", `${x * 100}%`);
    card.current.style.setProperty("--gy", `${y * 100}%`);
  };
  const reset = () => {
    if (card.current) card.current.style.transform = "";
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(identity.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard blocked — the mailto link still works */
    }
  };

  return (
    <section id="contact" className="border-t border-line py-24 sm:py-32">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <span className="label" data-reveal>Contact</span>
          <h2 className="mt-5 text-[clamp(3rem,8vw,7.5rem)] font-black uppercase leading-[0.84] tracking-tightest" data-reveal>
            Let&apos;s build <br />
            <span className="font-serif font-normal normal-case italic tracking-[-0.02em] text-accent">it right.</span>
          </h2>
          <p className="mt-8 max-w-md text-[1.0312rem] leading-relaxed text-ink-mute" data-reveal>
            One short call, a written plan within a day, then you see it being built.
          </p>
        </div>

        <div data-reveal style={{ ["--d" as string]: "150ms" }}>
          <div
            ref={card}
            onPointerMove={tilt}
            onPointerLeave={reset}
            className="relative overflow-hidden rounded-[12px] border border-line bg-canvas-raise p-6 transition-transform duration-300 ease-out sm:p-9"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{ background: "radial-gradient(420px circle at var(--gx,80%) var(--gy,0%), rgba(232,163,61,.14), transparent 70%)" }}
            />
            <div className="relative">
              <p className="label text-accent">Book a call · 20 min</p>
              <p className="mt-4 text-[clamp(1.6rem,3vw,2.3rem)] font-semibold leading-tight tracking-[-0.03em]">
                Tell me what you&apos;re building. I&apos;ll reply within 24 hours.
              </p>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-mute">
                The button opens a ready-to-send email. I reply with a time for a Google Meet.
              </p>
              <MagLink href={bookingHref} className="mt-8 w-full justify-between">
                Book a call <Arrow />
              </MagLink>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5 text-[0.8438rem]">
                <button type="button" onClick={copy} className="text-ink-mute transition-colors hover:text-ink">
                  {copied ? "✓ Email copied" : identity.email}
                </button>
                <span className="flex gap-4">
                  <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink-mute hover:text-accent">LinkedIn</a>
                  <a href={identity.github} target="_blank" rel="noopener noreferrer" className="text-ink-mute hover:text-accent">GitHub</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
