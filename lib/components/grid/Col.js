'use strict';

exports.__esModule = true;
exports.offsetRules = exports.gridRules = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/components/grid/Col.js';

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cssInJsUtils = require('css-in-js-utils');

var _uniq = require('ramda/src/uniq');

var _uniq2 = _interopRequireDefault(_uniq);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

var _types = require('../../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * <Col
 *   grid={{
 *     xs: 5,
 *     md: false,
 *     xl: true
 *   }}
 */

var defaultStyle = function defaultStyle(display) {
  return {
    display: display,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    maxWidth: '100%'
  };
};

var gridRules = exports.gridRules = function gridRules(theme) {
  var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'block';
  return function (d, rule, nomarg) {
    if (typeof rule === 'number' && !isNaN(parseFloat(rule))) {
      var nom = 100 / theme.grid.gridSize * rule + '%';

      return {
        flexGrow: 0,
        flexBasis: nom,
        maxWidth: nom,
        display: display,
        marginBottom: nomarg ? undefined : 1
      };
    } else {
      return rule ? defaultStyle(display) : { display: 'none' };
    }
  };
};

var offsetRules = exports.offsetRules = function offsetRules(theme) {
  return function (d, rule) {
    return {
      marginLeft: 100 / theme.grid.gridSize * rule + '%'
    };
  };
};

var Component = function Component(props) {
  return _react2.default.createElement('div', _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }));
};
Component.displayName = 'Col';

var Col = function Col(_ref, _ref2) {
  var theme = _ref2.theme;

  var _ref$as = _ref.as,
      as = _ref$as === undefined ? Component : _ref$as,
      grid = _ref.grid,
      offset = _ref.offset,
      _ref$display = _ref.display,
      display = _ref$display === undefined ? 'block' : _ref$display,
      nomarg = _ref.nomarg,
      customMedia = _ref.media,
      restProps = _objectWithoutProperties(_ref, ['as', 'grid', 'offset', 'display', 'nomarg', 'media']);

  var gridStyles = {};

  if (grid || offset) {
    var makeGridRules = gridRules(theme, display);
    var makeOffsetRules = offsetRules(theme);
    var dimensions = (0, _uniq2.default)(Object.keys(grid).concat(Object.keys(offset)));

    gridStyles = dimensions.reduce(function (styles, d) {
      styles[d] = Object.assign({}, styles[d], grid[d] ? makeGridRules(d, grid[d], nomarg) : null, offset[d] ? makeOffsetRules(d, offset[d]) : null);
      return styles;
    }, {});
  }

  var media = (0, _cssInJsUtils.assignStyle)({
    xs: {
      display: display,
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: 0,
      maxWidth: '100%'
    }
  }, gridStyles, customMedia);

  return _react2.default.createElement(_Box2.default, _extends({
    as: as,
    position: 'relative',
    paddingRight: theme.grid.gutterWidth / 2 + 'rem',
    paddingLeft: theme.grid.gutterWidth / 2 + 'rem',
    media: media
  }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }));
};

Col.displayName = 'Col';
Col.contextTypes = {
  theme: _propTypes2.default.object
};

exports.default = Col;