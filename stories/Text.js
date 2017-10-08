import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text, Heading, Paragraph } from '../src';

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

storiesOf('Text/Paragraph', module)
  .add('styled w/ style', () => (
    <Paragraph style={{ width: '100px', margin: '0 auto', backgroundColor: 'yellow' }}>
      Eos necessitatibus molestias quo et quasi quia et. Quod dolores pariatur enim veniam qui
      debitis qui. Quis sit deserunt occaecati et. Inventore vitae facere inventore architecto non
      molestias voluptatem sint. Error sapiente explicabo aut. Necessitatibus dolor quisquam iure
      in. Consequatur velit provident deleniti esse aut. Ullam illo quia ut minima nihil non
      molestiae autem omnis. Sequi sint voluptas error recusandae nostrum. Quo voluptate quia dolore
      enim esse velit eos. Et unde accusantium expedita sit iusto et minus. Consequatur doloremque
      voluptatem ut expedita facilis illo vel.
    </Paragraph>
  ))
  .add('styled w/ theme', () => (
    <Paragraph
      style={theme => ({
        fontWeight: 'normal',
        color: theme.colors.secondary,
      })}
    >
      Alias adipisci et rerum. Eum aut repellendus repellat. Repellat ex nemo quis ut delectus
      quaerat omnis. Mollitia et laboriosam libero. Corrupti architecto qui repellendus labore eum
      eius.
    </Paragraph>
  ))
  .add('styled w/ computed props', () => (
    <Paragraph bold={false} color="red" size={5} marginTop={3}>
      Paragraph
    </Paragraph>
  ))
  .add('styled w/ default size', () => <Paragraph>Paragraph</Paragraph>);
