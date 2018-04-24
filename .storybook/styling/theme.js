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
  breakpoints: {
    xs: '0-767',
    sm: '768-1023', // 48em
    md: '1024-1199', // 64em
    lg: '1200-1391', // 76em
    xl: 1392, // 87em
  },
  grid: {
    gridSize: 12,
    gutterWidth: 2,
    outerMargin: 2,
    container: {
      sm: 46, // 736px
      md: 61, // 976px
      lg: 75, // 1216px
      xl: 85, // 1360px
    },
  },
  colors,
  typographySetup: {
    baseFontSize: 1, // rem
    fontSizeScale: 'step2', // 8/9 step
    lineHeight: 1.3, // unitless
  },
  heading: {
    boldByDefault: true,
    size3: 8,
  },
  paragraph: {
    marginBottom: 2,
    marginTop: 2,
  },
  button: {
    borderRadius: '3px',
    disabled: {
      opacity: 0.7,
    },
    themes: {
      primary: {
        backgroundColor: colors.primary,
        size: 1,
        bold: true,
        style: {
          ':hover': {
            backgroundColor: colors.primaryDarker,
          },
        },
      },
    },
  },
};

export default theme;
