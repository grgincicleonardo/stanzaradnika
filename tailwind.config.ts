import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      main: "#0b9fde",
      white: "#FFFFFF",
      dark: "#1A1A1A",
      body: "#6e6e6e",
    },

    fontSize: {
      xs: [
        "14px",
        { lineHeight: "1.2em", letterSpacing: "-0.03em", fontWeight: "400" },
      ],
      base: ["16px", { lineHeight: "1.61em" }],
      md: ["1.314rem", { lineHeight: "1.4em" }],
      lg: ["1.999rem", { lineHeight: "1.2em" }],
      xl: ["2.827rem", { lineHeight: "1.2em" }],
      xxl: ["3.998rem", { lineHeight: "1.2em", fontWeight: "500" }],
      huge: ["5.653rem", { lineHeight: "1.2em" }],
      title: ["7.993rem", { lineHeight: "1.2em" }],
    },
    container: {
      padding: "20px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1360px",
        desktop: "1440px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
