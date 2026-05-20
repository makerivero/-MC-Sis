import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#071017",
        panel: "#0c1820",
        aqua: "#3ee6ff",
        mint: "#63f6a7",
        violet: "#9b7cff",
        coral: "#ff8c6b"
      },
      boxShadow: {
        glow: "0 0 46px rgba(62, 230, 255, 0.14)",
        soft: "0 24px 80px rgba(0, 0, 0, 0.32)"
      },
      opacity: {
        6: "0.06",
        7: "0.07",
        8: "0.08",
        12: "0.12",
        14: "0.14",
        18: "0.18",
        22: "0.22",
        24: "0.24",
        28: "0.28",
        32: "0.32",
        35: "0.35",
        42: "0.42",
        45: "0.45",
        48: "0.48",
        52: "0.52",
        55: "0.55",
        58: "0.58",
        62: "0.62",
        64: "0.64",
        68: "0.68",
        74: "0.74",
        76: "0.76",
        78: "0.78"
      }
    }
  },
  plugins: []
};

export default config;
