const getPath = require('../../config/util/getPath');

const setOptions = () => {

    const props = {
        src: [
            getPath('js', true) + 'vendor/**/*.js',
            '!' + getPath('js', true) + 'vendor/modernizr.min.js'
        ],
        dest: getPath('js', false, true) + 'vendor/libs.js'
    };

    return props;
};

module.exports = {
    libs: setOptions()
};
