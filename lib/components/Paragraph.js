'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/components/Paragraph.js';

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

var Paragraph = function Paragraph(props, _ref) {
  var theme = _ref.theme;

  var _props$marginBottom = props.marginBottom,
      marginBottom = _props$marginBottom === undefined ? (0, _utils.get)(theme, 'paragraph.marginBottom') : _props$marginBottom,
      _props$marginTop = props.marginTop,
      marginTop = _props$marginTop === undefined ? (0, _utils.get)(theme, 'paragraph.marginTop') : _props$marginTop,
      restProps = _objectWithoutProperties(props, ['marginBottom', 'marginTop']);

  return _react2.default.createElement(_Text2.default, _extends({ as: 'p', marginBottom: marginBottom, marginTop: marginTop }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }));
};

Paragraph.contextTypes = {
  theme: _propTypes2.default.object
};

exports.default = Paragraph;