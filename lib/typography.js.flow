// @flow
import { type TypographySetup, type Typography } from './types';

// inlehmansterms.net/2014/06/09/groove-to-a-vertical-rhythm
// 24ways.org/2011/composing-the-new-canon
// modularscale.com
// type-scale.com

const scale = {
  step0: 1,
  step1: 15 / 16,
  step2: 8 / 9,
  step3: 5 / 6,
  step4: 4 / 5,
  step5: 3 / 4,
  step6: 1 / Math.SQRT2,
  step7: 2 / 3,
  step8: 5 / 8,
  step9: 3 / 5,
  step10: 9 / 16,
  step11: 8 / 15,
  step12: 1 / 2,
  step13: 2 / 5,
  step14: 3 / 8,
  step15: 1 / 3,
  step16: 1 / 4,
};

export type FontSizeScale = number | $Keys<typeof scale>;

export const calculateFontSize = (baseFontSize: number, scaleRatio: number) => (level: number): string =>
  Array.from(Array(Math.abs(level))).reduce(size => {
    return level > 0 ? size * (1 / scaleRatio) : size / (1 / scaleRatio);
  }, baseFontSize) + 'rem';

const typography = ({ baseFontSize, fontSizeScale, lineHeight }: TypographySetup): Typography => {
  const scaleRatio = typeof fontSizeScale === 'string' ? scale[fontSizeScale] : fontSizeScale;

  return {
    baseFontSize: baseFontSize + 'rem',
    fontSize: calculateFontSize(baseFontSize, scaleRatio),
    lineHeight,
    rhythm: (ratio: number) => lineHeight * ratio + 'rem',
  };
};

export default typography;
