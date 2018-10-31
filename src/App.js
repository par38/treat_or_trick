import React, { Component } from 'react';

import Questions from './components/Questions';
import Spider from './components/Spider'
import Background from './components/Background';
import ChampsSaisie from './components/ChampsSaisie';
import Devinettes from './components/Devinettes';

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Questions />
        <Background />
        <Devinettes />
        <ChampsSaisie />
        <div><Spider /></div>
        
      </div>
    );
  }
}

export default App;
