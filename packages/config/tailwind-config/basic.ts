import type { Config } from 'tailwindcss'
const config: Config = {
	darkMode: ['class', '[data-mode="dark"]'],
    content: [
        '../../packages/ui/**/**/*.{ts,tsx,astro}',
        './index.html',
        './pages/**/*.{ts,tsx,astro,md,mdx}',
        './components/**/*.{ts,tsx,astro,md,mdx}',
        './app/**/*.{ts,tsx,astro,md,mdx}',
        './src/**/*.{ts,tsx,astro,md,mdx}',
        '../../packages/ui/main/**/*.{ts,tsx}',
        '../../packages/ui/main/utils.ts',
    ], theme: {
        container: {
            center: true,
            padding: "2rem",
        },
        screens: {
            "sm": "640px",
            "md": "760px",
            "lg": "960px",
            "xl": "1280px",
            "2xl": "1400px",
        },

        extend: {
            colors: {
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
                },

                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
export default config
