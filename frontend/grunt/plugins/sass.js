const getPath = require('../../config/util/getPath');

const optionsDev = {
    style: 'expanded'
};

const optionsProd = {
    outputStyle: 'compressed'
};

const setOptions = (isProd) => {

    let SASS_FILE_MAP = {};

    SASS_FILE_MAP[getPath('css', false, true) + 'main.css'] = getPath('sass', true) + 'main.scss';

    return {
        options: (isProd) ? optionsProd : optionsDev,
        files: SASS_FILE_MAP
    };
};

module.exports = {

    appDev: setOptions(false),

    appProd: setOptions(true)
};
