import React, { Component } from 'react';
import './App.css';
import Example from "./Example";
import {Appbar} from 'muicss/react'


class App extends Component {

  render() {
    return (
      <div className="App">
			<Appbar style={{position: 'fixed !important'}}/>
			<Example/>
      </div>
    );
  }
}

export default App;
