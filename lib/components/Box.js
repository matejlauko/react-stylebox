'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('../types');

var _boxBuild = require('./boxBuild');

var _compose = require('../compose');

var _withStyle = require('../withStyle');

var _withStyle2 = _interopRequireDefault(_withStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultStyles = function defaultStyles(styles) {
  var baseStyles = {};
  baseStyles.position = 'relative';

  if (styles.borderColor) {
    if (!styles.borderWidth) styles.borderWidth = 1;
    if (!styles.borderStyle) styles.borderStyle = 'solid';
  }

  ['Top', 'Bottom', 'Left', 'Right'].forEach(function (d) {
    if (styles['border' + d + 'Color']) {
      if (!styles.borderWidth) styles.borderWidth = 0;
      if (!styles['border' + d + 'Width']) styles['border' + d + 'Width'] = 1;
      if (!styles.borderStyle) styles.borderStyle = 'solid';
    }
  });

  // Flexbox helper
  if (!styles.display && (styles.flex || styles.flexDirection || styles.justifyContent || styles.alignItems || styles.alignContent || styles.flexWrap)) {
    styles.display = 'flex';
  }

  return _extends({}, baseStyles, styles);
};

var Box = function Box(_ref, _ref2) {
  var renderer = _ref2.renderer;

  var Component = _ref.as,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ['as', 'style', 'className', 'children', 'theme']);

  var _buildBoxStyles = (0, _boxBuild.buildBoxStyles)(defaultStyles(props), theme),
      boxStyles = _buildBoxStyles[0],
      restProps = _buildBoxStyles[1];

  var mixedStyleRules = _extends({}, boxStyles, (0, _compose.composeStyles)(boxStyles, style)(theme));
  var rendererClassname = renderer.renderRule(function () {
    return mixedStyleRules;
  });

  var finalProps = _extends({
    className: (0, _boxBuild.makeClassname)(rendererClassname, className, children, Component)
  }, restProps);

  return React.createElement(Component || 'div', finalProps, children);
};

Box.displayName = 'Box';
Box.contextTypes = {
  renderer: _propTypes2.default.object
};

exports.default = (0, _withStyle2.default)('theme')(Box);