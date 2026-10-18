import type { Config } from "tailwindcss";

/**
 * Design system — ONE place for colour, type and motion.
 * Dark cinematic: warm near-black canvas + off-white ink + ONE accent (marigold). Nothing else.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: { DEFAULT: "#0E0D0B", raise: "#161512", card: "#1C1A16" },
        line: "#2B2924",
        ink: { DEFAULT: "#F3EFE6", mute: "#A6A094", dim: "#6E695F" },
        accent: { DEFAULT: "#E8A33D", soft: "#F2C77E", deep: "#B97A1C" },
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      letterSpacing: { tightest: "-0.055em", label: "0.22em" },
      transitionTimingFunction: { out: "cubic-bezier(.22,1,.36,1)" },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: { marquee: "marquee 36s linear infinite" },
    },
  },
  plugins: [],
};
export default config;
