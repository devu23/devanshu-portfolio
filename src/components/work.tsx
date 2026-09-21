"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects, Project } from "@/data/site";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

function Project3DCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smooth tilt angles
    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 14;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <Reveal i={index}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1200,
        }}
        className="h-full"
      >
        <motion.div
          animate={{
            rotateX: rotateX,
            rotateY: rotateY,
            scale: isHovered ? 1.025 : 1,
            translateZ: isHovered ? 20 : 0,
          }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-line/80 bg-ink-card shadow-card transition-colors duration-500 hover:border-cyan/50 hover:shadow-[0_20px_40px_rgba(34,211,238,0.15)]"
        >
          {/* Subtle Ambient Card Gradient */}
          <div
            className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `radial-gradient(600px circle at 50% 0%, rgba(34,211,238,0.12), transparent 70%)`,
            }}
          />

          {/* 3D Background Image Showcase Area */}
          <div
            data-cursor-text="OPEN"
            className="relative aspect-[16/10] w-full overflow-hidden border-b border-ink-line/60 bg-ink-soft"
          >
            {project.preview ? (
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={project.preview}
                  alt={`${project.name} preview`}
                  fill
                  sizes="(max-width:1024px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-card via-ink-card/20 to-transparent" />
              </div>
            ) : (
              <div
                className="flex h-full w-full items-center justify-center p-6"
                style={{ background: `linear-gradient(135deg, ${project.from}, ${project.to})` }}
              >
                <span className="font-display text-3xl font-bold text-white/90">{project.name}</span>
              </div>
            )}

            {/* Floating Tag Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-ink-line/80 bg-ink/80 px-3 py-1 font-sans text-[11px] font-medium tracking-wide text-cyan backdrop-blur-md">
                {project.tag}
              </span>
            </div>

            {project.note && (
              <span className="absolute top-4 right-4 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md">
                {project.note}
              </span>
            )}
          </div>

          {/* Project Details */}
          <div className="flex flex-1 flex-col p-6 sm:p-7">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-xl font-bold text-fog group-hover:text-cyan-light transition-colors">
                {project.name}
              </h3>
              <span className="font-sans text-[11px] font-medium tracking-wider text-fog-dim uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <p className="mt-3 flex-1 font-sans text-[14px] leading-relaxed text-fog-muted">
              {project.blurb}
            </p>

            {/* Tech Stack Chips */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-ink-line bg-ink-soft/70 px-2.5 py-1 font-sans text-[11.5px] font-medium text-fog-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Bar */}
            {project.href && (
              <div className="mt-6 pt-5 border-t border-ink-line/50 flex items-center justify-between">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-text="VISIT"
                  className="inline-flex items-center gap-2 font-sans text-[13.5px] font-semibold text-cyan transition-all hover:text-white group/btn"
                >
                  {project.hrefLabel ?? "View live project"}
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </a>
                <span className="h-2 w-2 rounded-full bg-cyan/60 animate-pulse" />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background Decorative Gradient Grid */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-iris/10 blur-[140px]" />
      <div className="pointer-events-none absolute left-0 bottom-10 h-[400px] w-[400px] rounded-full bg-cyan/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Selected Work &amp; Case Studies"
          title={
            <>
              Production Software &amp; <span className="accent-text">Live Systems</span>
            </>
          }
          subtitle="Real platforms, automated engines, and online stores with live users — built to convert."
        />

        {/* 3D Perspective Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Project3DCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
