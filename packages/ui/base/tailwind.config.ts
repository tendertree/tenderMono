import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./comp/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
                batang: "#F4E2DE",
                strong: "#D94F04",
                shine: "#F29325",
                mid: "#007172",
                dim: "#025259",
                whiteT: "#f6f6f6",
                dartT: '#3A3035',
                accent: "#FFFDFA",
                bacgroundImage: {
                    body: "url('/bg.png')",
				}

      },
    },
  },
  plugins: [],
};
export default config;
