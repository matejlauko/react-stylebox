// @flow
import React from 'react';
import Text, { type TextProps } from './Text';
import { get } from '../utils';
import withStyle from '../withStyle';

export type HeadingProps = TextProps & {
  type?: number, // Type of heading (1 - 6)
};

const Heading = (props: HeadingProps) => {
  const type = props.type || 2;
  const theme = props.theme;

  const {
    size = get(theme, `heading.size${type}`),
    color = get(theme, 'heading.color'),
    bold = get(theme, 'heading.boldByDefault'),
    fontFamily = get(theme, 'heading.fontFamily'),
    marginBottom = get(theme, 'heading.marginBottom'),
    marginTop = get(theme, 'heading.marginTop'),
    ...restProps
  } = props;

  return (
    <Text
      as={`h${type}`}
      size={size}
      color={color}
      bold={bold && (bold === true ? get(theme, 'heading.bold', true) : bold)}
      fontFamily={fontFamily}
      marginBottom={marginBottom}
      marginTop={marginTop}
      {...restProps}
    />
  );
};

export default withStyle('theme')(Heading);
