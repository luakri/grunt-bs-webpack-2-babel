const getPath = require('../../config/util/getPath');

const setOptions = () => {

    return [
        getPath('js', true) + '**/*.js',
        'Gruntfile.js',
        getPath('grunt') + '**/*.js',
        getPath('config') + '**/*.js',
        '!' + getPath('js', true) + 'vendor/**/*.js'
    ];
};

module.exports = {
    app: setOptions()
};
