const argv = require('minimist')(process.argv.slice(2));

module.exports = function(grunt) {

    global.isProd = (argv.isProd) ? true : false;

    grunt.registerTask('dev', [
        'clean:build',
        'dev-css',
        'dev-js',
        'copy-assets',
        'asciify',
        'server'
    ]);

    grunt.task.run('notify_hooks');
};
