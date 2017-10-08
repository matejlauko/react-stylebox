// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { type Theme, type Styles } from '../types';
import { type TextProps } from './Text';
import Text from './Text';
import { get } from '../utils';
import { composeStyles } from './compose';

// Browser button is rendered as div with button role because button element is
// hard to style consistently in Firefox and maybe elsewhere. Div is just fine.
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role
const BrowserButton = ({
  disabled,
  onPress,
  style,
  ...props
}: {
  disabled?: boolean,
  onPress: () => void,
  style?: Styles,
}) => (
  <div
    onClick={onPress}
    onKeyPress={(e: KeyboardEvent) => {
      if (disabled) return;
      // Buttons are expected to be triggered using the Space or Enter key.
      const isTriggered = e.key === ' ' || e.key === 'Enter';
      if (!isTriggered) return;
      // Prevent scroll on spacebar press.
      e.preventDefault();
      onPress();
    }}
    role="button"
    tabIndex={disabled ? -1 : 0}
    style={{
      cursor: disabled ? 'default' : 'pointer',
      pointerEvents: disabled ? 'none' : 'auto',
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      ...style,
    }}
    {...props}
  />
);
BrowserButton.displayName = 'Button';

export type ButtonProps = TextProps & {
  disabled?: boolean,
  onPress?: () => any,
  outline?: boolean,
  raw?: boolean,
};

type ButtonContext = {
  theme: Theme,
};

const Button = (
  // $FlowFixMe
  { as = BrowserButton, style, raw, ...restProps }: ButtonProps,
  { theme }: ButtonContext
) => {
  let updatedProps = { ...restProps };

  if (!raw) {
    // Defaults
    updatedProps = {
      borderRadius: get(theme, 'button.borderRadius'),
      marginVertical: get(theme, 'button.marginVertical'),
      paddingVertical: get(theme, 'button.paddingVertical', 0.5),
      paddingHorizontal: get(theme, 'button.paddingHorizontal', 0.25),
      opacity: restProps.disabled && get(theme, 'button.disabled.opacity'),
      ...updatedProps,
    };
  }

  // <Button primary
  const buttonThemes = get(theme, 'button.themes');
  if (buttonThemes) {
    const buttonTheme = Object.keys(buttonThemes).find(style => restProps[style]);
    const propStyle = buttonThemes[buttonTheme];
    if (propStyle) {
      updatedProps = {
        ...propStyle,
        ...updatedProps,
        [buttonTheme]: undefined,
      };
    }
  }

  return (
    // $FlowFixMe
    <Text
      as={as}
      justifyContent="center"
      alignItems="center"
      style={composeStyles(style, updatedProps.style)(theme)}
      {...updatedProps}
    />
  );
};

Button.contextTypes = {
  theme: PropTypes.object,
};

export default Button;
