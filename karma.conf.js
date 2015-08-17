/**
 * Created by rkonon on 8/11/2015.
 */

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '.',

        browsers: ['Chrome'],

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-sourcemap-loader',
            'karma-coverage',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor'
        ],

        files: [
            //Libs
            'bower_components/angular/angular.js',

            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/underscore/underscore.js',

            //APP
            'app/**/*.js',

            //VIEWS
            'app/**/*.html',

            //TESTS
            'tests/**/module.js',
            'tests/**/*.js'
        ],

        reporters: ['progress', 'coverage', 'junit'],

        preprocessors: {
            '**/*.js': ['sourcemap'],

            'app/scripts/**/*.js': ['coverage'],

            '**/*.html': ['ng-html2js']
        },

        coverageReporter: {
            reporters: [
                {type: 'html'},
                {type: 'cobertura'}
            ],
            dir: 'test_out/coverage/'
        },

        junitReporter: {
            outputFile: 'test_out/test-results.xml'
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: '',
            moduleName: 'angMockHtml'
        },

        // list of files to exclude
        exclude: [],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
