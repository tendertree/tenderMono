
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
                neutral: "#007172",
                dark: "#49243E",
				darkWeak: "#613955",
				textWhite:"#f6f6f6",
				textDark: '#3A3035',

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
                    100: '#FAF9F6', // 요청하신 대로 변경됨
                },
            },
        },
    },
};
