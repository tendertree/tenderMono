/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: ["@config/eslint-config/next.js", "plugin:storybook/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
    },
    ignorePatterns: ['tailwind.config.js', 'postcss.config.js'],
	overrides: [

    {
      files: ['*.ts', '*.tsx'], // Path to your server-side code
      rules: {
        'import/no-unused-modules': 'off', // Turn off export enforcement for server functions
      },
    },
  ],
}
