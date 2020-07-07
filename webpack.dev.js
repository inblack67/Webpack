const path = require('path');
const defaultWebpack = require('./webpack.config');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(defaultWebpack, {
    mode: 'development',
    output: {
        // filename: '[name].js',
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html'
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                // use: ['style-loader', 'css-loader']
                use: [
                    'style-loader', // 3. injects to dom in style tags
                    'css-loader', // 2. css to commonjs
                    'sass-loader'   // 1. scss to css
                ]
            },
        ]
    }
})