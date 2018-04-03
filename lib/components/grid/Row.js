'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/components/grid/Row.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Box = require('../Box');

var _Box2 = _interopRequireDefault(_Box);

require('../../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Component = function Component(props) {
  return _react2.default.createElement('div', _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }));
};
Component.displayName = 'Row';

// $FlowFixMe
var Row = function Row(_ref, _ref2) {
  var theme = _ref2.theme;

  var _ref$as = _ref.as,
      as = _ref$as === undefined ? Component : _ref$as,
      props = _objectWithoutProperties(_ref, ['as']);

  return _react2.default.createElement(_Box2.default, _extends({
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
      lineNumber: 19
    },
    __self: undefined
  }));
};

Row.displayName = 'Row';
Row.contextTypes = {
  theme: _propTypes2.default.object
};

exports.default = Row;