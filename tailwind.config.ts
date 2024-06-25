import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "intro-bg": "url('/images/intro-mobile-bg.png')",
        linear:
          "linear-gradient(180deg, #7000FF -54.84%, rgba(112, 0, 255, 0.49) -54.82%, rgba(112, 0, 255, 0.96) 23.46%, rgba(83, 10, 178, 0.42) 105.09%)",
      },
    },
  },
  plugins: [],
};
export default config;
