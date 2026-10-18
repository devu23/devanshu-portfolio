"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { statement, industries } from "@/data/site";
import { cn } from "@/lib/utils";

/** One word: dim → full as the scroll passes its slice of the sentence. */
function Word({ word, range, progress, gold }: { word: string; range: [number, number]; progress: MotionValue<number>; gold: boolean }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className={cn("inline-block pr-[0.24em]", gold && "font-serif font-normal italic text-accent")}>
      {word}
    </motion.span>
  );
}

export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = statement.text.split(" ");

  return (
    <section aria-label="What I do" className="border-y border-line py-24 sm:py-32">
      <div className="wrap">
        <span className="label">What I do</span>
        <p ref={ref} className="mt-8 max-w-[22ch] text-[clamp(2rem,5.6vw,5.2rem)] font-semibold leading-[1.02] tracking-[-0.04em] sm:max-w-[24ch]">
          {words.map((w, i) => (
            <Word
              key={i}
              word={w}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
              gold={statement.gold.includes(w)}
            />
          ))}
        </p>
      </div>

      {/* who I build for */}
      <div className="mt-20 overflow-hidden" aria-label="Who I build for">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...industries, ...industries].map((s, i) => (
            <span key={i} className="flex items-center gap-10 text-[clamp(1.1rem,2vw,1.6rem)] text-ink-mute">
              {s} <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
