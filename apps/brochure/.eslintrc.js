/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: ["@config/eslint-config/next.js", "plugin:storybook/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: ["./tsconfig.json"], // Specify the path to your tsconfig.json
        tsconfigRootDir: __dirname,
    },
    ignorePatterns: [
        'tailwind.config.js',
        'postcss.config.js',
        '**/node_modules/**',
        '**/dist/**',
        '**/.next/**',
    ],
    settings: {
        "import/resolver": {
            typescript: {
                project: ["./tsconfig.json"], // Specify the path to your tsconfig.json
            },
        },
    },
}
