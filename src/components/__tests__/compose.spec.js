import { composeStyles } from '../compose';

const theme = { t: 't' };

describe('composeStyles', () => {
  it('should compose basic object styles', () => {
    const style1 = { a: 1, b: 1 };
    const style2 = { c: 2, b: 2 };
    const c = composeStyles(style1, style2)();
    expect(c).toEqual({ a: 1, b: 1, c: 2 });
  });

  it('should compose basic object styles chain', () => {
    const style1 = { a: 1, b: 1 };
    const style2 = { c: 2, b: 2 };
    const style3 = { a: 3, d: 4 };
    const c1 = composeStyles(style1);
    const c2 = composeStyles(c1, style2);
    const c3 = composeStyles(c2, style3);
    const c = c3();
    expect(c).toEqual({ a: 1, b: 1, c: 2, d: 4 });
  });

  it('should compose function styles', () => {
    const style1 = t => ({ a: 1, b: t.t });
    const style2 = { c: 2, b: 2 };
    const c = composeStyles(style1, style2)(theme);
    expect(c).toEqual({ a: 1, b: 't', c: 2 });
  });

  it('should compose function styles chain', () => {
    const style1 = t => ({ a: t.t, b: 1 });
    const style2 = { c: 2, b: 2 };
    const style3 = { a: 3, d: 4 };
    const c1 = composeStyles(style1);
    const c2 = composeStyles(c1, style2);
    const c3 = composeStyles(c2, style3);
    const c = c3(theme);
    expect(c).toEqual({ a: 't', b: 1, c: 2, d: 4 });
  });
});
