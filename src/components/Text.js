// @flow
import React from 'react';
import PropTypes from 'prop-types';
import Box, { type BoxProps } from './Box';
import { type Theme, type Color, type Bold } from '../types';
import { composeStyles } from './compose';
import { computeStyles } from './compute';
import { get } from '../utils';

export type TextProps = BoxProps & {
  fontFamily?: string,
  size?: number,
  align?: 'left' | 'right' | 'center' | 'justify',
  bold?: Bold,
  color?: Color,
  decoration?: 'none' | 'underline' | 'line-through',
  italic?: boolean,
  lineHeight?: number,
};

type TextContext = {
  theme: Theme,
};

const fontSize = (typography, size) => {
  return typeof size === 'number' ? typography.fontSize(size) : size;
};

const computeSetup = {
  size: (val, { typography }) => ({ fontSize: fontSize(typography, val) }),
  color: (color, theme) => theme.colors[color] || color,
  fontFamily: val => val,
  align: val => ({ textAlign: val }),
  bold: (val, theme) => ({
    fontWeight: val === true ? get(theme, 'text.bold', 'bold') : val === false ? 'normal' : val,
  }),
  decoration: val => ({ textDecoration: val }),
  italic: val => ({ fontStyle: val && 'italic' }),
  lineHeight: val => val,
};

const Text = ({ as, style, ...props }: TextProps, { theme }: TextContext) => {
  const [textStyles, restProps] = computeStyles(computeSetup)(props, theme);
  const composedStyles = composeStyles(style, textStyles);

  return <Box as={as || 'span'} style={composedStyles} {...restProps} />;
};

Text.displayName = 'Text';

Text.contextTypes = {
  theme: PropTypes.object,
};

export default Text;
