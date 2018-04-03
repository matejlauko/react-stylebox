// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import Box, { type BoxProps } from '../Box';
import { type Theme } from '../../types';

type RowContext = {
  theme: Theme,
};

type RowProps = BoxProps;

const Component: React.StatelessFunctionalComponent<*> = props => <div {...props} />;
Component.displayName = 'Row';

const Row = ({ as = Component, ...props }: RowProps, { theme }: RowContext) => {
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

Row.contextTypes = {
  theme: PropTypes.object,
};

export default Row;
