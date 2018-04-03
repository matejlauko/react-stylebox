'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/components/grid/Grid.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

require('../../types');

var _compose = require('../../compose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DIMENSION_NAMES = ['sm', 'md', 'lg', 'xl'];

var Component = function Component(props) {
  return _react2.default.createElement('div', _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }));
};
Component.displayName = 'Grid';

var Grid = function Grid(_ref) {
  var _ref$fluid = _ref.fluid,
      fluid = _ref$fluid === undefined ? false : _ref$fluid,
      style = _ref.style,
      media = _ref.media,
      restProps = _objectWithoutProperties(_ref, ['fluid', 'style', 'media']);

  var gridStyle = fluid ? function (theme) {
    return {
      paddingLeft: theme.grid.outerMargin + 'rem',
      paddingRight: theme.grid.outerMargin + 'rem'
    };
  } : function (theme) {
    return {
      paddingLeft: '1rem',
      paddingRight: '1rem',
      marginLeft: 'auto',
      marginRight: 'auto'
    };
  };

  var gridMedia = function gridMedia(theme) {
    return DIMENSION_NAMES.reduce(function (queries, d) {
      var _extends2;

      return _extends({}, queries, (_extends2 = {}, _extends2[d] = {
        width: String(theme.grid.container[d]) + 'rem'
      }, _extends2));
    }, {});
  };

  // mix styles
  // mix media

  return _react2.default.createElement(_Box2.default, _extends({
    as: Component,
    flexDirection: 'column',
    style: (0, _compose.composeStyles)(gridStyle, style),
    media: (0, _compose.composeStyles)(gridMedia, media)
  }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }));
};

Grid.displayName = 'Grid';

Grid.contextTypes = {
  theme: _propTypes2.default.object
};

exports.default = Grid;