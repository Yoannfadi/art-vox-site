import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blueprint palette — dark luxe noir / or
        bg: "#080808", // noir absolu
        bg2: "#111111", // noir chaud
        gold: "#D4AF72", // accent principal
        goldBright: "#EAC97A", // accent secondaire
        ivory: "#F2F0EB", // texte principal
        silver: "#9E9E9E", // texte secondaire

        // Aliases conservés pour compatibilité avec l'ancien code re-skinné
        ink: "#080808",
        "ink-2": "#111111",
        surface: "#111111",
        cream: "#F2F0EB",
        muted: "#9E9E9E",
        "gold-light": "#EAC97A",
      },
      fontFamily: {
        // Titres de section & emphase — prestige
        display: ["var(--font-display)", "Georgia", "serif"],
        // Hero display & citations — élégance
        serif: ["var(--font-serif)", "Georgia", "serif"],
        // Corps, nav, labels, boutons
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      borderColor: {
        hairline: "rgba(212,175,114,0.18)",
      },
      backgroundColor: {
        card: "rgba(255,255,255,0.04)",
      },
      boxShadow: {
        glow: "0 10px 40px -10px rgba(212,175,114,0.35)",
        "glow-soft": "0 0 0 1px rgba(212,175,114,0.18), 0 12px 40px -12px rgba(212,175,114,0.25)",
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px) translateX(8px)" },
          "100%": { opacity: "1", transform: "translateY(0) translateX(0)" },
        },
        "wave-pulse": {
          "0%, 100%": { transform: "scaleY(0.4)", opacity: "0.55" },
          "50%": { transform: "scaleY(1)", opacity: "1" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        "cursor-pulse": {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)", opacity: "0.7" },
          "50%": { transform: "translate(-50%, -50%) scale(1.6)", opacity: "0.35" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "ken-burns": "ken-burns 18s ease-in-out infinite alternate",
        "cursor-pulse": "cursor-pulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
