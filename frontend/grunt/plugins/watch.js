const getPath = require('../../config/util/getPath');

module.exports = {
    options: {
        spawn: false,
    },

    appSass: {
        files: [getPath('sass', true) + '**/*.scss'],
        tasks: ['dev-css']
    },

    libs: {
        files: [getPath('js', 'common', true) + 'vendor/**/*.js'],
        tasks: ['concat:libs']
    },

    appHtml: {
        files: [getPath('src') + '*.html'],
        tasks: ['copy:appHtml']
    }
};
