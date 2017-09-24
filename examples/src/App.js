import React, { Component } from 'react';
import logo from './logo.svg';
import { Box } from 'react-stylebox';

class App extends Component {
  render() {
    return (
      <Box
        className="App"
        style={{
          textAlign: 'center',
        }}
      >
        <Box
          className="App-header"
          style={theme => ({
            backgroundColor: theme.header.bgColor,
            height: theme.header.height,
            padding: '20px',
            color: 'white',
          })}
        >
          <Box
            as="img"
            src={logo}
            className="App-logo"
            alt="logo"
            style={{
              animation: 'App-logo-spin infinite 20s linear',
              height: '80px',
            }}
          />
          <h2>Welcome to React</h2>
        </Box>
        <Box
          as="p"
          className="App-intro"
          style={{
            fontSize: 'large',
          }}
        >
          To get started, edit <code>src/App.js</code> and save to reload.
        </Box>
      </Box>
    );
  }
}

export default App;
