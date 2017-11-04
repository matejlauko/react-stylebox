'use strict';

exports.__esModule = true;
exports.mediaDefinition = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = buildTheme;

var _mergeDeepLeft = require('ramda/src/mergeDeepLeft');

var _mergeDeepLeft2 = _interopRequireDefault(_mergeDeepLeft);

var _pipe = require('ramda/src/pipe');

var _pipe2 = _interopRequireDefault(_pipe);

require('./types');

var _typography = require('./typography');

var _typography2 = _interopRequireDefault(_typography);

var _defaultTheme = require('./defaultTheme');

var _defaultTheme2 = _interopRequireDefault(_defaultTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mediaDefinition = exports.mediaDefinition = function mediaDefinition(theme) {
  return function (d) {
    var breakpoints = (0, _pipe2.default)(function (d) {
      return typeof d === 'string' ? d.split('-') : [d];
    }, function (ds) {
      return ds.map(function (d) {
        return isNaN(d) ? d : d + 'px';
      });
    }, function (ds) {
      return ds.map(function (d, i) {
        return i === 0 ? '(min-width: ' + d + ')' : '(max-width: ' + d + ')';
      });
    }, function (ds) {
      return ds[1] ? ds.join(' and ') : ds[0];
    })(theme.breakpoints[d] ? theme.breakpoints[d] : d);

    return '@media only screen and ' + breakpoints;
  };
};

function buildTheme(theme) {
  var mergedTheme = (0, _mergeDeepLeft2.default)(theme, _defaultTheme2.default);

  return _extends({}, mergedTheme, {
    typography: (0, _typography2.default)(mergedTheme.typographySetup),
    mediaDefinition: mediaDefinition(theme)
  });
}