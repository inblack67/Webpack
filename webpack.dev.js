const path = require('path');
const defaultWebpack = require('./webpack.config');
const { merge } = require('webpack-merge');

module.exports = merge(defaultWebpack, {
    mode: 'development',
    output: {
        // filename: '[name].js',
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
})