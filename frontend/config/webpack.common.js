const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const getPath = require('./util/getPath');
const root = require('./util/getRoot');

const options = {
    entry: {
        app: [
            root(getPath('js', true) + 'main.js')
        ]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },

    plugins: [
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
        })
    ]
};

module.exports = options;
