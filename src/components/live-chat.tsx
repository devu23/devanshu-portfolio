"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * A replay of the Neev flow (demo builder "Aarambh Realty").
 * Stages advance on a timer only while the block is on screen, then loop.
 * Reduced motion = everything shown at once, no timer.
 */
type Msg = { from: "buyer" | "ai"; text: string; time: string };

const script: Msg[] = [
  { from: "buyer", text: "Hi, what's the price of a 3BHK in Aarambh Heights?", time: "10:42" },
  { from: "ai", text: "Hello! 3BHK at Aarambh Heights starts at ₹1.35 Cr. May I have your name, and when would you like to visit?", time: "10:42" },
  { from: "buyer", text: "Rahul. Sunday works.", time: "10:43" },
  { from: "ai", text: "Thanks Rahul! Brochure sent 📄 Our team will call you shortly to confirm Sunday.", time: "10:43" },
];

// stage → what is visible: 1 buyer, 2 typing, 3 ai, 4 buyer, 5 typing, 6 ai, 7 owner alert
const LAST = 7;
const msgsAt = (s: number) => (s >= 6 ? 4 : s >= 4 ? 3 : s >= 3 ? 2 : s >= 1 ? 1 : 0);
const stepAt = (s: number) => (s >= 7 ? 3 : s >= 6 ? 2 : s >= 2 ? 1 : 0);

const steps = [
  "Buyer messages on WhatsApp",
  "AI replies in seconds and asks the right questions",
  "AI calls the buyer back",
  "Owner gets an alert, lead lands in the register",
];

export function LiveChat() {
  const ref = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);
  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage(LAST);
      return;
    }
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { threshold: 0.35 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!onScreen) return;
    const delay = stage === 0 ? 500 : stage === LAST ? 4200 : stage === 2 || stage === 5 ? 1300 : 1100;
    const t = setTimeout(() => setStage((s) => (s >= LAST ? 0 : s + 1)), delay);
    return () => clearTimeout(t);
  }, [stage, onScreen]);

  const shown = script.slice(0, msgsAt(stage));
  const typing = stage === 2 || stage === 5;

  return (
    <div ref={ref} className="grid gap-8 rounded-[10px] border border-line bg-canvas-raise p-4 sm:p-8 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-14">
      {/* phone */}
      <div className="overflow-hidden rounded-[22px] border border-line bg-[#0b141a]">
        <div className="flex items-center gap-3 bg-[#1f2c34] px-4 py-3 text-white">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-accent text-[0.8125rem] font-bold text-canvas">AR</div>
          <div className="leading-tight">
            <p className="text-[0.875rem] font-semibold">Aarambh Realty</p>
            <p className="text-[0.6875rem] text-white/80">{typing ? "typing…" : "online"}</p>
          </div>
        </div>
        <div className="flex min-h-[20.625rem] flex-col gap-2.5 p-3.5" aria-live="polite">
          {shown.map((m, i) => (
            <div
              key={i}
              className={cn(
                "pop max-w-[82%] rounded-lg px-3 py-2 text-[0.8438rem] leading-snug",
                m.from === "buyer" ? "self-start rounded-tl-none bg-[#1f2c34] text-[#E9EDEF]" : "self-end rounded-tr-none bg-[#005c4b] text-[#E9EDEF]"
              )}
            >
              {m.text}
              <span className="ml-2 align-bottom text-[0.625rem] text-[#8696A0]">{m.time}</span>
            </div>
          ))}
          {typing && (
            <div className="pop flex gap-1 self-end rounded-lg bg-[#005c4b] px-3 py-2.5">
              {[0, 1, 2].map((d) => (
                <span key={d} className="h-1.5 w-1.5 rounded-full bg-[#8696A0]" style={{ animation: `dots 1s ${d * 0.15}s infinite` }} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* what happens */}
      <div className="flex flex-col justify-between gap-8">
        <div>
          <span className="label text-accent">Demo replay · the live system</span>
          <p className="mt-3 max-w-md text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-tight tracking-[-0.03em]">
            First reply in <span className="font-serif font-normal italic text-accent">seconds</span>, day or night.
          </p>
          <ol className="mt-6 space-y-3">
            {steps.map((s, i) => (
              <li key={s} className={cn("flex items-start gap-4 text-[0.9375rem] transition-colors duration-500", i <= stepAt(stage) ? "text-ink" : "text-ink-dim")}>
                <span className={cn("mt-0.5 font-mono text-[0.75rem]", i <= stepAt(stage) ? "text-accent" : "text-ink-dim")}>0{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
        </div>

        <div
          className={cn(
            "rounded-[10px] border p-4 transition-all duration-700 ease-out",
            stage >= LAST ? "translate-y-0 border-accent/50 bg-accent/10 opacity-100" : "translate-y-3 border-line opacity-30"
          )}
        >
          <p className="label text-accent">Owner alert</p>
          <p className="mt-2 text-[0.9062rem] leading-relaxed">
            New lead: <b>Rahul</b> · 3BHK, Aarambh Heights · visit Sunday
            <br />
            <span className="text-ink-mute">AI call-back started · saved to the lead register</span>
          </p>
        </div>
      </div>
    </div>
  );
}
