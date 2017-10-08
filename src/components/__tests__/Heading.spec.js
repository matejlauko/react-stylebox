import React from 'react';
import renderFelaComponent from './render';
import Heading from '../Heading';

[{}].forEach(props => {
  it(`renders correctly with props, ${JSON.stringify(props, null, 2)}`, () => {
    expect(renderFelaComponent(<Heading {...props} />)).toMatchSnapshot();
  });
});
