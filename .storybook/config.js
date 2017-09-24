import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { Styler, createRenderer } from '../src/fela';
import theme from './styling/theme';

const renderer = createRenderer();

addDecorator(story => (
  <Styler renderer={renderer} theme={theme}>
    {story()}
  </Styler>
));

const req = require.context('../stories', true, /\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
