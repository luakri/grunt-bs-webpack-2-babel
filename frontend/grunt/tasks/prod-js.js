module.exports = function(grunt) {

    grunt.registerTask('prod-js', [
        'webpack',
        'modernizr'
    ]);
};
