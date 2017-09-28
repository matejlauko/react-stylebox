import color from 'color';

const primary = '#c0fcc4';
const secondary = '#b4f9db';

const colors = {
  primary,
  primaryDarker: color(primary)
    .darken(0.1)
    .string(),
  secondary,
  secondaryDarker: color(secondary)
    .darken(0.1)
    .string(),
  success: 'green',
  warning: 'orange',
  danger: 'red',
  black: 'black',
  white: 'white',
};

const theme: UserTheme = {
  colors,
  typographySetup: {
    baseFontSize: 1, // rem
    fontSizeScale: 'step2', // 8/9 step
    lineHeight: 1.3, // unitless
  },
};

export default theme;
