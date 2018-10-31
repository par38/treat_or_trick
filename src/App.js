import React, { Component } from 'react';

import Spider from './components/Spider'
import Background from './components/Background';
import ChampsSaisie from './components/ChampsSaisie';
import Devinettes from './components/Devinettes';
import Questions from './components/Questions';

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Questions />
        <Background />
        <Spider />

        <Devinettes />
        
        <ChampsSaisie />
      </div>
    );
  }
}

export default App;
