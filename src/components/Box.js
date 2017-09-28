// @flow
import React, { type Node, type ElementType } from 'react';
import PT from 'prop-types';
import { type Renderer, type Theme, type Styles, type Color } from '../types';
import { composeBoxStyles, makeClassname } from './utils';

type MaybeRhythm = number | string;
type ColorStyle = Color | string;

export type BoxProps = {
  as?: ElementType, // React component or JSX string
  style?: (Theme, Styles) => Styles | Styles, // Style function or object
  className?: string, // Class name for the component
  children?: Node, // Children of the component
  innerRef?: () => {}, // ref to created component

  // Rhythm props
  margin?: MaybeRhythm,
  marginHorizontal?: MaybeRhythm,
  marginVertical?: MaybeRhythm,
  marginBottom?: MaybeRhythm,
  marginLeft?: MaybeRhythm,
  marginRight?: MaybeRhythm,
  marginTop?: MaybeRhythm,

  padding?: MaybeRhythm,
  paddingHorizontal?: MaybeRhythm,
  paddingVertical?: MaybeRhythm,
  paddingBottom?: MaybeRhythm,
  paddingLeft?: MaybeRhythm,
  paddingRight?: MaybeRhythm,
  paddingTop?: MaybeRhythm,

  bottom?: MaybeRhythm,
  height?: MaybeRhythm,
  left?: MaybeRhythm,
  maxHeight?: MaybeRhythm,
  maxWidth?: MaybeRhythm,
  minHeight?: MaybeRhythm,
  minWidth?: MaybeRhythm,
  right?: MaybeRhythm,
  top?: MaybeRhythm,
  width?: MaybeRhythm,

  // Flexbox layout
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around',
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',
  flexBasis?: number | string,
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
  flexGrow?: number,
  flexShrink?: number,
  flexWrap?: 'wrap' | 'nowrap',
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around',

  display?: 'flex' | 'block' | 'inline-block' | 'hidden' | 'inline' | 'table',
  backgroundColor?: ColorStyle,
  opacity?: number,
  overflow?: 'visible' | 'hidden' | 'scroll',
  position?: 'absolute' | 'relative',
  zIndex?: number,

  borderStyle?: 'solid' | 'dotted' | 'dashed',

  borderWidth?: number,
  borderBottomWidth?: number,
  borderLeftWidth?: number,
  borderRightWidth?: number,
  borderTopWidth?: number,

  borderRadius?: number,
  borderBottomLeftRadius?: number,
  borderBottomRightRadius?: number,
  borderTopLeftRadius?: number,
  borderTopRightRadius?: number,

  borderColor?: ColorStyle,
  borderBottomColor?: ColorStyle,
  borderLeftColor?: ColorStyle,
  borderRightColor?: ColorStyle,
  borderTopColor?: ColorStyle,
};

type BoxContext = {
  renderer: Renderer,
  theme: Theme,
};

const defaultStyles = (styles: BoxProps): BoxProps => {
  let baseStyles = {};
  baseStyles.position = 'relative';

  // Flex shorthand
  // if (typeof styles.flex === 'number') {
  //   baseStyles.flexBasis = 'auto';
  //   baseStyles.flexGrow = styles.flex;
  //   baseStyles.flexShrink = styles.flex;
  // }

  if (styles.borderColor) {
    if (!styles.borderWidth) styles.borderWidth = 1;
    if (!styles.borderStyle) styles.borderStyle = 'solid';
  }

  // Flexbox helper
  if (
    !styles.display &&
    (styles.flexDirection ||
      styles.justifyContent ||
      styles.alignItems ||
      styles.alignContent ||
      styles.flexWrap)
  ) {
    styles.display = 'flex';
  }

  return {
    // Defaults
    ...baseStyles,
    ...styles,
  };
};

const Box = (
  { as: Component, style, className, children, ...props }: BoxProps,
  { renderer, theme }: BoxContext
) => {
  const { composedStyle, restProps } = composeBoxStyles(defaultStyles(props), theme.properties);
  const otherStyles = typeof style === 'function' ? style(theme.properties, composedStyle) : style;

  const mixedStyleRules = {
    ...composedStyle,
    ...otherStyles,
  };
  const rendererClassname = renderer.renderRule(() => mixedStyleRules);

  const finalProps = {
    className: makeClassname(rendererClassname, className, children, Component),
    // ref: innerRef ? innerRef : undefined,
    ...restProps,
  };

  return React.createElement(Component || 'div', finalProps, children);
};

Box.displayName = 'Box';

Box.contextTypes = {
  renderer: PT.object,
  theme: PT.object,
};

export default Box;
