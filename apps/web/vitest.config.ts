import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import path from 'path'

export default defineConfig({
    plugins: [react() as any], // Add type assertion here
    test: {
        environment: 'jsdom',
        setupFiles: [path.resolve(__dirname, './src/__tests__/setup.ts')],

        css: true,
        globals: true,
        alias: {
            '@src': './src',
            '@test': './src/test',
        },
        root: './',
    },
    resolve: {
        alias: {
            '@src': './src',
            '@test': './src/test',
        },
    },
})

