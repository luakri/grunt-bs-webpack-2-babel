process.env.BABEL_ENV = 'test';

const config = require('./index');
const webpackConfig = require('./webpack.dev.js');

const jsApp = config.PATHS.JS;

const testGlob = jsApp + '**/*.test.js';
const srcGlob = jsApp + '**/!(*.test|*.stub).js';

// webpack chunkNames not compatible with karma.
const commonsChunkPluginIndex = webpackConfig.plugins.findIndex(plugin => plugin.chunkNames);
webpackConfig.plugins.splice(commonsChunkPluginIndex, 1);

module.exports = function (config) {

    config.set({
        basePath: '../src',
        frameworks: ['jasmine'],
        files: [testGlob, srcGlob],
        preprocessors: {
            [testGlob]: ['webpack'],
            [srcGlob]: ['webpack'],
        },
        webpack: webpackConfig,
        webpackMiddleware: {noInfo: true},
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            check: {
                global: {
                    statements: 11,
                    branches: 0,
                    functions: 0,
                    lines: 11,
                }
            },
            reporters: [
                {type: 'lcov', dir: '../reports/coverage', subdir: '.'}
            ]
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        concurrency: Infinity
    });
};
