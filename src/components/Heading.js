// @flow
import React from 'react';
import PropTypes from 'prop-types';
import Text, { type TextProps } from './Text';
import { type Theme } from '../types';
import { get } from '../utils';

export type HeadingProps = TextProps & {
  type?: number, // Type of heading (1 - 6)
};

type HeadingContext = {
  theme: Theme,
};

const Heading = (props: HeadingProps, { theme }: HeadingContext) => {
  const type = props.type || 2;
  const {
    size = get(theme, `properties.heading.size${type}`),
    bold = get(theme, 'properties.heading.boldByDefault'),
    fontFamily = get(theme, 'properties.heading.fontFamily'),
    marginBottom = get(theme, 'properties.heading.marginBottom'),
    marginTop = get(theme, 'properties.heading.marginTop'),
    ...restProps
  } = props;

  return (
    <Text
      as={`h${type}`}
      size={size}
      bold={bold && get(theme, 'properties.heading.bold', true)}
      fontFamily={fontFamily}
      marginBottom={marginBottom}
      marginTop={marginTop}
      {...restProps}
    />
  );
};

Heading.contextTypes = {
  theme: PropTypes.object,
};

export default Heading;
