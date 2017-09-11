// Karma configuration
// Generated on Wed Aug 09 2017 16:19:00 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: [
      'app/*.js',
      'test/*.js',
      {
        pattern: 'node_modules/chai/chai.js',
        watched: false
      }
    ],
    exclude: [
      'karma.conf.js'
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    reporters: ['progress'],
    port: 9876,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
