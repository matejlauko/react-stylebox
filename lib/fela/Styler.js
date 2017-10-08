'use strict';

exports.__esModule = true;
var _jsxFileName = 'src/fela/Styler.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFela = require('react-fela');

var _themeBuilder = require('../themeBuilder');

var _themeBuilder2 = _interopRequireDefault(_themeBuilder);

require('../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Styler = function (_React$Component) {
  _inherits(Styler, _React$Component);

  function Styler(props) {
    _classCallCheck(this, Styler);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      theme: (0, _themeBuilder2.default)(props.theme)
    };
    return _this;
  }

  Styler.prototype.getChildContext = function getChildContext() {
    return {
      theme: this.state.theme
    };
  };

  Styler.prototype.render = function render() {
    var _props = this.props,
        renderer = _props.renderer,
        children = _props.children;

    var child = _react2.default.Children.only(children);

    return _react2.default.createElement(
      _reactFela.Provider,
      { renderer: renderer, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      },
      child
    );
  };

  return Styler;
}(_react2.default.Component);

Styler.childContextTypes = {
  theme: _propTypes2.default.object
};

exports.default = Styler;