'use strict';

exports.__esModule = true;
var _jsxFileName = 'src/components/List.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var List = function List(_ref) {
  var style = _ref.style,
      restProps = _objectWithoutProperties(_ref, ['style']);

  var listStyle = _extends({
    listStyle: 'none'
  }, style);

  return _react2.default.createElement(_Box2.default, _extends({ paddingLeft: 0, margin: 0, as: 'ul', style: listStyle }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }));
};

exports.default = List;