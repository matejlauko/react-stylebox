import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../src';

storiesOf('Box', module)
  .add('basic', () => <Box />)
  .add('styled', () => (
    <Box
      style={{
        width: '100px',
        height: '50px',
        backgroundColor: 'blue',
      }}
    />
  ))
  .add('styled/theme', () => (
    <Box
      style={theme => ({
        width: '100px',
        height: '50px',
        backgroundColor: theme.testBgColor,
      })}
    />
  ));
