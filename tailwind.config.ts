import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        ink: "var(--color-ink)",
        white: "var(--color-white)",
        muted: "var(--color-muted)",
      },
      fontFamily: {
        display: ["var(--font-lilita)", "sans-serif"],
        accent: ["var(--font-anton)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        hard: "6px 6px 0 #003057",
        "hard-lg": "8px 8px 0 #003057",
      },
    },
  },
  plugins: [],
};

export default config;
