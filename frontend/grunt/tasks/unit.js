const Server = require('karma').Server;

module.exports = function(grunt) {

    grunt.registerTask('unit', function() {
        var done = this.async();

        new Server({
            configFile: __dirname + '/../../config/karma.conf.js',
            singleRun: true
        }, done).start();
    });
};
