'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/withStyle.js';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Styler = require('./Styler');

var _pick = require('ramda/src/pick');

var _pick2 = _interopRequireDefault(_pick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var withStyle = function withStyle(whichContext) {
  return function (Comp) {
    whichContext = [].concat(whichContext);
    return function (props) {
      return React.createElement(
        _Styler.StyleContext.Consumer,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: undefined
        },
        function (styleContext) {
          return React.createElement(Comp, _extends({}, props, (0, _pick2.default)(whichContext, styleContext), {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            },
            __self: undefined
          }));
        }
      );
    };
  };
};

exports.default = withStyle;