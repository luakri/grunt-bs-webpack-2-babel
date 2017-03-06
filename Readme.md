# Base Web Project Grunt

Base Web Project using: Grunt, Browsersync, Webpack 2, Babel and Karma.

Development server is a combination of Browsersync + Webpack.
Webpack Hot Middleware watches js files and reloads browser.

## Developer Setup

Prerequisites
-------------

* [NVM](https://github.com/creationix/nvm) or [Node.js](https://nodejs.org)
* [Grunt Command Line Interface (CLI)](https://github.com/gruntjs/grunt-cli)

Requirements
-------------

* Nodejs v.7.7.1

        nvm ls-remote
        nvm install 7.7.1
        nvm use 7.7.1

* Please download the [Editor Config](http://editorconfig.org/) plugin for your code editor

* From the Terminal:

        npm install -g grunt-cli
        npm run start
        grunt


## Starting Up The Project

* ```npm run start``` to install project dependencies.

* ```grunt``` to build the project for development and open a browser instance with watch, etc. only builds 1 locale eg en-GB

* ```grunt prod --isProd``` to build the project for production.

* ```grunt server ``` to serve the distribution files.

* ```grunt server --isProd``` to serve the production files - Webpack is a Browsersync middleware, to use grunt server bypassing Webpack, param --isProd needs to be passed.
