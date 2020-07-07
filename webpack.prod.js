const path = require('path');
const defaultWebpack = require('./webpack.config');
const { merge } = require('webpack-merge');

module.exports = merge(defaultWebpack, {
    mode: 'production',  
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    },
})