'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/components/Link.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _utils = require('../utils');

var _withStyle = require('../withStyle');

var _withStyle2 = _interopRequireDefault(_withStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Link = function Link(props) {
  var raw = props.raw,
      theme = props.theme,
      _props$color = props.color,
      color = _props$color === undefined ? !raw && (0, _utils.get)(theme, 'link.color') : _props$color,
      _props$bold = props.bold,
      bold = _props$bold === undefined ? (0, _utils.get)(theme, 'link.bold') : _props$bold,
      _props$fontFamily = props.fontFamily,
      fontFamily = _props$fontFamily === undefined ? (0, _utils.get)(theme, 'link.fontFamily') : _props$fontFamily,
      _props$decoration = props.decoration,
      decoration = _props$decoration === undefined ? (0, _utils.get)(theme, 'link.decoration') : _props$decoration,
      restProps = _objectWithoutProperties(props, ['raw', 'theme', 'color', 'bold', 'fontFamily', 'decoration']);

  return _react2.default.createElement(_Text2.default, _extends({ as: 'a', color: color, bold: bold, fontFamily: fontFamily, decoration: decoration }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }));
};

exports.default = (0, _withStyle2.default)('theme')(Link);