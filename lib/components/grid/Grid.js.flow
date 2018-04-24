// @flow
import * as React from 'react';
import Box, { type BoxProps } from '../Box';
import { type Theme } from '../../types';
import { composeStyles } from '../../compose';
import withStyle from '../../withStyle';
import Col from './Col';
import Row from './Row';

type GridProps = BoxProps & {
  fluid?: boolean,
};

const DIMENSION_NAMES = ['sm', 'md', 'lg', 'xl'];

const Component: React.StatelessFunctionalComponent<*> = props => <div {...props} />;
Component.displayName = 'Grid';

const generateGrid = gridSize => {
  return (
    <Row position="absolute" zIndex={0} top={0} left="1rem" right="1rem" width="100%" height="100%">
      {Array.from(Array(12)).map((_, i) => (
        <Col key={`grid-col-${i}`} grid={{ xs: 1 }}>
          <Box backgroundColor="rgba(37,223,223, 0.2)" height="100%" />
        </Col>
      ))}
    </Row>
  );
};

const Grid = ({ fluid = false, style, media, children, theme, showGrid, ...restProps }: GridProps) => {
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
          width: theme.grid.container[d],
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
    >
      {showGrid && generateGrid(theme.grid.gridSize)}
      {children}
    </Box>
  );
};

export default withStyle('theme')(Grid);
