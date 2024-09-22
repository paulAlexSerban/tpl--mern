const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');

const NODE_ENV = process.env.NODE_ENV || 'development';

const input = [
    './src/index.ts',
    './src/atoms/Color/index.ts',
    './src/atoms/Paragraph/index.ts',
    './src/atoms/Margin/index.ts',
    './src/atoms/Heading/index.ts',
    './src/atoms/Button/index.ts',
    './src/molecules/Select/index.ts',
    './src/organisms/Header/index.ts',
];

const plugins = [typescript()];

if (NODE_ENV === 'production') {
    plugins.push(terser());
}

module.exports = {
    input,
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
    },
    plugins,
    external: ['react', '@wbk--mern-playground/shared-foundation'],
};
