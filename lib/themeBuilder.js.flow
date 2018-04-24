// @flow
import mergeDeepRight from 'ramda/src/mergeDeepRight';
import isNil from 'ramda/src/isNil';
import pipe from 'ramda/src/pipe';
import { type Theme, type UserTheme, type Dimension } from './types';
import typography from './typography';
import defaultTheme from './defaultTheme';

export const mediaDefinition = (theme: UserTheme) => (d: Dimension): string => {
  const breakpoints = pipe(
    d => (typeof d === 'string' ? d.split('-') : [d]),
    ds =>
      ds.map((d, i) => {
        if (d == 0) {
          return undefined;
        }
        const valFromQueries = !isNil(theme.breakpoints[d]);
        let val = valFromQueries ? theme.breakpoints[d] : d;

        if (i === 0) {
          return `(min-width: ${val})`;
        }
        if (i === 1) {
          if (valFromQueries) {
            val = val.replace(/\d+/, num => Number(num) - 1);
          }
          return `(max-width: ${val})`;
        }
      }),
    ds => ds.filter(d => d !== undefined),
    ds => (ds[1] ? ds.join(' and ') : ds[0])
  )(isNil(theme.breakpoints[d]) ? d : theme.breakpoints[d]);

  return `@media ${breakpoints}`;
};

export default function buildTheme(theme: UserTheme): Theme {
  const mergedTheme = mergeDeepRight(defaultTheme || {}, theme || {});

  return {
    ...mergedTheme,
    typography: typography(mergedTheme.typographySetup),
    mediaDefinition: mediaDefinition(theme),
  };
}
