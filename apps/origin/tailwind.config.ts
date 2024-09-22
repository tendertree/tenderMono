const baseConfig = require("@config/tailwind-config/basic");
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


                bacgroundImage: {
                    body: "url('/bg.png')",
                },
                white: {
                    100: '#FAF9F6',
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwindcss-animate")
    ]
};

