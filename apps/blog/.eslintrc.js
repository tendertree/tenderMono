/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: ["@config/eslint-config/next.js", "plugin:storybook/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
    },
    ignorePatterns: ['tailwind.config.js', 'postcss.config.js'],
};
