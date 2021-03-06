/**
 * @file skeleton conf
 * @author panyuqi (pyqiverson@gmail.com)
 */

/* eslint-disable fecs-no-require */

'use strict';

const webpack = require('webpack');
const path = require('path');
const utils = require('./utils');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, dir);
}

let webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: false,
            extract: true
        })
    },
    devtool: false,
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                sassLoader: {
                    data: '@import "src/styles/variables.scss";',
                    includePaths: 'src/styles'
                },
                context: path.resolve(__dirname)
            }
        }),

        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].css')
        }),

        new HtmlWebpackPlugin({
            filename: utils.assetsPath('../index.html'),
            template: path.join(__dirname, './index.html'),
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        })
    ]
});

module.exports = webpackConfig;
