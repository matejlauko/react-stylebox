// @flow
import React from 'react';
import Box, { type BoxProps } from './Box';
import { type Color, type Bold, type Dimension } from '../types';
import { composeStyles } from '../compose';
import { computeStyles } from '../compute';
import { get } from '../utils';
import withStyle from '../withStyle';
import mergeDeepRight from 'ramda/src/mergeDeepRight';

export type TextProps = BoxProps & {
  fontFamily?: string,
  size?: number,
  align?: 'left' | 'right' | 'center' | 'justify',
  bold?: Bold,
  light?: boolean,
  color?: Color,
  decoration?: 'none' | 'underline' | 'line-through',
  italic?: boolean,
  lineHeight?: number,
};

const fontSize = (typography, size) => {
  return typeof size === 'number' ? typography.fontSize(size) : size;
};

const computeSetup = {
  size: (val, { typography }) => ({ fontSize: fontSize(typography, val) }),
  color: (color, theme) => theme.colors[color] || color,
  fontFamily: (val, theme) => (theme.text.defaultFontFamily ? `${val}, ${theme.text.defaultFontFamily}` : val),
  align: val => ({ textAlign: val }),
  bold: (val, theme) => ({
    fontWeight: val === true ? get(theme, 'text.bold', 'bold') : val === false ? 'normal' : val,
  }),
  light: (val, theme) => (val === true ? get(theme, 'text.bold') : val),
  decoration: val => ({ textDecoration: val }),
  italic: val => ({ fontStyle: val && 'italic' }),
  lineHeight: val => val,
};

const Text = ({ as, style, media, theme, ...props }: TextProps) => {
  const [textStyles, restProps] = computeStyles(computeSetup)(props, theme);
  const composedStyles = composeStyles(textStyles, style);

  // TODO: refactor
  let computedMediaStyles = media;
  if (media) {
    const mediaStyleDefinitions: { [Dimension]: BoxProps } = typeof media === 'function' ? media(theme) : media;

    computedMediaStyles = Object.keys(mediaStyleDefinitions).reduce((mediaStyles, dimension) => {
      const [textStyles, restProps] = computeStyles(computeSetup)(mediaStyleDefinitions[dimension], theme);
      mediaStyles[dimension] = mergeDeepRight(textStyles, restProps);
      return mediaStyles;
    }, {});
  }

  return <Box as={as || 'span'} style={composedStyles} media={computedMediaStyles} {...restProps} />;
};

Text.displayName = 'Text';

export default withStyle('theme')(Text);
