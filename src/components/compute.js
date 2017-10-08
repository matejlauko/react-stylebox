// @flow
import { type Theme, type Styles, type RestProps } from '../types';
type StyleSetup = Object;
type StyleProps = Object;

const ruleValue = (setup, props, theme) => key => ({
  rule: setup[key],
  val: typeof setup[key] === 'function' ? setup[key](props[key], theme) : setup[key],
  key,
});

const keyValue = (theme, props) => ({ rule, val, key }) => {
  const realKey = typeof val === 'object' ? Object.keys(val)[0] : key;
  return {
    key: realKey,
    val: typeof val === 'object' ? ruleValue(val, props, theme)(realKey).val : val,
  };
};

export const computeStyles = (setup: StyleSetup) => {
  return (props: StyleProps, theme: Theme): [Styles, RestProps] => {
    const styles = Object.keys(setup)
      .map(ruleValue(setup, props, theme))
      .filter(({ val }) => val)
      .map(keyValue(props, theme))
      .filter(({ val }) => val)
      .reduce((res, { key, val }) => {
        res[key] = val;
        return res;
      }, {});

    const otherProps = Object.keys(props)
      .filter(propKey => !setup[propKey])
      .reduce((res, propKey) => {
        res[propKey] = props[propKey];
        return res;
      }, {});

    return [styles, otherProps];
  };
};
