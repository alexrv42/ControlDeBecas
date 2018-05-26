import React, { Component } from 'react';
import './App.css';
import Example from "./Example";
import {Appbar} from 'muicss/react'

const mysql = require('mysql');

const con = mysql.createConnection({
	host: "localhost",
	user: "empuser",
	password: "empuser968574"
});

class App extends Component {

	constructor()
	{
		super();

		con.connect(function(err) {
			if (err) throw err;
			console.log("Connected!");
		});
	}

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
