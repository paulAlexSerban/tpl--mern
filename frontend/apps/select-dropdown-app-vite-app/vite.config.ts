import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';
import path from 'path';

// const packageJson = require('./package.json');
// const PROJECT_NAME = packageJson.name.split('/').pop();
// const BASE_URL = process.env.BASE_URL || '/';

// // Custom plugin to write package.json data to meta.json
// const writeMetaPlugin = (): Plugin => {
//     return {
//         name: 'vite-plugin-write-meta',
//         enforce: 'post',
//         apply: 'build', // This ensures the plugin is only applied during build and not during serve
//         writeBundle() {
//             const packageJsonPath = path.resolve(__dirname, './package.json');
//             const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
//             // Define the data you want to include in meta.json
//             const metaData = {
//                 name: packageJson?.formattedName,
//                 version: packageJson.version,
//                 description: packageJson.description,
//                 slug: PROJECT_NAME,
//                 // Add any other package.json data you wish to include
//             };
//             const outputPath = path.resolve(__dirname, 'dist', 'meta.json');
//             // Ensure directory exists or create it
//             fs.mkdirSync(path.dirname(outputPath), { recursive: true });
//             fs.writeFileSync(outputPath, JSON.stringify(metaData, null, 2));
//             console.log(`Meta data written to ${outputPath}`);
//         },
//     };
// };

const PORT = parseInt(process.env.PORT) || 3000;

if (isNaN(PORT)) {
    throw new Error('Invalid PORT');
}

export default defineConfig(() => {
    const config = {
        plugins: [react()],
        base: '/',
        server: {
            port: PORT,
        },
        preview: {
            port: PORT,
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
            },
        },
    };

    return config;
});
