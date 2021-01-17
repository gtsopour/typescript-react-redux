const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle-dev.js',
        path: path.resolve(__dirname, '..', 'public')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json', '.html'],
        modules: ['node_modules', path.resolve(__dirname, '..', 'src')]
    },
    resolveLoader: {
        modules: ['node_modules']
    },
    devServer: {
        inline: true,
        contentBase: 'public/',
        port: 3000,
        proxy: [
            {
                path: '/api/*',
                target: 'http://localhost:3000/'
            }
        ],
        historyApiFallback: true,
        open: true,
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader',
            },
            {
                test: /\.css$/,
                exclude: /\.useable\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: 'html-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            hash: true
        })
    ]
};
