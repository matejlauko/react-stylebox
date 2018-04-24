// @flow
import * as React from 'react';
import { Provider as FelaProvider } from 'react-fela';
import buildTheme from '../fw/themeBuilder';
import { createRenderer } from '../fw/fela';
import { type Renderer, type Theme, type UserTheme } from '../fw/types';

const defaultContext = { theme: {} };
export const StyleContext = React.createContext(defaultContext);

type StylerProps = {
  renderer: Renderer,
  theme?: Theme,
  fonts?: {},
  icons?: {},
  globalStyles?: String,
  children: Node,
};

type StylerState = {
  theme: UserTheme,
};

class Styler extends React.Component<StylerProps, StylerState> {
  render() {
    const { renderer, children, theme, fonts, icons, globalStyles } = this.props;

    const builtTheme = buildTheme(theme);

    const child = React.Children.only(children);
    const builtGlobalStyles = typeof globalStyles === 'function' ? globalStyles(builtTheme) : globalStyles;
    const felaRenderer = renderer || createRenderer(builtGlobalStyles, fonts);

    const context = { theme: builtTheme, icons, fonts };

    return (
      <StyleContext.Provider value={context}>
        <FelaProvider renderer={felaRenderer}>{child}</FelaProvider>
      </StyleContext.Provider>
    );
  }
}

export default Styler;
