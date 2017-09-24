'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/fela/Styler.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

require('../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Styler = function (_React$Component) {
  _inherits(Styler, _React$Component);

  function Styler() {
    _classCallCheck(this, Styler);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Styler.prototype.render = function render() {
    var _props = this.props,
        renderer = _props.renderer,
        children = _props.children,
        theme = _props.theme,
        restProps = _objectWithoutProperties(_props, ['renderer', 'children', 'theme']);

    var child = _react2.default.Children.only(children);

    return _react2.default.createElement(
      _reactFela.Provider,
      { renderer: renderer, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      },
      _react2.default.createElement(
        _reactFela.ThemeProvider,
        { theme: theme, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        },
        _react2.default.isValidElement(child) ? _react2.default.cloneElement(child, _extends({}, restProps)) : child
      )
    );
  };

  return Styler;
}(_react2.default.Component);

exports.default = Styler;