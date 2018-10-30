import React, { Component } from 'react';

import Spider from './components/Spider'

import './App.css';
import Background from './components/Background';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Background />
        <Spider />

      </div>
    );
  }
}

export default App;
