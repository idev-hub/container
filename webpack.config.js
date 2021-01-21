const path = require('path');
const miniCss = require('mini-css-extract-plugin');

const publicPath = '';

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'assets'),
        publicPath: publicPath
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|)$/,
                loader: "file-loader",
                options: {
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                },
            }
        ]
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
    ]
};