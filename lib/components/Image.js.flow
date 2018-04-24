// @flow
import React from 'react';
import Box, { type BoxProps } from './Box';
import { composeStyles } from '../compose';

type Size = {|
  w: number | string, // px or %
  h?: number | string, // px or %
|};

type ImageProps = BoxProps & {
  size: Size,
  src: string | number, // number, because src={require('./foo.png')}
  alt?: string,
};

type ImageAttrs = {
  alt?: string,
  role?: string,
  width: string,
  height?: string,
};

const getComponent = imageAttrs => props => <img {...imageAttrs} {...props} />; // eslint-disable-line jsx-a11y/alt-text

const Image = ({ as, size, src, responsive = true, width, height, alt, media, ...restProps }: ImageProps) => {
  const imageAttrs: ImageAttrs = {
    width: `${String(size.w)}${typeof size.w === 'number' ? 'px' : ''}`,
    height: size.h ? `${String(size.h)}${typeof size.h === 'number' ? 'px' : ''}` : undefined,
  };
  const boxSize = {
    width: responsive ? '100%' : width || imageAttrs.width,
    height: responsive ? 'auto' : height || imageAttrs.height,
  };

  if (responsive) {
    media = composeStyles(
      {
        sm: {
          width: width || imageAttrs.width,
          height: height || imageAttrs.height,
        },
      },
      media
    );
  }

  if (alt) {
    imageAttrs.alt = alt;
  } else {
    imageAttrs.role = 'presentation';
  }

  return <Box as={getComponent(imageAttrs)} src={src} media={media} {...boxSize} {...restProps} />;
};

export default Image;
