'use strict';

exports.__esModule = true;

require('./types');

var colors = {
  primary: 'red',
  secondary: 'blue',
  text: 'black'
};

var defaultTheme = {
  colors: colors,
  breakpoints: {},
  heading: {},
  text: {
    bold: 600,
    fontFamily: 'Sans-Serif',
    color: colors.text
  },
  typographySetup: {
    baseFontSize: 1, // rem
    fontSizeScale: 'step2', // 8/9 step
    lineHeight: 1.3
  }
};

exports.default = defaultTheme;