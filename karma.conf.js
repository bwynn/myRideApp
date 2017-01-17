const webpackConfig = require('./webpack.config.js');

// Karma configuration
// Generated on Wed Jan 11 2017 15:49:20 GMT-0800 (PST)

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/foundation-sites/dist/foundation.min.js',
      'app/tests/**/*.test.jsx',
    ],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000',
      },
    },
    webpack: webpackConfig,
  });
};
