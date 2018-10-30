import React, { Component } from 'react';

import './App.css';
import Background from './components/Background';

import Devinettes from './components/Devinettes';



class App extends Component {
  render() {
    return (
      <div className="App">

        <Background />
        <Devinettes />
        
      </div>
    );
  }
}

export default App;
