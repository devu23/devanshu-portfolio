"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import dynamic from "next/dynamic";
import { identity } from "@/data/site";

const Hero3D = dynamic(() => import("./hero-3d"), { ssr: false });

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasVideo, setHasVideo] = useState(false);

  // Mouse tilt motion values for real-time 3D parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 22 };
  const rotateX = useSpring(mouseY, springConfig);
  const rotateY = useSpring(mouseX, springConfig);

  // Floating parallax offsets for surrounding badges
  const badgeX = useSpring(mouseX, { stiffness: 180, damping: 20 });
  const badgeY = useSpring(mouseY, { stiffness: 180, damping: 20 });

  useEffect(() => {
    fetch("/video/hero-avatar.mp4", { method: "HEAD" })
      .then((res) => {
        if (res.ok) setHasVideo(true);
      })
      .catch(() => setHasVideo(false));
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    mouseX.set((x / (rect.width / 2)) * 12);
    mouseY.set(-(y / (rect.height / 2)) * 12);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="top"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] overflow-hidden flex flex-col justify-center pt-28 pb-16 lg:pt-20 lg:pb-12"
    >
      {/* 3D Spline-Style Studio Stage (Floor Grid, Tech Rings, Lights) */}
      <div className="absolute inset-0 z-0 opacity-85 pointer-events-none">
        <Hero3D />
      </div>

      {/* Massive Editorial Kinetic Typography Layer (Behind Character) */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 select-none overflow-hidden text-center opacity-[0.06] blur-[0.5px]">
        <span className="font-display text-[15vw] font-black uppercase tracking-tighter text-white leading-none">
          DEVANSHU
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-8">
          {/* Left Column: Vision & Pitch */}
          <div className="z-10">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-cyan/30 bg-ink-soft/90 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>
              <span className="font-sans text-[11px] font-semibold tracking-wider text-cyan-light uppercase">
                Available For Freelance &amp; Automation Builds
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-fog sm:text-6xl lg:text-7xl">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="block leading-[1.04]"
              >
                Next-Gen <span className="accent-text">3D Web</span> &amp;
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="block leading-[1.04]"
              >
                Autonomous <span className="text-cyan">AI Systems</span>.
              </motion.span>
            </h1>

            {/* Narrative */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-6 max-w-xl font-sans text-[16px] leading-relaxed text-fog-muted sm:text-[17.5px]"
            >
              I&apos;m {identity.name} — founder of <strong className="text-fog">Neev</strong>. I engineer immersive 3D web applications, high-converting stores, and 24×7 WhatsApp AI lead machines for ambitious businesses.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                data-cursor-text="EXPLORE"
                className="btn group rounded-full bg-iris-cyan px-8 py-4 text-ink font-semibold shadow-[0_0_30px_rgba(109,94,246,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(34,211,238,0.55)]"
              >
                View Shipped Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                data-cursor-text="TALK"
                className="btn rounded-full border border-ink-line bg-ink-soft/70 px-8 py-4 text-fog backdrop-blur-md transition-all duration-300 hover:border-cyan hover:bg-cyan/10 hover:text-cyan-light"
              >
                Let&apos;s Build Together
              </a>
            </motion.div>

            {/* Credibility Chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="mt-12 flex flex-wrap items-center gap-6 border-t border-ink-line/60 pt-6 text-fog-dim"
            >
              <div className="flex items-center gap-2 font-sans text-xs">
                <span className="text-cyan">◆</span> 4+ Yrs Shipping Software
              </div>
              <div className="flex items-center gap-2 font-sans text-xs">
                <span className="text-iris-light">◆</span> Next.js · MERN · WebGL
              </div>
              <div className="flex items-center gap-2 font-sans text-xs">
                <span className="text-cyan">◆</span> Official WhatsApp Cloud API
              </div>
            </motion.div>
          </div>

          {/* Right Column: BORDERLESS 3D AI AVATAR ON STAGE */}
          <div
            style={{ perspective: 1200 }}
            className="relative flex items-center justify-center py-4 lg:py-0"
          >
            {/* Soft Radial Stage Spotlight Behind Character */}
            <div className="pointer-events-none absolute h-[460px] w-[460px] rounded-full bg-radial from-cyan/25 via-iris/15 to-transparent blur-[80px]" />

            {/* Seamless 3D Avatar (No Card Box!) */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative aspect-square w-full max-w-[480px] flex items-center justify-center select-none"
            >
              {/* The Character Cutout / Video */}
              <div className="relative h-full w-full flex items-center justify-center">
                {hasVideo ? (
                  <video
                    src="/video/hero-avatar.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)]"
                  />
                ) : (
                  <Image
                    src="/img/devanshu_3d_avatar_cutout.png"
                    alt="Devanshu Raturi — 3D AI Avatar"
                    fill
                    sizes="(max-width:1024px) 90vw, 45vw"
                    className="object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] drop-shadow-[0_0_35px_rgba(34,211,238,0.2)]"
                    priority
                  />
                )}
              </div>

              {/* Floating 3D Holographic Node 1: AI Engine (Top Right) */}
              <motion.div
                style={{
                  translateZ: 60,
                  x: badgeX,
                  y: badgeY,
                }}
                className="absolute top-6 right-2 rounded-2xl border border-cyan/40 bg-ink/90 px-4 py-2.5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-3"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_12px_#22d3ee] animate-pulse" />
                <div>
                  <p className="font-mono text-[11px] font-bold text-cyan-light tracking-wide">
                    AI AGENT SYSTEM
                  </p>
                  <p className="font-sans text-[9px] text-fog-dim">24×7 Instant Lead Reply</p>
                </div>
              </motion.div>

              {/* Floating 3D Holographic Node 2: Full-Stack Dev (Bottom Left) */}
              <motion.div
                style={{
                  translateZ: 75,
                  x: badgeX,
                  y: badgeY,
                }}
                className="absolute bottom-4 left-0 rounded-2xl border border-iris/40 bg-ink/90 px-4 py-2.5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-3"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-iris/20 text-iris-light text-xs font-bold">
                  ⚡
                </div>
                <div>
                  <p className="font-display text-xs font-bold text-fog">Devanshu Raturi</p>
                  <p className="font-sans text-[10px] text-fog-muted">MERN · Next.js · Founder</p>
                </div>
              </motion.div>

              {/* Floating 3D Holographic Node 3: WhatsApp Engine (Bottom Right) */}
              <motion.div
                style={{
                  translateZ: 45,
                  x: badgeX,
                  y: badgeY,
                }}
                className="absolute -bottom-2 right-4 hidden sm:flex items-center gap-2 rounded-full border border-emerald-500/40 bg-ink/90 px-3.5 py-1.5 backdrop-blur-xl shadow-lg"
              >
                <span className="text-emerald-400 text-xs font-bold">●</span>
                <span className="font-mono text-[10px] font-semibold text-emerald-300">
                  WHATSAPP CLOUD API LIVE
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
