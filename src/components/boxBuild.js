// @flow
import { type Node, type ElementType } from 'react';
import { type Theme, type Styles, type RestProps, type Dimension } from '../types';
import { type BoxProps } from './Box';
import { assignStyle } from 'css-in-js-utils';

const getStyleValues = (props: BoxProps, getValue) =>
  Object.keys(props).reduce((style, prop) => {
    style = style || {};
    const value = props[prop];
    if (value !== undefined) {
      style[prop] = getValue(value);
    }
    return style;
  }, {});

export function buildStyles(
  props: BoxProps,
  theme: Theme
): { styles: Styles, restProps: RestProps } {
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
    styles: {
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
        },
        value => value
      ),
    },
    restProps,
  };
}

export function buildBoxStyles(props: BoxProps, theme: Theme): [Styles, RestProps] {
  const { media, ...stylingProps } = props;
  const { styles, restProps } = buildStyles(stylingProps, theme);
  let composedStyles = styles;

  /**
   * Media shorthand generator
   *
   * Usage:
   *
   * props =>
   * media={theme => ({
   *   sm: {rules}
   *   lg: {rules}
   * })}
   */
  if (media) {
    const mediaStyleDefinitions: { [Dimension]: BoxProps } =
      typeof media === 'function' ? media(theme) : media;

    const computedMediaStyles = Object.keys(
      mediaStyleDefinitions
    ).reduce((mediaStyles, dimension) => {
      const boxStyle = buildStyles(mediaStyleDefinitions[dimension], theme);
      const mediaD = theme.mediaDefinition(dimension);
      mediaStyles[mediaD] = assignStyle(boxStyle.styles, boxStyle.restProps);
      return mediaStyles;
    }, {});

    composedStyles = assignStyle(styles, computedMediaStyles);
  }

  return [composedStyles, restProps];
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
