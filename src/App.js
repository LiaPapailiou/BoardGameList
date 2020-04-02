import React, { Component } from 'react';
import './App.css';
import Board from './components/Board'

class App extends Component {
 
render () {
  
      return (
        <div className="App">
          <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
          <header className="App-header">
          </header>
            <p>
             <Board />
            </p>
        </div>
      );
}
}


export default App;
