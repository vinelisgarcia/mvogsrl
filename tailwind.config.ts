import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090b0f",
        coal: "#111827",
        steel: "#374151",
        pearl: "#f8fafc",
        gold: "#d6b25e",
        navy: "#0b1f3a"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(9, 11, 15, 0.18)"
      }
    },
  },
  plugins: [],
};

export default config;
