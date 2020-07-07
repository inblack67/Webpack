const path = require('path');
const defaultWebpack = require('./webpack.config');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(defaultWebpack, {
    mode: 'production',  
    output: {
        // filename: '[name].[contentHash].js',
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new MiniCSSExtractPlugin({ filename: '[name].[contentHash].css' }), new CleanWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader' 
                ]
            },
        ]
    }
})