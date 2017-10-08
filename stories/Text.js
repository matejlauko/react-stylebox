import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text, Heading } from '../src';

storiesOf('Text/Text', module)
  .add('styled w/ style', () => (
    <Text
      style={{
        color: 'red',
      }}
    >
      Text
    </Text>
  ))
  .add('styled w/ theme', () => (
    <Text
      style={theme => ({
        color: theme.colors.secondary,
      })}
    >
      Text
    </Text>
  ))
  .add('styled w/ computed props', () => (
    <Text
      size={2}
      italic
      fontFamily="Arial"
      color="primary"
      align="right"
      bold
      decoration="line-through"
      lineHeight={1.5}
    >
      Text
    </Text>
  ));

storiesOf('Text/Heading', module)
  .add('styled w/ style', () => <Heading>Heading</Heading>)
  .add('styled w/ theme', () => (
    <Heading
      style={theme => ({
        fontWeight: 'normal',
        color: theme.colors.secondary,
      })}
    >
      Heading
    </Heading>
  ))
  .add('styled w/ computed props', () => (
    <Heading bold={false} color="red" size={5} marginTop={3}>
      Heading
    </Heading>
  ))
  .add('styled w/ default size', () => <Heading type={3}>Heading 3</Heading>);
