
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
                accent: "#FFFDFA",
                accent_secondary: "#8728e1",

                bg: "#FFFDFA",
                strong: "#BB8493",
                mid: "#704264",
                light: "#DBAFA0",
                dark: "#49243E",
                neutral: "#007172",


                main: {
                    100: '#4287f5',
                },
                side: {
                    100: '#c1ecf5',
                },

                bacgroundImage: {
                    body: "url('/bg.png')",
                }
            },
        },
    },
};
