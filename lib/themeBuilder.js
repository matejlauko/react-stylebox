'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = buildTheme;

var _mergeDeepLeft = require('ramda/src/mergeDeepLeft');

var _mergeDeepLeft2 = _interopRequireDefault(_mergeDeepLeft);

require('./types');

var _typography = require('./typography');

var _typography2 = _interopRequireDefault(_typography);

var _defaultTheme = require('./defaultTheme');

var _defaultTheme2 = _interopRequireDefault(_defaultTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildTheme(theme) {
  var mergedTheme = (0, _mergeDeepLeft2.default)(theme, _defaultTheme2.default);

  return _extends({}, mergedTheme, {
    typography: (0, _typography2.default)(mergedTheme.typographySetup)
  });
}