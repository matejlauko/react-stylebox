'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/components/Image.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _compose = require('../compose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getComponent = function getComponent(imageAttrs) {
  return function (props) {
    return _react2.default.createElement('img', _extends({}, imageAttrs, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }));
  };
}; // eslint-disable-line jsx-a11y/alt-text

var Image = function Image(_ref) {
  var as = _ref.as,
      size = _ref.size,
      src = _ref.src,
      _ref$responsive = _ref.responsive,
      responsive = _ref$responsive === undefined ? true : _ref$responsive,
      width = _ref.width,
      height = _ref.height,
      alt = _ref.alt,
      media = _ref.media,
      restProps = _objectWithoutProperties(_ref, ['as', 'size', 'src', 'responsive', 'width', 'height', 'alt', 'media']);

  var imageAttrs = {
    width: '' + String(size.w) + (typeof size.w === 'number' ? 'px' : ''),
    height: size.h ? '' + String(size.h) + (typeof size.h === 'number' ? 'px' : '') : undefined
  };
  var boxSize = {
    width: responsive ? '100%' : width || imageAttrs.width,
    height: responsive ? 'auto' : height || imageAttrs.height
  };

  if (responsive) {
    media = (0, _compose.composeStyles)({
      sm: {
        width: width || imageAttrs.width,
        height: height || imageAttrs.height
      }
    }, media);
  }

  if (alt) {
    imageAttrs.alt = alt;
  } else {
    imageAttrs.role = 'presentation';
  }

  return _react2.default.createElement(_Box2.default, _extends({ as: getComponent(imageAttrs), src: src, media: media }, boxSize, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }));
};

exports.default = Image;