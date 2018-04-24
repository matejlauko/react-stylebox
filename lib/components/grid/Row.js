'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/components/grid/Row.js';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

var _withStyle = require('../../withStyle');

var _withStyle2 = _interopRequireDefault(_withStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Component = function Component(props) {
  return React.createElement('div', _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }));
};
Component.displayName = 'Row';

var Row = function Row(_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === undefined ? Component : _ref$as,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ['as', 'theme']);

  return React.createElement(_Box2.default, _extends({
    as: as,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: String(theme.grid.gutterWidth / 2 * -1) + 'rem',
    marginLeft: String(theme.grid.gutterWidth / 2 * -1) + 'rem'
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }));
};

exports.default = (0, _withStyle2.default)('theme')(Row);