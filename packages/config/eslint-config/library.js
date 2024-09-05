const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: ["eslint:recommended", "prettier", "turbo"],
    plugins: ["only-warn"],
    globals: {
        React: true,
        JSX: true,
    },
    env: {
        node: true,
    },
    settings: {
        "import/resolver": {
            typescript: {
                project,
            },
        },
    },
    ignorePatterns: [
        // Ignore dotfiles
        ".*.js",
        "node_modules/",
        "dist/",
    ],
    overrides: [
        {
            files: ["*.js?(x)", "*.ts?(x)"],
        },
        {
            files: [
                "../../entity/**/**/*.js",
                "../../entity/**/**/*.ts",
            ],
            rules: {
                '@typescript-eslint/no-unused-vars': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                'import/no-unresolved': 'off',
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/no-require-imports': 'off',
            }
        }
    ],
};
