'use strict';

exports.__esModule = true;
exports.computeStyles = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

require('../types');

var ruleValue = function ruleValue(setup, props, theme) {
  return function (key) {
    return {
      rule: setup[key],
      val: typeof setup[key] === 'function' ? setup[key](props[key], theme) : setup[key],
      key: key
    };
  };
};

var keyValue = function keyValue(theme, props) {
  return function (_ref) {
    var rule = _ref.rule,
        val = _ref.val,
        key = _ref.key;

    var realKey = (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? Object.keys(val)[0] : key;
    return {
      key: realKey,
      val: (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? ruleValue(val, props, theme)(realKey).val : val
    };
  };
};

var computeStyles = exports.computeStyles = function computeStyles(setup) {
  return function (props, theme) {
    var styles = Object.keys(setup).map(ruleValue(setup, props, theme)).filter(function (_ref2) {
      var val = _ref2.val;
      return val;
    }).map(keyValue(props, theme)).filter(function (_ref3) {
      var val = _ref3.val;
      return val;
    }).reduce(function (res, _ref4) {
      var key = _ref4.key,
          val = _ref4.val;

      res[key] = val;
      return res;
    }, {});

    var otherProps = Object.keys(props).filter(function (propKey) {
      return !setup[propKey];
    }).reduce(function (res, propKey) {
      res[propKey] = props[propKey];
      return res;
    }, {});

    return [styles, otherProps];
  };
};