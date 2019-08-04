// Karma configuration
// Generated on Sun Aug 04 2019 17:27:55 GMT+0800 (GMT+08:00)

module.exports = function(config) {
    config.set({
      //设置根路径
      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: '',
  
  
      // 断言库
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ['jasmine'],
  
  
      // 讲测试文件与测试脚本添加进来
      files: [
        "src/**/*.js",
        "./unit/**/*.spec.js"
      ],
  
  
      // list of files / patterns to exclude
      exclude: [
      ],
  
  
      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
        "src/**/*.js" : ['coverage']
      },
  
  
      // test results reporter to use
      // possible values: 'dots', 'progress'
      // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      reporters: ['progress', 'coverage'],
  
  
      //具体的覆盖率文件夹生成的地址
      coverageReporter: {
        type : 'html',
        dir : './docs/coverage/'
      },
      // web server port
      port: 9876,
  
  
      // enable / disable colors in the output (reporters and logs)
      colors: true,
  
  
      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,
  
  
      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: false,
  
  
      // start these browsers 无头浏览器
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['PhantomJS'],
  
  
      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: true,
  
      // Concurrency level
      // how many browser should be started simultaneous
      concurrency: Infinity
    })
  }
  