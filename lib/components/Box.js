'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _types = require('../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mixClassname = function mixClassname(rendererClassname, propClassname) {
  var classname = rendererClassname;

  if (propClassname) {
    classname = propClassname + ' ' + classname;
  }

  return classname;
};

var Box = function Box(_ref, _ref2) {
  var renderer = _ref2.renderer,
      theme = _ref2.theme;

  var Component = _ref.as,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ['as', 'style', 'className']);

  var styleObject = typeof style === 'function' ? style(theme.properties) : style;

  var finalProps = _extends({
    className: mixClassname(renderer.renderRule(function () {
      return styleObject;
    }), className)
  }, restProps);

  return _react2.default.createElement(Component || 'div', finalProps);
};

Box.displayName = 'Box';

Box.contextTypes = {
  renderer: _propTypes2.default.object,
  theme: _propTypes2.default.object
};

exports.default = Box;