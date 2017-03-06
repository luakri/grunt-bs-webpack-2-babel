const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const getPath = require('./util/getPath');
const root = require('./util/getRoot');

const moduleOptions = {
    devtool: false,

    output: {
        path: root(getPath('js', false, true)),
        filename: 'main.js',
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                'drop_console': true
            }
        })
    ],
};

const options = webpackMerge(commonConfig, moduleOptions);

module.exports = options;
