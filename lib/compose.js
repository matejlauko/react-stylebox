'use strict';

exports.__esModule = true;
exports.composeStyles = undefined;

require('./types');

var _mergeDeepRight = require('ramda/src/mergeDeepRight');

var _mergeDeepRight2 = _interopRequireDefault(_mergeDeepRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeStyles = exports.composeStyles = function composeStyles() {
  var builtStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (theme, parentStyle) {
    var builtStyleObject = typeof builtStyle === 'function' ? builtStyle(theme) : builtStyle;
    var styleObject = typeof style === 'function' ? style(theme, builtStyleObject) : style;

    return (0, _mergeDeepRight2.default)(builtStyleObject, styleObject);
  };
};