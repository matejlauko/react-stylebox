// @flow
import React, { type Node } from 'react';
import { Provider, ThemeProvider } from 'react-fela';
import { type Renderer, type Theme } from '../types';

type StylerProps = {
  renderer: Renderer,
  theme: Theme,
  children: Node,
};

class Styler extends React.Component<StylerProps> {
  render() {
    const { renderer, children, theme, ...restProps } = this.props;

    const child = React.Children.only(children);

    return (
      <Provider renderer={renderer}>
        <ThemeProvider theme={theme}>
          {React.isValidElement(child) ? React.cloneElement(child, { ...restProps }) : child}
        </ThemeProvider>
      </Provider>
    );
  }
}

export default Styler;
