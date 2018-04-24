'use strict';

exports.__esModule = true;
exports.mediaDefinition = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = buildTheme;

var _mergeDeepRight = require('ramda/src/mergeDeepRight');

var _mergeDeepRight2 = _interopRequireDefault(_mergeDeepRight);

var _isNil = require('ramda/src/isNil');

var _isNil2 = _interopRequireDefault(_isNil);

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
      return ds.map(function (d, i) {
        if (d == 0) {
          return undefined;
        }
        var valFromQueries = !(0, _isNil2.default)(theme.breakpoints[d]);
        var val = valFromQueries ? theme.breakpoints[d] : d;

        if (i === 0) {
          return '(min-width: ' + val + ')';
        }
        if (i === 1) {
          if (valFromQueries) {
            val = val.replace(/\d+/, function (num) {
              return Number(num) - 1;
            });
          }
          return '(max-width: ' + val + ')';
        }
      });
    }, function (ds) {
      return ds.filter(function (d) {
        return d !== undefined;
      });
    }, function (ds) {
      return ds[1] ? ds.join(' and ') : ds[0];
    })((0, _isNil2.default)(theme.breakpoints[d]) ? d : theme.breakpoints[d]);

    return '@media ' + breakpoints;
  };
};

function buildTheme(theme) {
  var mergedTheme = (0, _mergeDeepRight2.default)(_defaultTheme2.default || {}, theme || {});

  return _extends({}, mergedTheme, {
    typography: (0, _typography2.default)(mergedTheme.typographySetup),
    mediaDefinition: mediaDefinition(theme)
  });
}