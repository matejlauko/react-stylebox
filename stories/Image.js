import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from '../src';

storiesOf('Image', module)
  .add('simple', () => (
    <Image src="https://dummyimage.com/300x200/f07e4d/1e2feb.png" size={{ w: 300, h: 200 }} />
  ))
  .add('100% width', () => (
    <Image src="https://dummyimage.com/300x200/f07e4d/1e2feb.png" size={{ w: '100%' }} />
  ))
  .add('styled', () => (
    <Image
      src="https://dummyimage.com/300x200/f07e4d/1e2feb.png"
      size={{ w: 300, h: 200 }}
      marginTop={1}
      style={{
        width: 200,
        height: 150,
        border: '1px solid blue',
        marginLeft: '1em',
      }}
    />
  ));
