// @flow
import * as React from 'react';
import PT from 'prop-types';
import { type Renderer, type Theme, type Color, type StyleProp, type MediaDefinitions } from '../types';
import { buildBoxStyles, makeClassname } from './boxBuild';
import { composeStyles } from '../compose';
import withStyle from '../withStyle';

type MaybeRhythm = number | string;
type ColorStyle = Color | string;

export type BoxProps = {
  as?: React.ElementType, // React component or JSX string
  theme?: Theme,
  style?: StyleProp,
  className?: string, // Class name for the component
  children?: React.Node, // Children of the component
  innerRef?: () => {}, // ref to created component

  media?: MediaDefinitions,

  // Rhythm props
  margin?: MaybeRhythm,
  marginX?: MaybeRhythm,
  marginY?: MaybeRhythm,
  marginBottom?: MaybeRhythm,
  marginLeft?: MaybeRhythm,
  marginRight?: MaybeRhythm,
  marginTop?: MaybeRhythm,

  padding?: MaybeRhythm,
  paddingX?: MaybeRhythm,
  paddingY?: MaybeRhythm,
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
  flex?: string | number,
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around',
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
  textAlign?: 'center' | 'left' | 'right' | 'justify',

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
};

const defaultStyles = (styles: BoxProps): BoxProps => {
  let baseStyles = {};
  baseStyles.position = 'relative';

  if (styles.borderColor) {
    if (!styles.borderWidth) styles.borderWidth = 1;
    if (!styles.borderStyle) styles.borderStyle = 'solid';
  }

  ['Top', 'Bottom', 'Left', 'Right'].forEach(d => {
    if (styles[`border${d}Color`]) {
      if (!styles.borderWidth) styles.borderWidth = 0;
      if (!styles[`border${d}Width`]) styles[`border${d}Width`] = 1;
      if (!styles.borderStyle) styles.borderStyle = 'solid';
    }
  });

  // Flexbox helper
  if (
    !styles.display &&
    (styles.flex ||
      styles.flexDirection ||
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

const Box = ({ as: Component, style, className, children, theme, ...props }: BoxProps, { renderer }: BoxContext) => {
  const [boxStyles, restProps] = buildBoxStyles(defaultStyles(props), theme);

  const mixedStyleRules = {
    ...boxStyles,
    ...composeStyles(boxStyles, style)(theme),
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
};

export default withStyle('theme')(Box);
