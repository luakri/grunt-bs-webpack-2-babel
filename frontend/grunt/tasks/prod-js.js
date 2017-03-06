module.exports = function(grunt) {

    grunt.registerTask('prod-js', [
        'concat',
        'webpack',
        'modernizr'
    ]);
};
