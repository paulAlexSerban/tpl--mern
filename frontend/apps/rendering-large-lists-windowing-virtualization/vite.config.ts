import { PluginOption, defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fsPromise from 'node:fs/promises';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { createRequire } from 'node:module';

// Custom plugin to write package.json data to meta.json
const writeMetaPlugin = (): Plugin => {
    return {
        name: 'vite-plugin-write-meta',
        enforce: 'post',
        apply: 'build', // This ensures the plugin is only applied during build and not during serve
        writeBundle() {
            const packageJsonPath = path.resolve(__dirname, './package.json');
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
            // Define the data you want to include in meta.json
            const metaData = {
                name: packageJson?.formattedName,
                version: packageJson.version,
                description: packageJson.description,
                slug: PROJECT_NAME,
                // Add any other package.json data you wish to include
            };
            const outputPath = path.resolve(__dirname, 'dist', 'meta.json');
            // Ensure directory exists or create it
            fs.mkdirSync(path.dirname(outputPath), { recursive: true });
            fs.writeFileSync(outputPath, JSON.stringify(metaData, null, 2));
            console.log(`Meta data written to ${outputPath}`);
        },
    };
};

// same usage inside defineConfig
const WRONG_CODE = `import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";`;

function reactVirtualized(): PluginOption {
    return {
        name: 'flat:react-virtualized',
        // Note: we cannot use the `transform` hook here
        //       because libraries are pre-bundled in vite directly,
        //       plugins aren't able to hack that step currently.
        //       so instead we manually edit the file in node_modules.
        //       all we need is to find the timing before pre-bundling.
        configResolved: async () => {
            const require = createRequire(import.meta.url);
            const reactVirtualizedPath = require.resolve('react-virtualized');
            const { pathname: reactVirtualizedFilePath } = new url.URL(reactVirtualizedPath, import.meta.url);
            const file = reactVirtualizedFilePath.replace(
                path.join('dist', 'commonjs', 'index.js'),
                path.join('dist', 'es', 'WindowScroller', 'utils', 'onScroll.js')
            );
            const code = await fsPromise.readFile(file, 'utf-8');
            const modified = code.replace(WRONG_CODE, '');
            await fsPromise.writeFile(file, modified);
        },
    };
}

const packageJson = require('./package.json');
const PROJECT_NAME = packageJson.name.split('/').pop();
const BASE_URL = process.env.BASE_URL || '/';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    const config = {
        plugins: [react(), reactVirtualized(), writeMetaPlugin()],
        base: '/',
    };

    if (command !== 'serve') {
        config.base = `${BASE_URL}apps/${PROJECT_NAME}`;
    }

    return config;
});
