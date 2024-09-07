
const baseConfig = require("@config/tailwind-config/tailwind-shadcn");

module.exports = {
    ...baseConfig,
    theme: {
        ...baseConfig.theme,
        extend: {
            ...baseConfig.theme.extend,
            colors: {
                ...baseConfig.theme.extend.colors,
                accent: "#FFFDFA",
                accent_secondary: "#8728e1",

                bg: "#FFFDFA",
                strong: "#D94F04",
                mid: "#F29325",
                light: "#F4E2DE",
                dark: "#025259",
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
