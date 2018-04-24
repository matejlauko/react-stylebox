'use strict';

exports.__esModule = true;

var _renderer = require('./renderer');

Object.defineProperty(exports, 'createRenderer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_renderer).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }