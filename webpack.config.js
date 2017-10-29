const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const exclude = /(node_modules|bower_components)/;

const plugins = [
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [autoprefixer({
                browsers: ['last 2 versions']
            })]
        }
    }),
    new ExtractTextPlugin({
        filename: 'bundle.css',
        allChunks: true
    }),
    new HtmlWebpackPlugin({
        inject: true,
        template: './src/index.html'
    })
];

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: [{
                loader: 'html-loader'
            }]
        }, {
            test: /\.js$/,
            exclude: exclude,
            enforce: 'pre',
            use: [{
                loader: 'eslint-loader'
            }]
        }, {
            test: /\.js$/,
            exclude: exclude,
            use: [{
                loader: 'babel-loader'
            }]
        }, {
            test: /\.css$/,
            exclude: exclude,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader?sourceMap'
                },
                {
                    loader: 'postcss-loader'
                }
            ]
        }, {
            test: /\.(scss|sass)$/,
            exclude: exclude,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: true
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            })
        }, {
            test: /\.(woff2|woff|ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: 'assets/fonts/[name]_[hash].[ext]'
                }
            }]

        }, {
            test: /\.(jpe?g|png|gif)$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    name: 'assets/images/[name]_[hash].[ext]',
                    limit: 10000
                }
            }]
        }]
    },
    plugins: plugins,
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        stats: 'errors-only',
        inline: true,
        port: 3020
    }
};

module.exports = config;
