// @flow
import { createRenderer } from 'fela';
import webPreset from 'fela-preset-web';
import placeholderPrefixer from 'fela-plugin-placeholder-prefixer';
import validator from 'fela-plugin-validator';
import beautifier from 'fela-beautifier';
import monolithic from 'fela-monolithic';
import { type Renderer } from '../types';

const configureRenderer = (): {
  plugins: Array<Function>,
  enhancers: Array<Function>,
  selectorPrefix: string,
} => {
  const plugins = [...webPreset, placeholderPrefixer()];
  const enhancers = [];

  // Dev
  if (process.env.NODE_ENV !== 'production') {
    plugins.push(
      validator({
        logInvalid: true,
        deleteInvalid: true,
      })
    );
    enhancers.push(beautifier());
    enhancers.push(
      monolithic({
        prettySelectors: true,
      })
    );
  }

  return {
    plugins,
    enhancers,
    // Fix for monolithic classnames (generated classnames can have number at the beginning, but they don't work in the browser)
    selectorPrefix: process.env.NODE_ENV !== 'production' ? 'x' : '',
    mediaQueryOrder: [],
  };
};

export default function creteFelaRenderer(globalStyles?: string, fonts: []): Renderer {
  const renderer = createRenderer(configureRenderer());

  if (globalStyles) renderer.renderStatic(globalStyles);

  if (fonts && fonts.length) {
    fonts.forEach(fontObj => renderer.renderFont(...fontObj));
  }

  return renderer;
}
