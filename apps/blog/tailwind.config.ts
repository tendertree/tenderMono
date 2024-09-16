const baseConfig = require("@config/tailwind-config/tailwind-shadcn");
module.exports = {
    ...baseConfig,
    theme: {
        ...baseConfig.theme,
        fontFamily: {
            primary: "var(--font-noto)",
            secondary: "var(--font-nanum)",
        },
        extend: {
            ...baseConfig.theme.extend,
            colors: {
                ...baseConfig.theme.extend.colors,
                batang: "#F4E2DE",
                strong: "#D94F04",
                shine: "#F29325",
                mid: "#007172",
                dim: "#025259",
                whiteT: "#f6f6f6",
                dartT: '#3A3035',
                accent: "#FFFDFA",
                accent_secondary: "#8728e1",
                main: {
                    100: '#4287f5',
                },
                side: {
                    100: '#c1ecf5',
                },

                bacgroundImage: {
                    body: "url('/bg.png')",
                },
                white: {
                    100: '#FAF9F6',
                },
            },
        },
    },
};
