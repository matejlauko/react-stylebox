// @flow
import React from 'react';
import PropTypes from 'prop-types';
import Text, { type TextProps } from './Text';
import { type Theme } from '../types';
import { get } from '../utils';

type ParagraphContext = {
  theme: Theme,
};

const Paragraph = (props: TextProps, { theme }: ParagraphContext) => {
  const {
    marginBottom = get(theme, 'properties.paragraph.marginBottom'),
    marginTop = get(theme, 'properties.paragraph.marginTop'),
    ...restProps
  } = props;

  return <Text as={'p'} marginBottom={marginBottom} marginTop={marginTop} {...restProps} />;
};

Paragraph.contextTypes = {
  theme: PropTypes.object,
};

export default Paragraph;
