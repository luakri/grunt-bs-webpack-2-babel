module.exports = function(grunt) {

    grunt.registerTask('js-lint', [
        'eslint',
        'jscs'
    ]);
};

