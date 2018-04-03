// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import Box, { type BoxProps } from '../Box';
import { type Theme } from '../../types';
import { composeStyles } from '../../compose';

type GridProps = BoxProps & {
  fluid?: boolean,
};

const DIMENSION_NAMES = ['sm', 'md', 'lg', 'xl'];

const Component: React.StatelessFunctionalComponent<*> = props => <div {...props} />;
Component.displayName = 'Grid';

const Grid = ({ fluid = false, style, media, ...restProps }: GridProps) => {
  const gridStyle = fluid
    ? (theme: Theme) => ({
        paddingLeft: theme.grid.outerMargin + 'rem',
        paddingRight: theme.grid.outerMargin + 'rem',
      })
    : (theme: Theme) => ({
        paddingLeft: '1rem',
        paddingRight: '1rem',
        marginLeft: 'auto',
        marginRight: 'auto',
      });

  const gridMedia = theme =>
    DIMENSION_NAMES.reduce(
      (queries, d) => ({
        ...queries,
        [d]: {
          width: String(theme.grid.container[d]) + 'rem',
        },
      }),
      {}
    );

  return (
    <Box
      as={Component}
      flexDirection="column"
      style={composeStyles(gridStyle, style)}
      media={composeStyles(gridMedia, media)}
      {...restProps}
    />
  );
};

Grid.contextTypes = {
  theme: PropTypes.object,
};

export default Grid;
