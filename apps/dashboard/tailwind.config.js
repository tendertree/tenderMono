
const baseConfig = require("@config/tailwind-config/tailwind-shadcn");

module.exports = {
    ...baseConfig,
    theme: {
        ...baseConfig.theme,
        extend: {
            ...baseConfig.theme.extend,
            colors: {
                ...baseConfig.theme.extend.colors,
                accent: "#591ddd",
                accent_secondary: "#8728e1",
                main: {
                    100: '#4287f5',
                },
                side: {
                    100: '#c1ecf5',
                },
                white: {
                    100: '#F3F4F6'
                },
                bacgroundImage: {
                    body: "url('/bg.png')",
                }
            },
        },
    },
};
