module.exports = function(grunt) {

    grunt.registerTask('dev-css', [
        'sass:appDev',
        'postcss:appDev'
    ]);
};
