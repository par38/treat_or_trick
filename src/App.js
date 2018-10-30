import React, { Component } from 'react';

import Questions from './components/Questions';
import Spider from './components/Spider'

import './App.css';
import Background from './components/Background';
import ChampsSaisie from './components/ChampsSaisie';

import Devinettes from './components/Devinettes';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Questions/>

        <Background />
        <Spider />

        <Devinettes />
        
        <ChampsSaisie />
      </div>
    );
  }
}

export default App;
