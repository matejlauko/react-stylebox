// @flow
import React, { type Node, type ElementType } from 'react';
import PT from 'prop-types';
import { type Renderer, Theme } from '../types';

type BoxContext = {
  renderer: Renderer,
  theme: Theme,
};

type BoxProps = {
  as?: ElementType, // React component or JSX string
  style?: Object, // Style object
  className?: string, // Class name for the component
  children?: Node, // Children of the component
};

const mixClassname = (rendererClassname: string, propClassname?: string): string => {
  let classname = rendererClassname;

  if (propClassname) {
    classname = `${propClassname} ${classname}`;
  }

  return classname;
};

const Box = (
  { as: Component, style = {}, className, ...restProps }: BoxProps,
  { renderer, theme }: BoxContext
) => {
  const styleObject = typeof style === 'function' ? style(theme.properties) : style;

  const finalProps = {
    className: mixClassname(renderer.renderRule(() => styleObject), className),
    ...restProps,
  };

  return React.createElement(Component || 'div', finalProps);
};

Box.displayName = 'Box';

Box.contextTypes = {
  renderer: PT.object,
  theme: PT.object,
};

export default Box;
