const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    context: path.join(__dirname, 'app'),
    entry: './index',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
