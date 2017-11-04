// @flow
import mergeDeepLeft from 'ramda/src/mergeDeepLeft';
import pipe from 'ramda/src/pipe';
import { type Theme, type UserTheme, type Dimension } from './types';
import typography from './typography';
import defaultTheme from './defaultTheme';

export const mediaDefinition = (theme: UserTheme) => (d: Dimension): string => {
  const breakpoints = pipe(
    d => (typeof d === 'string' ? d.split('-') : [d]),
    ds => ds.map(d => (isNaN(d) ? d : d + 'px')),
    ds => ds.map((d, i) => (i === 0 ? `(min-width: ${d})` : `(max-width: ${d})`)),
    ds => (ds[1] ? ds.join(' and ') : ds[0])
  )(theme.breakpoints[d] ? theme.breakpoints[d] : d);

  return `@media only screen and ${breakpoints}`;
};

export default function buildTheme(theme: UserTheme): Theme {
  const mergedTheme = mergeDeepLeft(theme, defaultTheme);

  return {
    ...mergedTheme,
    typography: typography(mergedTheme.typographySetup),
    mediaDefinition: mediaDefinition(theme),
  };
}
