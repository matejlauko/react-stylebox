// @flow
import React from 'react';
import Text, { type TextProps } from './Text';
import { get } from '../utils';
import withStyle from '../withStyle';

const Paragraph = (props: TextProps) => {
  const theme = props.theme;

  const {
    marginBottom = get(theme, 'paragraph.marginBottom'),
    marginTop = get(theme, 'paragraph.marginTop'),
    lineHeight = get(theme, 'paragraph.lineHeight'),
    ...restProps
  } = props;

  return <Text as={'p'} marginBottom={marginBottom} marginTop={marginTop} lineHeight={lineHeight} {...restProps} />;
};

export default withStyle('theme')(Paragraph);
