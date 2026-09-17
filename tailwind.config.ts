import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0A0A0F", soft: "#101018", card: "#14141C", line: "#23232E" },
        fog: { DEFAULT: "#EDEDF2", muted: "#9A9AA8", dim: "#6B6B78" },
        iris: { DEFAULT: "#6D5EF6", light: "#9C8CFF", deep: "#4B3ED1" },
        cyan: { DEFAULT: "#22D3EE", deep: "#0EA5C4" },
        amber: "#E9B44C",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: { luxe: "0.2em", wide2: "0.32em" },
      boxShadow: {
        card: "0 24px 60px -28px rgba(0,0,0,0.7)",
        glow: "0 0 0 1px rgba(109,94,246,0.3), 0 20px 60px -20px rgba(109,94,246,0.45)",
      },
      backgroundImage: {
        "iris-cyan": "linear-gradient(100deg, #6D5EF6, #22D3EE)",
        "grid-fade":
          "linear-gradient(to bottom, rgba(109,94,246,0.06), transparent 60%)",
      },
      keyframes: {
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        shimmer: "shimmer 3.5s linear infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
