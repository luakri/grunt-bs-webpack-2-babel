const getPath = require('../../config/util/getPath');

const setOptions = (isProd) => {

    const props = {
        src: getPath('css', false, true) + 'main.css',
        options: {
            processors: [
                require('autoprefixer')({
                    browsers: ['> 1%', 'IE 9', 'iOS 8']
                })
            ]
        }
    };

    if (!isProd) {
        props.options.map = {
            inline: true
        };
    }

    return props;
};

module.exports = {

    appDev: setOptions(false),

    appProd: setOptions(true)
};
