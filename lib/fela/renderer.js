'use strict';

exports.__esModule = true;
exports.default = getFelaRenderer;

var _fela = require('fela');

var _felaPresetWeb = require('fela-preset-web');

var _felaPresetWeb2 = _interopRequireDefault(_felaPresetWeb);

var _felaPluginPlaceholderPrefixer = require('fela-plugin-placeholder-prefixer');

var _felaPluginPlaceholderPrefixer2 = _interopRequireDefault(_felaPluginPlaceholderPrefixer);

var _felaPluginValidator = require('fela-plugin-validator');

var _felaPluginValidator2 = _interopRequireDefault(_felaPluginValidator);

var _felaBeautifier = require('fela-beautifier');

var _felaBeautifier2 = _interopRequireDefault(_felaBeautifier);

var _felaMonolithic = require('fela-monolithic');

var _felaMonolithic2 = _interopRequireDefault(_felaMonolithic);

require('../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureRenderer = function configureRenderer() {
  var plugins = [].concat(_felaPresetWeb2.default, [(0, _felaPluginPlaceholderPrefixer2.default)()]);
  var enhancers = [];

  // Dev
  if (process.env.NODE_ENV !== 'production') {
    plugins.push((0, _felaPluginValidator2.default)({
      logInvalid: true,
      deleteInvalid: true
    }));
    enhancers.push((0, _felaBeautifier2.default)());
    enhancers.push((0, _felaMonolithic2.default)({
      prettySelectors: true
    }));
  }

  return {
    plugins: plugins,
    enhancers: enhancers,
    // Fix for monolithic classnames (generated classnames can have number at the beginning, but they don't work in the browser)
    selectorPrefix: process.env.NODE_ENV !== 'production' ? 'x' : ''
  };
};

function getFelaRenderer(globalStyles) {
  var renderer = (0, _fela.createRenderer)(configureRenderer);

  if (globalStyles) renderer.renderStatic(globalStyles);

  return renderer;
}