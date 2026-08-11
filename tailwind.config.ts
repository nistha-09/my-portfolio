import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FAF8F4",
        ink: "#262220",
        muted: "#6B6560",
        accent: "#A85C43",
        accentmuted: "#EFE2DA",
        line: "#E5DFD7",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1160px",
      },
    },
  },
  plugins: [],
};

export default config;
