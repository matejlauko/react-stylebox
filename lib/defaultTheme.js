'use strict';

exports.__esModule = true;

require('./types');

var defaultTheme = {
  breakpoints: {},
  grid: {
    gridSize: 12,
    gutterWidth: 2,
    outerMargin: 2,
    container: {}
  },
  colors: {},
  heading: {},
  text: {},
  typographySetup: {
    baseFontSize: 1,
    fontSizeScale: 'step2',
    lineHeight: 1.3
  }
};

exports.default = defaultTheme;