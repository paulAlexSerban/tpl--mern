// import required dependencies
const glob = require('glob');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const constants = require('./paths');
const ESLintPlugin = require('eslint-webpack-plugin');

const hbsEntries = glob.sync(path.join(constants.SRC_DIR, 'markup', 'system', 'pages', '*.hbs'));

const generateHTMLWebpackPluginPages = (hbsEntries) => {
    return hbsEntries.reduce((accumulator, hbsEntry) => {
        const variationName = hbsEntry.split('/').slice(-1)[0].split('.')[0];
        accumulator[variationName] = new HtmlWebpackPlugin({
            template: hbsEntry,
            filename: path.join(constants.DIST_DIR, `${variationName}.html`),
            inject: false,
        });
        return accumulator;
    }, {});
};

// export webpack configuration
module.exports = {
    entry: {
        index: [
            path.join(constants.SRC_DIR, 'js', 'system', 'pages', 'main.entry.js'),
            path.join(constants.SRC_DIR, 'scss', 'system', 'pages', 'main.entry.scss'),
        ],
        bootstrap: [path.join(constants.SRC_DIR, 'scss', 'vendor', 'bootstrap', 'bootstrap.entry.scss')],
    },
    output: {
        filename: 'scripts/[name].js',
        path: constants.DIST_DIR,
        publicPath: process.env.PUBLIC_PATH || '/',
        clean: true,
    },
    module: {
        rules: [
            {
                // use babel to transpile JavaScript code
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
            {
                // use handlebars to compile HTML templates
                test: /\.hbs$/,
                use: [
                    {
                        loader: 'handlebars-loader',
                    },
                ],
            },
            {
                // use CSS and Sass loaders to compile CSS stylesheets
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                // use asset modules to handle text assets
                test: /\.(txt)$/,
                type: 'asset/source',
            },
        ],
    },
    // configure plugins
    plugins: [
        // use eslint to lint JavaScript code
        new ESLintPlugin(),
        // extract CSS styles into separate files
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
        }),
        // clean the output directory before building
        new CleanWebpackPlugin(),
        // show progress during build process
        new webpack.ProgressPlugin(),
        // copy assets directory from one directory to another
        // new CopyWebpackPlugin({
        //     patterns: [{ from: path.join(constants.SRC_DIR, "public"), to: "public" }],
        // }),
        // generate HTML file using *.hbs files as source
        ...Object.values(generateHTMLWebpackPluginPages(hbsEntries)),
    ],
};
