import React, { Component } from 'react';

import Questions from './components/Questions';
import Spider from './components/Spider'
import Background from './components/Background';

import Devinettes from './components/Devinettes';


import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Questions  /> <br />
        <Background />
        <Devinettes />
        
        <div><Spider /></div>

      </div>
    );
  }
}

export default App;
