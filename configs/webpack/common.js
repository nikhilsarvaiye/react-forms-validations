// shared config (dev and prod)
const { resolve } = require('path');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@util': path.resolve('./src/library/utils'),
            '@library': path.resolve('./src/library'),
            '@core': path.resolve('./src/library/components/core'),
            '@modules': path.resolve('./src/modules'),
            '@shared': path.resolve('./src/modules/shared'),
            styles: path.resolve('./src/library/styles'),
            // below two alias added to avoid error of `loaded two copies of React`
            // as we are using extenal react component using npm link
            // npm link only links specified build folder, does not packages
            // TODO [NS]: remove this once we starting using it as published npm package
            // react: path.resolve('./node_modules/react'),
            // 'react-dom': path.resolve('./node_modules/react-dom'),
        },
    },
    context: resolve(__dirname, '../../src'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                ],
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'sass-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                        },
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
                ],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
    performance: {
        hints: false,
    },
};
