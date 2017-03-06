const getPath = require('../../config/util/getPath');

module.exports = {

    options: {
        processContentExclude: ['.DS_Store', '.gitignore', '.sass-cache', 'node_modules']
    },

    appImages : {
        expand: true,
        cwd: getPath('img', true),
        src: '**/*',
        dest: getPath('img', false, true)
    },

    appHtml: {
        files: [{
            expand: true,
            src: '**/*.html',
            cwd: getPath('src'),
            dest: getPath('dest')
        }]
    }
};
