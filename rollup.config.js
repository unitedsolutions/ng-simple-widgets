export default {
  input: 'dist/ng-simple-widgets.js',
  name: 'ngSimpleWidgets',
  output: {
    file: 'dist/ng-simple-widgets.umd.js',
    format: 'umd'
  },
  sourceMap: false,
  globals: {
    'lodash': '_',
    '@angular/common': 'ng.common',
    '@angular/core': 'ng.core'
  },
  external: [
    'lodash',
    '@angular/core',
    '@angular/common'
  ]  
};
