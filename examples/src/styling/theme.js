export default {
  typography: {
    fontSize: '1em',
    lineHeight: 1.4,
  },
  text: {
    fontFamily: 'sans-serif',
    color: '#222',
  },
  header: {
    bgColor: '#222',
    height: '150px',
  },
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
};
