// @flow
import React, { type Node } from 'react';
import PT from 'prop-types';
import { Provider, ThemeProvider } from 'react-fela';
import buildTheme from '../themeBuilder';
import { type Renderer, type Theme, type UserTheme } from '../types';

type StylerProps = {
  renderer: Renderer,
  theme?: Theme,
  children: Node,
};

type StylerState = {
  theme: UserTheme,
};

class Styler extends React.Component<StylerProps, StylerState> {
  constructor(props: StylerProps) {
    super(props);
    this.state = {
      theme: buildTheme(props.theme),
    };
  }

  getChildContext() {
    return {
      theme: this.state.theme,
    };
  }

  render() {
    const { renderer, children } = this.props;
    const child = React.Children.only(children);

    return <Provider renderer={renderer}>{child}</Provider>;
  }
}

Styler.childContextTypes = {
  theme: PT.object,
};

export default Styler;
