import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        secondary: "var(--color-secondary)",
        "secondary-light": "var(--color-secondary-light)",
        accent: "var(--color-accent)",
        "accent-light": "var(--color-accent-light)",
        muted: "var(--color-muted)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      animation: {
        "paw-float": "paw-float 4s ease-in-out infinite",
        "paw-pulse": "paw-pulse 2.5s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
      keyframes: {
        "paw-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "paw-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(126, 184, 164, 0.15), 0 8px 16px -6px rgba(126, 184, 164, 0.08)",
        card: "0 8px 32px -8px rgba(45, 42, 45, 0.08), 0 16px 48px -16px rgba(126, 184, 164, 0.12)",
        sticker:
          "0 2px 8px rgba(45, 42, 45, 0.06), 0 6px 16px -2px rgba(45, 42, 45, 0.08), 2px 4px 0 rgba(126, 184, 164, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
