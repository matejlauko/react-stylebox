'use strict';

exports.__esModule = true;
var get = exports.get = function get(obj, path, fallback) {
  return path.split('.').reduce(function (a, b) {
    return a && a[b] ? a[b] : null;
  }, obj) || fallback;
};