"use client";

import { useEffect, useRef, useState } from "react";
import { getImageProps } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { identity, bookingHref } from "@/data/site";
import { MagLink, Arrow } from "./mag-link";
import { cn } from "@/lib/utils";

/**
 * Cinematic hero: full-screen portrait, name on top, promise + CTA bottom-left.
 * 1. Text is server-rendered and animates in with pure CSS (.rise) — visible even if JS is slow.
 * 2. When the portrait has decoded, a light band sweeps it once (the "flash") and the exposure settles.
 * 3. The light and colour come from the photo itself (studio-lit Gemini portrait) — no extra darkening layers.
 * 4. Edge gradients keep text readable; nothing is drawn over the face.
 * 5. On scroll the photo drifts down slightly (parallax) and the name fades up.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [lit, setLit] = useState(false);
  const [flashing, setFlashing] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Safety net: never leave the photo hidden if onLoad is missed.
  useEffect(() => {
    const t = setTimeout(() => setLit(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const onPhotoLoad = (img: HTMLImageElement) => {
    const go = () =>
      requestAnimationFrame(() => {
        setLit(true);
        setFlashing(true);
        setTimeout(() => setFlashing(false), 1700);
      });
    if (img.decode) img.decode().then(go, go);
    else go();
  };

  // Art direction: same alt, two crops. fill = positioned absolutely inside the motion.div.
  const common = { alt: `${identity.name}, portrait`, fill: true, priority: true, quality: 90 };
  const { props: { srcSet: wideSrcSet } } = getImageProps({ ...common, src: identity.heroPhotoWide, sizes: "100vw" });
  const { props: tall } = getImageProps({ ...common, src: identity.heroPhoto, sizes: "100vw" });
  const wide = { srcSet: wideSrcSet };

  return (
    <section
      ref={ref}
      id="top"
      className={cn("relative isolate min-h-[100svh] overflow-hidden bg-[#131111] lg:h-[100svh] lg:min-h-[40rem]", flashing && "is-flashing")}
    >
      {/* Section bg = the photos' own backdrop colour (#131111), so any edge disappears. */}

      <div className="wrap flex min-h-[100svh] flex-col pb-12 pt-28 sm:pt-32 lg:h-full lg:min-h-0 lg:pb-14">
        {/* name + role, centred on top */}
        <motion.div style={{ y: nameY, opacity: nameOpacity }} className="relative z-10 text-center">
          <h1 className="rise font-sans font-black uppercase leading-[0.86] tracking-tightest [text-shadow:0_2px_40px_rgba(20,8,0,.45)] text-[15vw] sm:text-[clamp(3rem,8.4vw,8rem)]">
            <span className="block sm:inline">{identity.first}</span> <span className="block sm:inline">{identity.last}</span>
          </h1>
          <p className="rise mt-4 text-[0.875rem] font-medium text-ink/85 [text-shadow:0_1px_12px_rgba(20,8,0,.6)] sm:text-[1rem]" style={{ ["--d" as string]: "150ms" }}>
            {identity.role}
          </p>
        </motion.div>

        {/* portrait: full-screen behind the text. <picture> serves the wide 3:2 image on desktop and the
            4:5 image on phones, so each device downloads only its own file. Text over the photo is fine. */}
        <motion.div style={{ y: photoY }} className="absolute inset-0 -z-10">
          <picture>
            <source media="(min-width: 1024px)" srcSet={wide.srcSet} sizes="100vw" />
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img
              {...tall}
              onLoad={(e) => onPhotoLoad(e.currentTarget)}
              className={cn("hero-photo object-cover object-[50%_20%] lg:object-[70%_0%]", lit && "is-lit")}
            />
          </picture>
          {/* readability fades in the backdrop colour */}
          {/* only what the text needs: a thin top fade under the nav + a bottom fade behind the promise.
              The photo itself carries the light — no extra darkening layers. */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#131111]/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#131111] via-[#131111]/40 to-transparent lg:h-[30%]" />
          {/* the flash */}
          <div className="flash-wash inset-0 bg-[#fff6e6]" />
          <div className="flash-band -inset-y-10 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-md" />
        </motion.div>

        {/* promise + actions, bottom-left */}
        <div className="relative z-10 mt-auto flex flex-col gap-8 pt-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="rise max-w-xl text-[clamp(1.7rem,3.6vw,3rem)] font-semibold leading-[1.05] tracking-[-0.035em]" style={{ ["--d" as string]: "320ms" }}>
              Websites that bring customers.
              <br />
              <em className="font-serif font-normal italic text-accent">AI that answers every lead.</em>
            </p>
            <div className="rise mt-7 flex flex-wrap items-center gap-3" style={{ ["--d" as string]: "460ms" }}>
              <MagLink href={bookingHref}>
                Book a call <Arrow />
              </MagLink>
              <MagLink href="#work" variant="line">
                See the work
              </MagLink>
            </div>
            <div className="rise mt-6 flex gap-6 text-[0.8125rem] text-ink/80" style={{ ["--d" as string]: "560ms" }}>
              <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
                LinkedIn <Arrow className="h-3 w-3" />
              </a>
              <a href={identity.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
                GitHub <Arrow className="h-3 w-3" />
              </a>
            </div>
          </div>
          <p className="rise label hidden lg:block" style={{ ["--d" as string]: "560ms" }}>
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
            {identity.company} · {identity.location}
          </p>
        </div>
      </div>

      {/* hand-off into the page's warm black */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-canvas to-transparent" />
    </section>
  );
}
