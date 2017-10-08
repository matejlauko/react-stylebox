import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src';

storiesOf('Button', module)
  .add('simple', () => <Button>Button</Button>)
  .add('styled', () => (
    <Button backgroundColor="red" borderColor="primary">
      Styled Button
    </Button>
  ))
  .add('styled disabled', () => (
    <Button disabled backgroundColor="red" borderWidth="1px" borderColor="blue" borderStyle="solid">
      Disabled Button
    </Button>
  ))
  .add('raw', () => <Button raw>Disabled Button</Button>)
  .add('style prop', () => <Button primary>Primary Button</Button>);
