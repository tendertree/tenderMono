import type { Config } from 'tailwindcss'
const config: Config = {
    content: [
        '../../packages/ui/**/**/*.{ts,tsx,astro,md,mdx}',
        './index.html',
        './pages/**/*.{ts,tsx,astro,md,mdx}',
        './components/**/*.{ts,tsx,astro,md,mdx}',
        './app/**/*.{ts,tsx,astro,md,mdx}',
        './src/**/*.{ts,tsx,astro,md,mdx}',
        '../../packages/ui/shadcn/**/*.{ts,tsx}',
        '../../packages/ui/shadcn/utils.ts',
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
                //custom colors
                //
                accent: "#FFFDFA",
                accent_secondary: "#8728e1",

                bg: "#FFFDFA",
                strong: "#BB8493",
                mid: "#704264",
                light: "#DBAFA0",
                dark: "#49243E",
                darkWeak: "#613955",
                neutral: "#007172",

                whiteT: "#f6f6f6",
                dartT: '#3A3035',


                main: {
                    100: '#4287f5',
                },
                side: {
                    100: '#c1ecf5',
                },

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
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
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
    plugins: [require("tailwindcss-animate")],
}
export default config
