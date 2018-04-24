'use strict';

exports.__esModule = true;
exports.calculateFontSize = undefined;

require('./types');

// inlehmansterms.net/2014/06/09/groove-to-a-vertical-rhythm
// 24ways.org/2011/composing-the-new-canon
// modularscale.com
// type-scale.com

var scale = {
  step0: 1,
  step1: 15 / 16,
  step2: 8 / 9,
  step3: 5 / 6,
  step4: 4 / 5,
  step5: 3 / 4,
  step6: 1 / Math.SQRT2,
  step7: 2 / 3,
  step8: 5 / 8,
  step9: 3 / 5,
  step10: 9 / 16,
  step11: 8 / 15,
  step12: 1 / 2,
  step13: 2 / 5,
  step14: 3 / 8,
  step15: 1 / 3,
  step16: 1 / 4
};
var calculateFontSize = exports.calculateFontSize = function calculateFontSize(baseFontSize, scaleRatio) {
  return function (level) {
    return Array.from(Array(Math.abs(level))).reduce(function (size) {
      return level > 0 ? size * (1 / scaleRatio) : size / (1 / scaleRatio);
    }, baseFontSize) + 'rem';
  };
};

var typography = function typography(_ref) {
  var baseFontSize = _ref.baseFontSize,
      fontSizeScale = _ref.fontSizeScale,
      lineHeight = _ref.lineHeight;

  var scaleRatio = typeof fontSizeScale === 'string' ? scale[fontSizeScale] : fontSizeScale;

  return {
    baseFontSize: baseFontSize + 'rem',
    fontSize: calculateFontSize(baseFontSize, scaleRatio),
    lineHeight: lineHeight,
    rhythm: function rhythm(ratio) {
      return lineHeight * ratio + 'rem';
    }
  };
};

exports.default = typography;