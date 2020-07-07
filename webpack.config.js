const path = require('path');

module.exports = {
    mode: 'development',
    // devtools: 'none',    // removes eval
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
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