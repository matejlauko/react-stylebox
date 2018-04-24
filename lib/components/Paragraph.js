'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/components/Paragraph.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _utils = require('../utils');

var _withStyle = require('../withStyle');

var _withStyle2 = _interopRequireDefault(_withStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Paragraph = function Paragraph(props) {
  var theme = props.theme;

  var _props$marginBottom = props.marginBottom,
      marginBottom = _props$marginBottom === undefined ? (0, _utils.get)(theme, 'paragraph.marginBottom') : _props$marginBottom,
      _props$marginTop = props.marginTop,
      marginTop = _props$marginTop === undefined ? (0, _utils.get)(theme, 'paragraph.marginTop') : _props$marginTop,
      _props$lineHeight = props.lineHeight,
      lineHeight = _props$lineHeight === undefined ? (0, _utils.get)(theme, 'paragraph.lineHeight') : _props$lineHeight,
      restProps = _objectWithoutProperties(props, ['marginBottom', 'marginTop', 'lineHeight']);

  return _react2.default.createElement(_Text2.default, _extends({ as: 'p', marginBottom: marginBottom, marginTop: marginTop, lineHeight: lineHeight }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }));
};

exports.default = (0, _withStyle2.default)('theme')(Paragraph);