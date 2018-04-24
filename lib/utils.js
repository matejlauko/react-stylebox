'use strict';

exports.__esModule = true;
exports.get = undefined;

var _isNil = require('ramda/src/isNil');

var _isNil2 = _interopRequireDefault(_isNil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get = exports.get = function get(obj, path, fallback) {
  var res = path.split('.').reduce(function (a, b) {
    return a && !(0, _isNil2.default)(a[b]) ? a[b] : null;
  }, obj);
  return res === undefined ? fallback : res;
};