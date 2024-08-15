import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PT Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        "fade-out-down": "fade-out-down linear forwards",
        "make-it-bigger": "make-it-bigger linear forwards",
        typing:
          "typing 4s steps(40, end) 1s 1 normal both, blink .75s step-end infinite",
        fadeInUp: "fadeInUp 0.5s ease-out forwards",
      },
      keyframes: {
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0)",
          },
          to: {
            opacity: "0",
            transform: "translateY(40%)",
          },
        },
        "make-it-bigger": {
          "0%": {
            transform: "translateY(0%)",
          },
          "80%": {
            transform: "translateY(-30%)",
          },
          "90%": {
            transform: "translateY(-10%) scale(0.75)",
          },
          "100%": {
            transform: "translateY(0%) scale(0.5)",
            opacity: "0.6", // Convert number to string
            zIndex: "-1",
          },
        },
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "black" },
        },

        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      supports: {
        "no-scroll-driven-animations": "not(animation-timeline: scroll())",
      },
    },
  },
  plugins: [],
};

export default config;
