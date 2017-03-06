module.exports = function(grunt) {

    grunt.registerTask('prod-css', [
        'sass:appProd',
        'postcss:appProd'
    ]);
};
