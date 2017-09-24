import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './styling/theme';
import normalizeStyles from './styling/normalize.css';
import globalStyles from './styling/globalStyles';
import { Styler, createRenderer } from 'react-stylebox/lib/fela';

const renderer = createRenderer(normalizeStyles + globalStyles(theme));

ReactDOM.render(
  <Styler renderer={renderer} theme={theme}>
    <App />
  </Styler>,
  document.getElementById('root')
);
