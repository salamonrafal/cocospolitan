// Karma configuration
// Generated on Mon Jan 22 2018 15:25:48 GMT+0100 (Central European Standard Time)


module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'webpack.config.tests.js'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],

    webpack: { //kind of a copy of your webpack config
     // devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          { 
            test: /\.js$/, 
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            } 
          },

          {
            test: /\.(jpe?g|png|gif|svg)$/i, 
            exclude: /node_modules/,
            loader: "file-loader?name=images/[name].[ext]&publicPath=./public/assets/"
          },
  
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader' ]
          } 
        ]
      }
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'webpack.config.tests.js': [ 'webpack', 'sourcemap' ] 
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'html'],

    htmlReporter: {
      outputFile: '../tests/report.html',
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  })
}
