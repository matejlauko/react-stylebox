// @flow
import mergeDeepLeft from 'ramda/src/mergeDeepLeft';
import { type Theme, type UserTheme } from './types';
import typography from './typography';
import defaultTheme from './defaultTheme';

export default function buildTheme(theme: UserTheme): Theme {
  const mergedTheme = mergeDeepLeft(theme, defaultTheme);

  return {
    ...mergedTheme,
    typography: typography(mergedTheme.typographySetup),
  };
}
