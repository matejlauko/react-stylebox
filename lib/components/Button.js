'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/components/Button.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('../types');

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _utils = require('../utils');

var _compose = require('../compose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// Browser button is rendered as div with button role because button element is
// hard to style consistently in Firefox and maybe elsewhere. Div is just fine.
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role
var BrowserButton = function BrowserButton(_ref) {
  var disabled = _ref.disabled,
      onPress = _ref.onPress,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ['disabled', 'onPress', 'style']);

  return _react2.default.createElement('div', _extends({
    onClick: onPress,
    onKeyPress: function onKeyPress(e) {
      if (disabled) return;
      // Buttons are expected to be triggered using the Space or Enter key.
      var isTriggered = e.key === ' ' || e.key === 'Enter';
      if (!isTriggered) return;
      // Prevent scroll on spacebar press.
      e.preventDefault();
      onPress();
    },
    role: 'button',
    tabIndex: disabled ? -1 : 0,
    style: _extends({
      cursor: disabled ? 'default' : 'pointer',
      pointerEvents: disabled ? 'none' : 'auto',
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none'
    }, style)
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }));
};
BrowserButton.displayName = 'Button';

var Button = function Button(
// $FlowFixMe
_ref2, _ref3) {
  var theme = _ref3.theme;

  var _ref2$as = _ref2.as,
      as = _ref2$as === undefined ? BrowserButton : _ref2$as,
      style = _ref2.style,
      raw = _ref2.raw,
      restProps = _objectWithoutProperties(_ref2, ['as', 'style', 'raw']);

  var updatedProps = _extends({}, restProps);

  if (!raw) {
    // Defaults
    updatedProps = _extends({
      borderRadius: (0, _utils.get)(theme, 'button.borderRadius'),
      marginVertical: (0, _utils.get)(theme, 'button.marginVertical'),
      paddingVertical: (0, _utils.get)(theme, 'button.paddingVertical', 0.5),
      paddingHorizontal: (0, _utils.get)(theme, 'button.paddingHorizontal', 0.25),
      opacity: restProps.disabled && (0, _utils.get)(theme, 'button.disabled.opacity')
    }, updatedProps);
  }

  // <Button primary
  var buttonThemes = (0, _utils.get)(theme, 'button.themes');
  if (buttonThemes) {
    var buttonTheme = Object.keys(buttonThemes).find(function (style) {
      return restProps[style];
    });
    var propStyle = buttonThemes[buttonTheme];
    if (propStyle) {
      var _extends2;

      updatedProps = _extends({}, propStyle, updatedProps, (_extends2 = {}, _extends2[buttonTheme] = undefined, _extends2));
    }
  }

  return (
    // $FlowFixMe
    _react2.default.createElement(_Text2.default, _extends({
      as: as,
      justifyContent: 'center',
      alignItems: 'center',
      style: (0, _compose.composeStyles)(style, updatedProps.style)(theme)
    }, updatedProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: undefined
    }))
  );
};

Button.contextTypes = {
  theme: _propTypes2.default.object
};

exports.default = Button;