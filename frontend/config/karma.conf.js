const config = require('./index');
const webpackConfig = require('./webpack.test.config.js');

const jsApp = config.PATHS.JS;
let processFiles = {};

processFiles['tests/unit/index.js'] = ['webpack'];
processFiles[jsApp + 'components/**/*.js'] = ['webpack'];
processFiles[jsApp + 'main.js'] = ['webpack'];

module.exports = function (config) {

    config.set({
        basePath : '../src',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],

        keepalive: true,
        autoWatch : true,
        singleRun : false,

        port: 9876,
        runnerPort: 9100,
        colors: true,
        captureTimeout: 5000,

        reporters: ['spec', 'coverage'],

        preprocessors: processFiles,

        coverageReporter: {
            type : 'lcov',
            dir : '../reports/coverage'
        },

        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },

        specReporter: {
            maxLogLines: 5,
            suppressErrorSummary: true,
            suppressFailed: false,
            suppressPassed: false,
            suppressSkipped: true
        },

        exclude: [],

        files: [
            // Libs.
            jsApp + 'vendor/jquery-2.2.1.js',
            jsApp + 'vendor/modernizr.min.js',

            // All the Tests.
            'tests/unit/index.js'
        ]
    });
};
