import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#f5f7fb",
        ink: "#14213d",
        muted: "#6b7280",
        line: "#e5e7eb",
        primary: {
          DEFAULT: "#167a5a",
          dark: "#0f5f46",
          soft: "#e8f6f0",
        },
      },
      boxShadow: {
        panel: "0 16px 40px rgba(15, 23, 42, 0.08)",
      },
      borderRadius: {
        panel: "18px",
      },
    },
  },
  plugins: [],
};

export default config;
