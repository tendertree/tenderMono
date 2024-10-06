const baseConfig = require("@config/tailwind-config/basic");
module.exports = {
    ...baseConfig,
	darkMode: 'class',
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
             
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwindcss-animate")
    ]
};

