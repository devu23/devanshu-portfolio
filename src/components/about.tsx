"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { identity, about } from "@/data/site";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function About() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const photoCardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!photoCardRef.current) return;
    const rect = photoCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((y - centerY) / centerY) * -10);
    setRotateY(((x - centerX) / centerX) * 12);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section id="about" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1fr)] lg:gap-20 lg:px-8">
        {/* Holographic 3D Photo Frame */}
        <Reveal>
          <div
            ref={photoCardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="pointer-events-none absolute -inset-6 rounded-[36px] bg-gradient-to-tr from-iris/25 via-cyan/20 to-transparent blur-3xl" />
            
            <motion.div
              animate={{ rotateX, rotateY }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              data-cursor-text="FOUNDER"
              className="relative overflow-hidden rounded-3xl border border-cyan/40 bg-ink-soft p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src={identity.photo}
                  alt={`${identity.name} — Full-Stack Developer & Founder`}
                  fill
                  sizes="(max-width:1024px) 90vw, 45vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  priority={false}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
                
                {/* Overlay Status */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-ink-line/80 bg-ink/85 p-3.5 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display text-sm font-semibold text-fog">{identity.name}</p>
                      <p className="font-sans text-[11px] text-cyan">{identity.company} · {identity.role}</p>
                    </div>
                    <span className="flex h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_10px_#22d3ee]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>

        {/* Bio & Track Record */}
        <div>
          <SectionHeading
            eyebrow="Architect &amp; Builder"
            title={
              <>
                The Engineer <span className="accent-text">Behind The Systems</span>
              </>
            }
          />
          <div className="mt-7 space-y-4">
            {about.paras.map((p, i) => (
              <Reveal key={i} i={i}>
                <p className="font-sans text-[15.5px] leading-relaxed text-fog-muted">{p}</p>
              </Reveal>
            ))}
          </div>

          {/* Core Commitments */}
          <Reveal i={2}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {about.points.map((pt) => (
                <li
                  key={pt}
                  className="flex items-center gap-2 rounded-full border border-ink-line bg-ink-soft/70 px-4 py-2 font-sans text-[13px] font-medium text-fog"
                >
                  <span className="text-cyan">✓</span> {pt}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Action CTAs */}
          <Reveal i={3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${identity.email}`}
                data-cursor-text="HIRE"
                className="btn rounded-full bg-iris-cyan px-8 py-3.5 text-ink font-semibold shadow-glow hover:opacity-90"
              >
                Start a Conversation
              </a>
              <a
                href={identity.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="CODE"
                className="btn rounded-full border border-ink-line bg-ink-soft/50 px-8 py-3.5 text-fog hover:border-cyan hover:text-cyan-light"
              >
                GitHub Profile
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
