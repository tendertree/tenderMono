
const baseConfig = require("@config/tailwind-config/tailwind-shadcn");

module.exports = {
    ...baseConfig,
    theme: {
        ...baseConfig.theme,
        extend: {
            ...baseConfig.theme.extend,
            colors: {
                ...baseConfig.theme.extend.colors,
                main: {
                    100: '#4287f5',
                },
                side: {
                    100: '#c1ecf5',
                },
            },
        },
    },
};
