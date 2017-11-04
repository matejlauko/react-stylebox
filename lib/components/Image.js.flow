// @flow
import React from 'react';
import PropTypes from 'prop-types';
import Box, { type BoxProps } from './Box';
import { type Theme } from '../types';

type Size = {|
  w: number | string, // px or %
  h?: number | string, // px or %
|};

type ImageProps = BoxProps & {
  size: Size,
  src: string | number, // number, because src={require('./foo.png')}
  alt?: string,
};

type ImageContext = {
  theme: Theme,
};

type ImageAttrs = {
  alt?: string,
  role?: string,
  width: string,
  height?: string,
};

const getComponent = imageAttrs => props => <img {...imageAttrs} {...props} />; // eslint-disable-line jsx-a11y/alt-text

const Image = ({ as, size, src, alt, ...restProps }: ImageProps, { theme }: ImageContext) => {
  const imageAttrs: ImageAttrs = {
    width: `${String(size.w)}${typeof size.w === 'number' ? 'px' : ''}`,
    height: size.h && `${String(size.h)}${typeof size.h === 'number' ? 'px' : ''}`,
  };
  if (alt) {
    imageAttrs.alt = alt;
  } else {
    imageAttrs.role = 'presentation';
  }

  return <Box as={getComponent(imageAttrs)} src={src} {...restProps} />;
};

Image.contextTypes = {
  theme: PropTypes.object,
};

export default Image;
