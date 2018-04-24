import {
  mediaDefinition
} from '../themeBuilder';

const theme = {
  breakpoints: {
    sm: 500,
    md: '500-700',
    lg: '800px',
  },
};

it('should generate media query', () => {
  expect(mediaDefinition(theme)('sm')).toBe('@media only screen and (min-width: 500px)');
  expect(mediaDefinition(theme)('md')).toBe(
    '@media only screen and (min-width: 500px) and (max-width: 700px)'
  );
  expect(mediaDefinition(theme)('lg')).toBe('@media only screen and (min-width: 800px)');
});
// TODO: tests cases
it('should generate media query for string values', () => {
  expect(mediaDefinition(theme)('sm')).toBe('@media only screen and (min-width: 500px)');
  expect(mediaDefinition(theme)('md')).toBe(
    '@media only screen and (min-width: 500px) and (max-width: 700px)'
  );
  expect(mediaDefinition(theme)('lg')).toBe('@media only screen and (min-width: 800px)');
});

it('should generate media query for value 0 => no media query', () => {
  expect(mediaDefinition(theme)('sm')).toBe('@media only screen and (min-width: 500px)');
  expect(mediaDefinition(theme)('md')).toBe(
    '@media only screen and (min-width: 500px) and (max-width: 700px)'
  );
  expect(mediaDefinition(theme)('lg')).toBe('@media only screen and (min-width: 800px)');
});

it('should generate media query for spread', () => {
  expect(mediaDefinition(theme)('sm')).toBe('@media only screen and (min-width: 500px)');
  expect(mediaDefinition(theme)('md')).toBe(
    '@media only screen and (min-width: 500px) and (max-width: 700px)'
  );
  expect(mediaDefinition(theme)('lg')).toBe('@media only screen and (min-width: 800px)');
});
