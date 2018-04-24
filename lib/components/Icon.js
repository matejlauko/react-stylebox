'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/components/Icon.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyle = require('../withStyle');

var _withStyle2 = _interopRequireDefault(_withStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * SVG or CSS icon
 */
// const cssIconProps = ({ icon, style, iconHeight }, theme) => {
//   const { content, style: iconStyle, ...iconProps } = icon;

//   const styleDef = typeof style === 'function' ? style(theme) : style;

//   if (iconStyle) {
//     style = {
//       lineHeight: iconHeight,
//       ...iconStyle,
//       ...styleDef,
//     };
//   }
//   return { dangerouslySetInnerHTML: { __html: content }, style, ...iconProps };
// };

var svgIconProps = function svgIconProps(icon, width, height, style, restProps) {
  var SvgElem = function SvgElem(props) {
    return _react2.default.createElement('svg', _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: width !== undefined ? width : icon.info.width,
      height: height !== undefined ? height : icon.info.height
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }));
  };

  return {
    as: SvgElem,
    dangerouslySetInnerHTML: { __html: icon.svg },
    viewBox: icon.info.viewBox,
    style: style
  };
};

var Icon = function Icon(_ref) {
  var name = _ref.name,
      style = _ref.style,
      width = _ref.width,
      height = _ref.height,
      icons = _ref.icons,
      restProps = _objectWithoutProperties(_ref, ['name', 'style', 'width', 'height', 'icons']);

  var icon = icons[name];

  var iconProps = {};

  if (icon && icon.svg) {
    iconProps = svgIconProps(icon, width, height, style);
  } else if (false) {
    // TODO: css icon
    // iconProps = cssIconProps({ icon, style, iconWidth, iconHeight }, theme);
  }

  return _react2.default.createElement(_Text2.default, _extends({ className: 'Icon' }, iconProps, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }));
};

Icon.displayName = 'Icon';

exports.default = (0, _withStyle2.default)(['theme', 'icons'])(Icon);