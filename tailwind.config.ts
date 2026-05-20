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
        ink: "#090b10",
        panel: "#111720",
        aqua: "#3ee6ff",
        mint: "#63f6a7",
        violet: "#9b7cff",
        coral: "#ff8c6b",
        amber: "#ffd166",
        rose: "#ff5c8a",
        lime: "#b8f35f",
        orange: "#ff9f1c",
        orchid: "#d66bff",
        steel: "#7aa8ff"
      },
      boxShadow: {
        glow: "0 0 46px rgba(62, 230, 255, 0.14)",
        soft: "0 24px 80px rgba(0, 0, 0, 0.32)"
      },
      opacity: {
        6: "0.06",
        7: "0.07",
        8: "0.08",
        9: "0.09",
        12: "0.12",
        14: "0.14",
        16: "0.16",
        18: "0.18",
        20: "0.20",
        22: "0.22",
        24: "0.24",
        28: "0.28",
        30: "0.30",
        32: "0.32",
        35: "0.35",
        36: "0.36",
        42: "0.42",
        45: "0.45",
        46: "0.46",
        48: "0.48",
        52: "0.52",
        55: "0.55",
        56: "0.56",
        58: "0.58",
        62: "0.62",
        64: "0.64",
        66: "0.66",
        68: "0.68",
        72: "0.72",
        74: "0.74",
        76: "0.76",
        78: "0.78",
        82: "0.82",
        92: "0.92"
      }
    }
  },
  plugins: []
};

export default config;
