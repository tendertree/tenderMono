import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'node', // Use 'jsdom' for browser-like environment, 'node' for Node.js
        globals: true, // If you want to use global variables
        testTimeout: 30000, // Optional: Set a global timeout for tests
        include: ['src/**/*.test.ts', 'src/**/*.test.tsx'], // Adjust the glob patterns according to your file structure
    },
});

