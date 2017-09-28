import React from 'react';
import renderFelaComponent from './render';
import Box from '../Box';

[{}].forEach(props => {
  it(`renders correctly with props, ${JSON.stringify(props, null, 2)}`, () => {
    expect(renderFelaComponent(<Box {...props} />)).toMatchSnapshot();
  });
});
