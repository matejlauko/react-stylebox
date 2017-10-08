import { type Theme, type Styles, type StyleProp } from '../types';
import { assignStyle } from 'css-in-js-utils';

export const composeStyles = (style: StyleProp, builtStyle?: Styles = {}) => (
  theme: Theme,
  parentStyle: Styles
) => {
  const styleObject = typeof style === 'function' ? style(theme, builtStyle) : style;

  return assignStyle(builtStyle, styleObject);
};
