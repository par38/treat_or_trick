import React, { Component } from 'react';

import './App.css';
import Background from './components/Background';
import ChampsSaisie from './components/ChampsSaisie';

import Devinettes from './components/Devinettes';



class App extends Component {
  render() {
    return (
      <div className="App">

        <Background />
        <Devinettes />
        
        <ChampsSaisie />
      </div>
    );
  }
}

export default App;
