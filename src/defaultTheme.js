import { type UserTheme } from './types';

const defaultTheme: UserTheme = {
  breakpoints: {},
  grid: {
    gridSize: 12,
    gutterWidth: 2,
    outerMargin: 2,
    container: {},
  },
  colors: {},
  heading: {},
  text: {},
  typographySetup: {
    baseFontSize: 1,
    fontSizeScale: 'step2',
    lineHeight: 1.3,
  },
};

export default defaultTheme;
