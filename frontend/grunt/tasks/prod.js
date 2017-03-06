module.exports = function(grunt) {

    global.isProd = true;

    grunt.registerTask('prod', [
        'clean:build',
        'prod-css',
        'copy-assets',
        'prod-js',
        'htmlmin',
        'size_report'
    ]);
};
