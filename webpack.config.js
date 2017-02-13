const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    context: path.join(__dirname, 'app'),
    entry: {
        main: './index',
        vendor: [
            'react',
            'react-dom',
            'redux',
            'react-redux',
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendors.js',
            minChunks: Infinity
        })
    ],
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
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.scss', '.js', '.jsx']
    }
};
