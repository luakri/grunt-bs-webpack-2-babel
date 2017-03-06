const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('../../config/webpack.dev');
const config = require('../../config/index');
const getPath = require('../../config/util/getPath');

const argv = require('minimist')(process.argv.slice(2));
const isProd = (!argv.isProd) ? false : true;

module.exports = function(grunt) {

    grunt.registerTask('browsersync', function() {
        const done = this.async();
        let middlewares = [];

        // Developer mode - add Webpack Middleware.
        if (!isProd) {
            const compiler = webpack(webpackConfig);

            middlewares.push(webpackMiddleware(compiler, {
                publicPath: webpackConfig.output.publicPath,
                stats: {
                    colors: true,
                    hash: false,
                    timings: true,
                    chunks: false,
                    chunkModules: false,
                    modules: false
                }
            }));

            middlewares.push(webpackHotMiddleware(compiler));
        }

        browserSync({
            server: {
                baseDir: getPath('dest'),
                middleware: middlewares
            },
            port: config.browserPort,
            ui: {
                port: config.UIPort
            },
            ghostMode: {
                links: false
            },
            files: [
                getPath('css', false, true) + '**/*.css',
                getPath('dest') + '**/*.html',
                getPath('js', false, true) + 'vendor/**/*.js'
            ]
        }, function () {
            done();
        });
    });
};
