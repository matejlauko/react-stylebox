import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../src';

storiesOf('Box/Simple', module)
  .add('styled w/ style', () => (
    <Box
      style={{
        width: '100px',
        height: '50px',
        backgroundColor: 'blue',
      }}
    />
  ))
  .add('styled w/ theme', () => (
    <Box
      style={theme => ({
        width: '100px',
        height: '50px',
        backgroundColor: theme.colors.secondary,
      })}
    />
  ))
  .add('styled w/ rhythm props', () => (
    <Box
      backgroundColor="primary"
      width={10}
      height={15}
      marginHorizontal={2}
      marginVertical={1}
      padding={3}
    />
  ));

storiesOf('Box/Layout', module)
  .add('inside', () => (
    <Box backgroundColor="primary" padding={2}>
      <Box backgroundColor="danger" width={5} height={5} marginHorizontal="auto" />
    </Box>
  ))
  .add('Photo gallery', () => {
    const PhotoThumb = () => (
      <Box
        backgroundColor="secondary"
        flexGrow={1}
        marginHorizontal={0.5}
        style={theme => ({
          cursor: 'pointer',
          ':hover': { color: 'red', backgroundColor: theme.colors.secondaryDarker },
        })}
      />
    );

    return (
      <Box padding={1} borderColor="black">
        <Box backgroundColor="primary" height={5} marginBottom={0.5} />
        <Box
          display="flex"
          height={3}
          style={{
            '> div:first-child': {
              marginLeft: 0,
            },
            '> div:last-child': { marginRight: 0 },
          }}
        >
          {Array.from(Array(5)).map((_, i) => <PhotoThumb key={i} />)}
        </Box>
      </Box>
    );
  });

storiesOf('Box/Media', module)
  .add('predefined media queries', () => (
    <Box
      backgroundColor="primary"
      padding={1}
      media={{
        sm: { padding: 3 },
        md: { padding: 4, textDecoration: 'underline' },
        lg: { padding: 5 },
        xl: { padding: 6 },
      }}
    >
      Text
    </Box>
  ))
  .add('custom media queries', () => (
    <Box
      backgroundColor="primary"
      height="200px"
      width="400px"
      media={{
        '500px-599px': { backgroundColor: 'secondary' },
        '600-700': { backgroundColor: '#0fdf0f' },
        700: { backgroundColor: '#e91a8e' },
      }}
    />
  ));
