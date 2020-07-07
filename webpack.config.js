const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
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
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'images',
                        esModule: false
                    }
                }
            },
        ]
    }
}