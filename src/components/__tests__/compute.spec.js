import { computeStyles } from '../compute';

const theme = { text: { bold: 700, fontFamily: 'Arial' } };

const cases = [
  {
    name: 'same - val',
    setup: { lineHeight: 2.5 },
    props: { lineHeight: 'a' },
    result: [{ lineHeight: 2.5 }, {}],
  },
  {
    name: 'default - no prop',
    setup: { lineHeight: 2.5 },
    props: {},
    result: [{ lineHeight: 2.5 }, {}],
  },
  {
    name: 'same - func',
    setup: { lineHeight: val => val },
    props: { lineHeight: 1.5 },
    result: [{ lineHeight: 1.5 }, {}],
  },
  {
    name: 'func - no prop',
    setup: { lineHeight: val => val },
    props: {},
    result: [{}, {}],
  },
  {
    name: 'same & extra props',
    setup: { lineHeight: val => val },
    props: { lineHeight: 1.5, alt: 'alrt', dataSize: 12 },
    result: [{ lineHeight: 1.5 }, { alt: 'alrt', dataSize: 12 }],
  },
  {
    name: 'using theme & different name',
    setup: {
      bold: (val, theme) => ({ fontWeight: typeof val === 'boolean' ? theme.text.bold : val }),
    },
    props: { bold: true },
    result: [{ fontWeight: 700 }, {}],
  },
  {
    name: 'with default',
    setup: { fontFamily: (val, theme) => val || theme.text.fontFamily },
    props: { alt: 'alrt', dataSize: 12 },
    result: [{ fontFamily: 'Arial' }, { alt: 'alrt', dataSize: 12 }],
  },
];

cases.forEach(ca => {
  it(`should build custom styles - ${ca.name}`, () => {
    expect(computeStyles(ca.setup)(ca.props, theme)).toEqual(ca.result);
  });
});
