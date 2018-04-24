'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/components/Text.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

require('../types');

var _compose = require('../compose');

var _compute = require('../compute');

var _utils = require('../utils');

var _withStyle = require('../withStyle');

var _withStyle2 = _interopRequireDefault(_withStyle);

var _mergeDeepRight = require('ramda/src/mergeDeepRight');

var _mergeDeepRight2 = _interopRequireDefault(_mergeDeepRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var fontSize = function fontSize(typography, size) {
  return typeof size === 'number' ? typography.fontSize(size) : size;
};

var computeSetup = {
  size: function size(val, _ref) {
    var typography = _ref.typography;
    return { fontSize: fontSize(typography, val) };
  },
  color: function (_color) {
    function color(_x, _x2) {
      return _color.apply(this, arguments);
    }

    color.toString = function () {
      return _color.toString();
    };

    return color;
  }(function (color, theme) {
    return theme.colors[color] || color;
  }),
  fontFamily: function fontFamily(val, theme) {
    return theme.text.defaultFontFamily ? val + ', ' + theme.text.defaultFontFamily : val;
  },
  align: function align(val) {
    return { textAlign: val };
  },
  bold: function bold(val, theme) {
    return {
      fontWeight: val === true ? (0, _utils.get)(theme, 'text.bold', 'bold') : val === false ? 'normal' : val
    };
  },
  light: function light(val, theme) {
    return val === true ? (0, _utils.get)(theme, 'text.bold') : val;
  },
  decoration: function decoration(val) {
    return { textDecoration: val };
  },
  italic: function italic(val) {
    return { fontStyle: val && 'italic' };
  },
  lineHeight: function lineHeight(val) {
    return val;
  }
};

var Text = function Text(_ref2) {
  var as = _ref2.as,
      style = _ref2.style,
      media = _ref2.media,
      theme = _ref2.theme,
      props = _objectWithoutProperties(_ref2, ['as', 'style', 'media', 'theme']);

  var _computeStyles = (0, _compute.computeStyles)(computeSetup)(props, theme),
      textStyles = _computeStyles[0],
      restProps = _computeStyles[1];

  var composedStyles = (0, _compose.composeStyles)(textStyles, style);

  // TODO: refactor
  var computedMediaStyles = media;
  if (media) {
    var mediaStyleDefinitions = typeof media === 'function' ? media(theme) : media;

    computedMediaStyles = Object.keys(mediaStyleDefinitions).reduce(function (mediaStyles, dimension) {
      var _computeStyles2 = (0, _compute.computeStyles)(computeSetup)(mediaStyleDefinitions[dimension], theme),
          textStyles = _computeStyles2[0],
          restProps = _computeStyles2[1];

      mediaStyles[dimension] = (0, _mergeDeepRight2.default)(textStyles, restProps);
      return mediaStyles;
    }, {});
  }

  return _react2.default.createElement(_Box2.default, _extends({ as: as || 'span', style: composedStyles, media: computedMediaStyles }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }));
};

Text.displayName = 'Text';

exports.default = (0, _withStyle2.default)('theme')(Text);