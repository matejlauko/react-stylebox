'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/components/Heading.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

require('../types');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Heading = function Heading(props, _ref) {
  var theme = _ref.theme;

  var type = props.type || 2;

  var _props$size = props.size,
      size = _props$size === undefined ? (0, _utils.get)(theme, 'heading.size' + type) : _props$size,
      _props$bold = props.bold,
      bold = _props$bold === undefined ? (0, _utils.get)(theme, 'heading.boldByDefault') : _props$bold,
      _props$fontFamily = props.fontFamily,
      fontFamily = _props$fontFamily === undefined ? (0, _utils.get)(theme, 'heading.fontFamily') : _props$fontFamily,
      _props$marginBottom = props.marginBottom,
      marginBottom = _props$marginBottom === undefined ? (0, _utils.get)(theme, 'heading.marginBottom') : _props$marginBottom,
      _props$marginTop = props.marginTop,
      marginTop = _props$marginTop === undefined ? (0, _utils.get)(theme, 'heading.marginTop') : _props$marginTop,
      restProps = _objectWithoutProperties(props, ['size', 'bold', 'fontFamily', 'marginBottom', 'marginTop']);

  return _react2.default.createElement(_Text2.default, _extends({
    as: 'h' + type,
    size: size,
    bold: bold && (0, _utils.get)(theme, 'heading.bold', true),
    fontFamily: fontFamily,
    marginBottom: marginBottom,
    marginTop: marginTop
  }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }));
};

Heading.contextTypes = {
  theme: _propTypes2.default.object
};

exports.default = Heading;