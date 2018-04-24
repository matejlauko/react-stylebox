'use strict';

exports.__esModule = true;
exports.StyleContext = undefined;
var _jsxFileName = 'src/Styler.js';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactFela = require('react-fela');

var _themeBuilder = require('../fw/themeBuilder');

var _themeBuilder2 = _interopRequireDefault(_themeBuilder);

var _fela = require('../fw/fela');

require('../fw/types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultContext = { theme: {} };
var StyleContext = exports.StyleContext = React.createContext(defaultContext);

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
        fonts = _props.fonts,
        icons = _props.icons,
        globalStyles = _props.globalStyles;


    var builtTheme = (0, _themeBuilder2.default)(theme);

    var child = React.Children.only(children);
    var builtGlobalStyles = typeof globalStyles === 'function' ? globalStyles(builtTheme) : globalStyles;
    var felaRenderer = renderer || (0, _fela.createRenderer)(builtGlobalStyles, fonts);

    var context = { theme: builtTheme, icons: icons, fonts: fonts };

    return React.createElement(
      StyleContext.Provider,
      { value: context, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      },
      React.createElement(
        _reactFela.Provider,
        { renderer: felaRenderer, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        },
        child
      )
    );
  };

  return Styler;
}(React.Component);

exports.default = Styler;