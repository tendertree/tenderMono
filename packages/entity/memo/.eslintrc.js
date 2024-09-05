/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: ["@config/eslint-config/library.js"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
    },
    ignorePatterns: ['tailwind.config.js', 'postcss.config.js'],
};