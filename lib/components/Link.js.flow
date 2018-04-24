import React from 'react';
import type { TextProps } from './Text';
import Text from './Text';
import { get } from '../utils';
import withStyle from '../withStyle';

type LinkProps = TextProps & {
  raw?: boolean,
  href?: string,
  onClick?: () => {},
};

const Link = (props: LinkProps) => {
  const {
    raw,
    theme,
    color = !raw && get(theme, 'link.color'),
    bold = get(theme, 'link.bold'),
    fontFamily = get(theme, 'link.fontFamily'),
    decoration = get(theme, 'link.decoration'),
    ...restProps
  } = props;

  return <Text as={'a'} color={color} bold={bold} fontFamily={fontFamily} decoration={decoration} {...restProps} />;
};

export default withStyle('theme')(Link);
