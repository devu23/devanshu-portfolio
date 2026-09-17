"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { identity } from "@/data/site";

const Hero3D = dynamic(() => import("./hero-3d"), { ssr: false });

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      {/* 3D backdrop (lazy, client-only) */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-90">
        <Hero3D />
      </div>
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-iris/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[380px] w-[380px] rounded-full bg-cyan/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          {identity.role} · {identity.company}
        </motion.p>

        <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.02] text-fog sm:text-6xl lg:text-7xl">
          {["I build", "premium web", "& AI automations"].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {i === 2 ? <span className="accent-text">{line}</span> : line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-7 max-w-xl font-sans text-[16px] leading-relaxed text-fog-muted"
        >
          {identity.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.78, duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a href="#work" className="btn rounded-full bg-iris-cyan px-7 py-3.5 text-ink shadow-glow hover:opacity-90">
            View my work
          </a>
          <a href="#contact" className="btn rounded-full border border-ink-line px-7 py-3.5 text-fog hover:border-iris">
            Book a call
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-10 font-sans text-[12px] uppercase tracking-luxe text-fog-dim"
        >
          {identity.location}
        </motion.p>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-fog-dim">
        <div className="h-9 w-5 rounded-full border border-ink-line p-1">
          <div className="mx-auto h-2 w-1 animate-floaty rounded-full bg-iris-light" />
        </div>
      </div>
    </section>
  );
}
