module.exports = function (config) {
    'use strict';

    config.set({
        basePath: '../../',
        frameworks: ['jasmine'],
        files: [
            'node_modules/angular/angular.js',
            'js/main.js',
            'test/unit/**/*.js'
        ],
        exclude: [],
        autoWatch: true,
        singleRun: false,
        browsers: ['PhantomJS','Chrome', 'Firefox'],
        coverageReporter: { type : 'lcov', dir : 'build/coverage/' },
        reporters: ['progress', 'coverage'],
        preprocessors: {
            'js/main.js': ['coverage']
        }
    });
};