import React from 'react';
import renderFelaComponent from './render';
import Text from '../Text';

[{}].forEach(props => {
  it(`renders correctly with props, ${JSON.stringify(props, null, 2)}`, () => {
    expect(renderFelaComponent(<Text {...props} />)).toMatchSnapshot();
  });
});
