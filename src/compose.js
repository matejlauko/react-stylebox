import {
  type Theme,
  type Styles,
  type StyleProp
} from './types';
import mergeDeepRight from 'ramda/src/mergeDeepRight';

export const composeStyles = (builtStyle ? : Styles = {}, style: StyleProp = {}) => (
  theme: Theme,
  parentStyle: Styles
) => {
  const builtStyleObject = typeof builtStyle === 'function' ? builtStyle(theme) : builtStyle;
  const styleObject = typeof style === 'function' ? style(theme, builtStyleObject) : style;

  return mergeDeepRight(builtStyleObject, styleObject);
};
