"use client";

import { motion, useScroll, useSpring } from "framer-motion";

interface FlashWireProps {
  label?: string;
  className?: string;
}

/** Horizontal electric flash wire rendered between sections */
export function FlashWire({ label, className = "" }: FlashWireProps) {
  return (
    <div className={`relative w-full max-w-6xl mx-auto px-4 py-8 overflow-hidden ${className}`}>
      {/* Background Dim Guide Line */}
      <div className="relative h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* High-voltage Animated Laser Spark Wire */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: false, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan via-violet-400 to-transparent shadow-[0_0_14px_rgba(34,211,238,0.8)]"
      />

      {/* Traveling Electric Spark Beam */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: "100%", opacity: [0, 1, 1, 0] }}
        viewport={{ once: false, margin: "-80px" }}
        transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.5 }}
        className="absolute top-1/2 -translate-y-1/2 h-[3px] w-48 bg-gradient-to-r from-transparent via-white to-transparent blur-[1px] shadow-[0_0_20px_#22D3EE]"
      />

      {/* Central High-Voltage Circuit Node */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        {/* Shockwave ping */}
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: [1, 2.4], opacity: [0.8, 0] }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
          className="absolute h-4 w-4 rounded-full bg-cyan/40"
        />

        {/* Core Electric Diamond */}
        <motion.div
          initial={{ rotate: 45, scale: 0 }}
          whileInView={{ rotate: 45, scale: 1 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="relative h-2.5 w-2.5 bg-cyan border border-white shadow-[0_0_12px_#22D3EE]"
        />

        {label && (
          <span className="absolute top-3.5 whitespace-nowrap text-[9px] font-mono uppercase tracking-[0.25em] text-cyan/70 bg-bg/80 px-2 py-0.5 rounded border border-cyan/20 backdrop-blur-sm">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

/** Vertical Electric Scroll Wire Tracker */
export function ScrollSpineWire() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="fixed right-3 top-0 bottom-0 z-40 hidden md:block pointer-events-none w-1">
      {/* Background wire track */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/5" />

      {/* Live active current wire */}
      <motion.div
        style={{ scaleY, originY: 0 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-cyan via-violet-500 to-cyan shadow-[0_0_10px_rgba(34,211,238,0.7)]"
      />
    </div>
  );
}
