const getPath = require('../../config/util/getPath');

const setOptions = (isLibs) => {

    const fileName = isLibs ? 'vendor/libs.js' : 'main.js';

    const type = isLibs ? 'Libs' : 'App';

    const header = 'Size ' + type;

    return {
        options: {
            header: header
        },
        files: {
            list: [getPath('js', false, true) + fileName]
        }
    };
};

module.exports = {

    libs: setOptions(true),

    app: setOptions(false)
};
