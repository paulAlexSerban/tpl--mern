import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(() => {
    const config = {
        plugins: [react()],
        base: '/',
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
            },
        },
    };

    return config;
});
