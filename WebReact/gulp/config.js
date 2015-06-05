var path = require('path');
var dest = "./public/build";
var src = './src';

module.exports = {
  browserSync: {
    proxy: "localhost:8080"
  },

  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/apps/app.jsx',
      dest: dest,
      outputName: 'app.js',
      transform: 'reactify'
    }],

    watch_src: [src + '/**/*.js', src + '/**/*.jsx', '!' + src + '/**/*-test.js']
  },

  jest: {
    src: src + '/',
    watch_src: src + '/**/*-test.js',
    settings: {
      collectCoverage: true,
      scriptPreprocessor: "./jest/preprocessor.js",
      unmockedModulePathPatterns: [
        "react", 'react-tools', 'lodash', 'events'
      ],
      moduleFileExtensions: ["js", "json", "jsx"]
    }
  }
};
