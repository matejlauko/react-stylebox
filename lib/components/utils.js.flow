// @flow
import { type Node, type ElementType } from 'react';
import { type Theme, type Styles } from '../types';
import { type BoxProps } from './Box';

const getStyleValues = (props: BoxProps, getValue) =>
  Object.keys(props).reduce((style, prop) => {
    style = style || {};
    const value = props[prop];
    if (value !== undefined) {
      style[prop] = getValue(value);
    }
    return style;
  }, {});

export function buildStyles(props: BoxProps, theme: Theme): { style: Styles, restProps: Object } {
  const {
    margin,
    marginHorizontal = margin,
    marginVertical = margin,
    marginBottom = marginVertical,
    marginLeft = marginHorizontal,
    marginRight = marginHorizontal,
    marginTop = marginVertical,

    padding,
    paddingHorizontal = padding,
    paddingVertical = padding,
    paddingBottom = paddingVertical,
    paddingLeft = paddingHorizontal,
    paddingRight = paddingHorizontal,
    paddingTop = paddingVertical,

    bottom,
    height,
    left,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    right,
    top,
    width,

    alignContent,
    alignItems,
    alignSelf,
    backgroundColor,
    borderWidth,
    borderBottomWidth = borderWidth,
    borderStyle,
    color,
    display,
    flex,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    justifyContent,
    opacity,
    overflow,
    position,
    zIndex,

    borderLeftWidth = borderWidth,
    borderRightWidth = borderWidth,
    borderTopWidth = borderWidth,

    borderRadius,
    borderBottomLeftRadius = borderRadius,
    borderBottomRightRadius = borderRadius,
    borderTopLeftRadius = borderRadius,
    borderTopRightRadius = borderRadius,

    borderColor,
    borderBottomColor = borderColor,
    borderLeftColor = borderColor,
    borderRightColor = borderColor,
    borderTopColor = borderColor,

    ...restProps
  } = props;

  return {
    style: {
      // Rhythm
      ...getStyleValues(
        {
          marginBottom,
          marginLeft,
          marginRight,
          marginTop,

          paddingBottom,
          paddingLeft,
          paddingRight,
          paddingTop,

          bottom,
          height,
          left,
          maxHeight,
          maxWidth,
          minHeight,
          minWidth,
          right,
          top,
          width,
        },
        value => (typeof value === 'number' ? theme.typography.rhythm(value) : value)
      ),

      // Color
      ...getStyleValues(
        {
          backgroundColor,
          borderBottomColor,
          borderLeftColor,
          borderRightColor,
          borderTopColor,
          color,
        },
        value => theme.colors[value] || value
      ),

      // Value
      ...getStyleValues(
        {
          alignContent,
          alignItems,
          alignSelf,
          borderBottomLeftRadius,
          borderBottomRightRadius,
          borderBottomWidth,
          borderLeftWidth,
          borderRightWidth,
          borderStyle,
          borderTopLeftRadius,
          borderTopRightRadius,
          borderTopWidth,
          display,
          flexBasis,
          flexDirection,
          flexGrow,
          flexShrink,
          flexWrap,
          justifyContent,
          opacity,
          overflow,
          position,
          zIndex,
        },
        value => value
      ),
    },
    restProps,
  };
}

export function composeBoxStyles(
  props: BoxProps,
  theme: Theme
): { composedStyle: Styles, restProps: Object } {
  const { style, restProps } = buildStyles(props, theme);

  return { composedStyle: style, restProps };
}

/**
 * Proper classname for debugging
 */
export function makeClassname(
  rendererClassname: string,
  propClassname?: string,
  children?: Node,
  Component?: ElementType
): string {
  let classname = rendererClassname;

  // If production, just get the proper basic classes
  if (process.env.NODE_ENV === 'production') {
    return propClassname
      ? `${propClassname} ${classname}` // .custom
      : classname;
  }

  if (children && children.type && children.type.name) {
    classname = `${String(children.type.name)}Box ${classname}`; // .RowBox
  }
  if (Component && Component.displayName) {
    classname = `${String(Component.displayName)} ${classname}`; // .Image
  }
  if (propClassname) {
    classname = `${propClassname} ${classname}`; // .custom
  }
  return classname;
}
