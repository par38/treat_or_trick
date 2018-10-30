import React, { Component } from 'react';

import './App.css';
import Background from './components/Background';
import ChampsSaisie from './components/ChampsSaisie';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Background />
        <ChampsSaisie />
      </div>
    );
  }
}

export default App;
