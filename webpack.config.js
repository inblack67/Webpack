const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',    // no gibrish
    // devtools: 'none',    // removes eval
    entry: './src/index.js',
    output: {
        // to prevent cash busting, random name every time more like snapshots
        filename: 'main.[contentHash].js',
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
            }
        ]
    }
}