'use strict';

exports.__esModule = true;
exports.composeStyles = undefined;

require('../types');

var _cssInJsUtils = require('css-in-js-utils');

var composeStyles = exports.composeStyles = function composeStyles(style) {
  var builtStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (theme, parentStyle) {
    var styleObject = typeof style === 'function' ? style(theme, builtStyle) : style;

    return (0, _cssInJsUtils.assignStyle)(builtStyle, styleObject);
  };
};