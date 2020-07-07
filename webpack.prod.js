const path = require('path');
const defaultWebpack = require('./webpack.config');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(defaultWebpack, {
    mode: 'production',  
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new CleanWebpackPlugin()]
})