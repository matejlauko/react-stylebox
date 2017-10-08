'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.buildStyles = buildStyles;
exports.composeBoxStyles = composeBoxStyles;
exports.makeClassname = makeClassname;

require('react');

require('../types');

require('./Box');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getStyleValues = function getStyleValues(props, getValue) {
  return Object.keys(props).reduce(function (style, prop) {
    style = style || {};
    var value = props[prop];
    if (value !== undefined) {
      style[prop] = getValue(value);
    }
    return style;
  }, {});
};

function buildStyles(props, theme) {
  var margin = props.margin,
      _props$marginHorizont = props.marginHorizontal,
      marginHorizontal = _props$marginHorizont === undefined ? margin : _props$marginHorizont,
      _props$marginVertical = props.marginVertical,
      marginVertical = _props$marginVertical === undefined ? margin : _props$marginVertical,
      _props$marginBottom = props.marginBottom,
      marginBottom = _props$marginBottom === undefined ? marginVertical : _props$marginBottom,
      _props$marginLeft = props.marginLeft,
      marginLeft = _props$marginLeft === undefined ? marginHorizontal : _props$marginLeft,
      _props$marginRight = props.marginRight,
      marginRight = _props$marginRight === undefined ? marginHorizontal : _props$marginRight,
      _props$marginTop = props.marginTop,
      marginTop = _props$marginTop === undefined ? marginVertical : _props$marginTop,
      padding = props.padding,
      _props$paddingHorizon = props.paddingHorizontal,
      paddingHorizontal = _props$paddingHorizon === undefined ? padding : _props$paddingHorizon,
      _props$paddingVertica = props.paddingVertical,
      paddingVertical = _props$paddingVertica === undefined ? padding : _props$paddingVertica,
      _props$paddingBottom = props.paddingBottom,
      paddingBottom = _props$paddingBottom === undefined ? paddingVertical : _props$paddingBottom,
      _props$paddingLeft = props.paddingLeft,
      paddingLeft = _props$paddingLeft === undefined ? paddingHorizontal : _props$paddingLeft,
      _props$paddingRight = props.paddingRight,
      paddingRight = _props$paddingRight === undefined ? paddingHorizontal : _props$paddingRight,
      _props$paddingTop = props.paddingTop,
      paddingTop = _props$paddingTop === undefined ? paddingVertical : _props$paddingTop,
      bottom = props.bottom,
      height = props.height,
      left = props.left,
      maxHeight = props.maxHeight,
      maxWidth = props.maxWidth,
      minHeight = props.minHeight,
      minWidth = props.minWidth,
      right = props.right,
      top = props.top,
      width = props.width,
      alignContent = props.alignContent,
      alignItems = props.alignItems,
      alignSelf = props.alignSelf,
      backgroundColor = props.backgroundColor,
      borderWidth = props.borderWidth,
      _props$borderBottomWi = props.borderBottomWidth,
      borderBottomWidth = _props$borderBottomWi === undefined ? borderWidth : _props$borderBottomWi,
      borderStyle = props.borderStyle,
      display = props.display,
      flex = props.flex,
      flexBasis = props.flexBasis,
      flexDirection = props.flexDirection,
      flexGrow = props.flexGrow,
      flexShrink = props.flexShrink,
      flexWrap = props.flexWrap,
      justifyContent = props.justifyContent,
      opacity = props.opacity,
      overflow = props.overflow,
      position = props.position,
      zIndex = props.zIndex,
      _props$borderLeftWidt = props.borderLeftWidth,
      borderLeftWidth = _props$borderLeftWidt === undefined ? borderWidth : _props$borderLeftWidt,
      _props$borderRightWid = props.borderRightWidth,
      borderRightWidth = _props$borderRightWid === undefined ? borderWidth : _props$borderRightWid,
      _props$borderTopWidth = props.borderTopWidth,
      borderTopWidth = _props$borderTopWidth === undefined ? borderWidth : _props$borderTopWidth,
      borderRadius = props.borderRadius,
      _props$borderBottomLe = props.borderBottomLeftRadius,
      borderBottomLeftRadius = _props$borderBottomLe === undefined ? borderRadius : _props$borderBottomLe,
      _props$borderBottomRi = props.borderBottomRightRadius,
      borderBottomRightRadius = _props$borderBottomRi === undefined ? borderRadius : _props$borderBottomRi,
      _props$borderTopLeftR = props.borderTopLeftRadius,
      borderTopLeftRadius = _props$borderTopLeftR === undefined ? borderRadius : _props$borderTopLeftR,
      _props$borderTopRight = props.borderTopRightRadius,
      borderTopRightRadius = _props$borderTopRight === undefined ? borderRadius : _props$borderTopRight,
      borderColor = props.borderColor,
      _props$borderBottomCo = props.borderBottomColor,
      borderBottomColor = _props$borderBottomCo === undefined ? borderColor : _props$borderBottomCo,
      _props$borderLeftColo = props.borderLeftColor,
      borderLeftColor = _props$borderLeftColo === undefined ? borderColor : _props$borderLeftColo,
      _props$borderRightCol = props.borderRightColor,
      borderRightColor = _props$borderRightCol === undefined ? borderColor : _props$borderRightCol,
      _props$borderTopColor = props.borderTopColor,
      borderTopColor = _props$borderTopColor === undefined ? borderColor : _props$borderTopColor,
      restProps = _objectWithoutProperties(props, ['margin', 'marginHorizontal', 'marginVertical', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop', 'padding', 'paddingHorizontal', 'paddingVertical', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop', 'bottom', 'height', 'left', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'right', 'top', 'width', 'alignContent', 'alignItems', 'alignSelf', 'backgroundColor', 'borderWidth', 'borderBottomWidth', 'borderStyle', 'display', 'flex', 'flexBasis', 'flexDirection', 'flexGrow', 'flexShrink', 'flexWrap', 'justifyContent', 'opacity', 'overflow', 'position', 'zIndex', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor']);

  return {
    styles: _extends({}, getStyleValues({
      marginBottom: marginBottom,
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginTop: marginTop,

      paddingBottom: paddingBottom,
      paddingLeft: paddingLeft,
      paddingRight: paddingRight,
      paddingTop: paddingTop,

      bottom: bottom,
      height: height,
      left: left,
      maxHeight: maxHeight,
      maxWidth: maxWidth,
      minHeight: minHeight,
      minWidth: minWidth,
      right: right,
      top: top,
      width: width
    }, function (value) {
      return typeof value === 'number' ? theme.typography.rhythm(value) : value;
    }), getStyleValues({
      backgroundColor: backgroundColor,
      borderBottomColor: borderBottomColor,
      borderLeftColor: borderLeftColor,
      borderRightColor: borderRightColor,
      borderTopColor: borderTopColor
    }, function (value) {
      return theme.colors[value] || value;
    }), getStyleValues({
      alignContent: alignContent,
      alignItems: alignItems,
      alignSelf: alignSelf,
      borderBottomLeftRadius: borderBottomLeftRadius,
      borderBottomRightRadius: borderBottomRightRadius,
      borderBottomWidth: borderBottomWidth,
      borderLeftWidth: borderLeftWidth,
      borderRightWidth: borderRightWidth,
      borderStyle: borderStyle,
      borderTopLeftRadius: borderTopLeftRadius,
      borderTopRightRadius: borderTopRightRadius,
      borderTopWidth: borderTopWidth,
      display: display,
      flex: flex,
      flexBasis: flexBasis,
      flexDirection: flexDirection,
      flexGrow: flexGrow,
      flexShrink: flexShrink,
      flexWrap: flexWrap,
      justifyContent: justifyContent,
      opacity: opacity,
      overflow: overflow,
      position: position,
      zIndex: zIndex
    }, function (value) {
      return value;
    })),
    restProps: restProps
  };
}

function composeBoxStyles(props, theme) {
  var _buildStyles = buildStyles(props, theme),
      styles = _buildStyles.styles,
      restProps = _buildStyles.restProps;

  return [styles, restProps];
}

/**
 * Proper classname for debugging
 */
function makeClassname(rendererClassname, propClassname, children, Component) {
  var classname = rendererClassname;

  // If production, just get the proper basic classes
  if (process.env.NODE_ENV === 'production') {
    return propClassname ? propClassname + ' ' + classname // .custom
    : classname;
  }

  if (children && children.type && children.type.name) {
    classname = String(children.type.name) + 'Box ' + classname; // .RowBox
  }
  if (Component && Component.displayName) {
    classname = String(Component.displayName) + ' ' + classname; // .Image
  }
  if (propClassname) {
    classname = propClassname + ' ' + classname; // .custom
  }
  return classname;
}