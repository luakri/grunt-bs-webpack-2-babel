module.exports = function(grunt) {

    const path = require('path');
    const timer = require('grunt-timer');
    const argv = require('minimist')(process.argv.slice(2));

    timer.init(grunt);
    global.isProd = (argv.isProd) ? true : false;

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'frontend/grunt/plugins'),
        jitGrunt: {
            customTasksDir: 'frontend/grunt/tasks',
            staticMappings: {
                'notify_hooks': 'grunt-notify',
                'notify': 'grunt-notify'
            }
        },
        data: {
            pkg: grunt.file.readJSON('package.json')
        }
    });
};
