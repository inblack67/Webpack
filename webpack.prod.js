const path = require('path');
const defaultWebpack = require('./webpack.config');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OpitmizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(defaultWebpack, {
    mode: 'production',  
    output: {
        // filename: '[name].[contentHash].js',
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [new OpitmizeCssAssetsPlugin(),
        new TerserPlugin(),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            minify: {
                removeAttributeQuotes: true,
                removeComments: true,
                collapseWhitespace: true
            }
        })],

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