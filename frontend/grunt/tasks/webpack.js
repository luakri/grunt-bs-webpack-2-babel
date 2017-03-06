const webpack = require('webpack');
const webpackConfig = require('../../config/webpack.prod');

module.exports = function(grunt) {

    grunt.registerTask('webpack', function() {
        const done = this.async();

        webpack(webpackConfig, function(err, stats) {
            if (err) {
                grunt.log.warn('webpack', err);
            }

            grunt.log.ok('[webpack]');

            grunt.log.ok(stats.toString({
                colors: true,
                hash: false,
                timings: true,
                chunks: false,
                chunkModules: false,
                modules: false
            }));

            done();
        });
    });
};
