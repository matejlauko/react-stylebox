'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/components/grid/Grid.js';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

require('../../types');

var _compose = require('../../compose');

var _withStyle = require('../../withStyle');

var _withStyle2 = _interopRequireDefault(_withStyle);

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DIMENSION_NAMES = ['sm', 'md', 'lg', 'xl'];

var Component = function Component(props) {
  return React.createElement('div', _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }));
};
Component.displayName = 'Grid';

var generateGrid = function generateGrid(gridSize) {
  return React.createElement(
    _Row2.default,
    { position: 'absolute', zIndex: 0, top: 0, left: '1rem', right: '1rem', width: '100%', height: '100%', __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: undefined
    },
    Array.from(Array(12)).map(function (_, i) {
      return React.createElement(
        _Col2.default,
        { key: 'grid-col-' + i, grid: { xs: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: undefined
        },
        React.createElement(_Box2.default, { backgroundColor: 'rgba(37,223,223, 0.2)', height: '100%', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: undefined
        })
      );
    })
  );
};

var Grid = function Grid(_ref) {
  var _ref$fluid = _ref.fluid,
      fluid = _ref$fluid === undefined ? false : _ref$fluid,
      style = _ref.style,
      media = _ref.media,
      children = _ref.children,
      theme = _ref.theme,
      showGrid = _ref.showGrid,
      restProps = _objectWithoutProperties(_ref, ['fluid', 'style', 'media', 'children', 'theme', 'showGrid']);

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
        width: theme.grid.container[d]
      }, _extends2));
    }, {});
  };

  return React.createElement(
    _Box2.default,
    _extends({
      as: Component,
      flexDirection: 'column',
      style: (0, _compose.composeStyles)(gridStyle, style),
      media: (0, _compose.composeStyles)(gridMedia, media)
    }, restProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: undefined
    }),
    showGrid && generateGrid(theme.grid.gridSize),
    children
  );
};

exports.default = (0, _withStyle2.default)('theme')(Grid);