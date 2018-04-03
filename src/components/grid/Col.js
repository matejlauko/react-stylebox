// @flow
import PropTypes from 'prop-types';
import React from 'react';
import { assignStyle } from 'css-in-js-utils';
import uniq from 'ramda/src/uniq';
import Box, { type BoxProps } from '../Box';
import { type Theme, Dimension } from '../../types';
/**
 * <Col
 *   grid={{
 *     xs: 5,
 *     md: false,
 *     xl: true
 *   }}
 */

type Rule = number | boolean;
type GridSettings = { [Dimension]: Rule };
type OffsetSettings = { [Dimension]: number };

type ColProps = BoxProps & {
  grid?: GridSettings,
  offset?: OffsetSettings,
  display?: 'string',
  nomarg?: boolean,
};

type ColContext = {
  theme: Theme,
};

const defaultStyle = (display?: string) => ({
  display,
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: 0,
  maxWidth: '100%',
});

export const gridRules = (theme: Theme, display?: string = 'block') => (
  d: Dimension,
  rule: Rule,
  nomarg?: boolean
): Object => {
  if (typeof rule === 'number' && !isNaN(parseFloat(rule))) {
    let nom = 100 / theme.grid.gridSize * (rule: number) + '%';

    return {
      flexGrow: 0,
      flexBasis: nom,
      maxWidth: nom,
      display,
      marginBottom: nomarg ? undefined : 1,
    };
  } else {
    return rule ? defaultStyle(display) : { display: 'none' };
  }
};

export const offsetRules = (theme: Theme) => (d: Dimension, rule: number) => ({
  marginLeft: 100 / theme.grid.gridSize * rule + '%',
});

const Component = props => <div {...props} />;
Component.displayName = 'Col';

const Col = (
  {
    as = Component,
    grid,
    offset,
    display = 'block',
    nomarg,
    media: customMedia,
    ...restProps
  }: ColProps,
  { theme }: ColContext
) => {
  let gridStyles = {};

  if (grid || offset) {
    const makeGridRules = gridRules(theme, display);
    const makeOffsetRules = offsetRules(theme);
    const dimensions = uniq(Object.keys(grid || {}).concat(Object.keys(offset || {})));

    gridStyles = dimensions.reduce((styles, d) => {
      styles[d] = Object.assign(
        {},
        styles[d],
        grid[d] ? makeGridRules(d, grid[d], nomarg) : null,
        offset[d] ? makeOffsetRules(d, offset[d]) : null
      );
      return styles;
    }, {});
  }

  const media = assignStyle(
    {
      xs: {
        display,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
        maxWidth: '100%',
      },
    },
    gridStyles,
    customMedia
  );

  return (
    <Box
      as={as}
      paddingRight={theme.grid.gutterWidth / 2 + 'rem'}
      paddingLeft={theme.grid.gutterWidth / 2 + 'rem'}
      media={media}
      {...restProps}
    />
  );
};

Col.displayName = 'Col';
Col.contextTypes = {
  theme: PropTypes.object,
};

export default Col;
