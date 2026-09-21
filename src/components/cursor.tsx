"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing follower
  const springX = useSpring(mouseX, { stiffness: 450, damping: 28, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 28, mass: 0.5 });

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], .interactive-hover, .card'
      );

      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute("data-cursor-text");
        setHoverText(customText || "");
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Follower Ring / Glow */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? (hoverText ? 2.6 : 1.8) : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="pointer-events-none fixed top-0 left-0 flex items-center justify-center rounded-full border border-cyan/40 bg-iris/10 backdrop-blur-[1.5px] shadow-[0_0_20px_rgba(34,211,238,0.25)]"
      >
        <div
          className="h-8 w-8 rounded-full"
          style={{
            background: isHovered
              ? "radial-gradient(circle, rgba(109,94,246,0.3) 0%, rgba(34,211,238,0.15) 100%)"
              : "transparent",
          }}
        />
        {hoverText && (
          <span className="absolute font-sans text-[8px] font-bold tracking-widest text-cyan uppercase">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.4 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
        className="pointer-events-none fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_#22d3ee]"
      />
    </div>
  );
}
