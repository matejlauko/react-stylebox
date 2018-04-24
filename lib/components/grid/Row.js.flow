// @flow
import * as React from 'react';
import Box, { type BoxProps } from '../Box';
import withStyle from '../../withStyle';

type RowProps = BoxProps;

const Component: React.StatelessFunctionalComponent<*> = props => <div {...props} />;
Component.displayName = 'Row';

const Row = ({ as = Component, theme, ...props }: RowProps) => {
  return (
    <Box
      as={as}
      flexGrow={0}
      flexShrink={1}
      flexBasis="auto"
      flexDirection="row"
      flexWrap="wrap"
      marginRight={String(theme.grid.gutterWidth / 2 * -1) + 'rem'}
      marginLeft={String(theme.grid.gutterWidth / 2 * -1) + 'rem'}
      {...props}
    />
  );
};

export default withStyle('theme')(Row);
