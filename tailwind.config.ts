import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#295147",
          100: "#375C53",
          200: "#5C8D7F",
          300: "#82BEAB",
          400: "#A7EFD7",
          500: "#CCFFF3",
          600: "#D6FFFA",
          700: "#E0FFFF",
          800: "#EBFFFF",
          900: "#FBFBFB",
        },
        light: {
          DEFAULT: "#FEFEFE",
        },
        dark: {
          DEFAULT: "#000000",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
