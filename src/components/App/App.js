import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

var headerText = 'What is your favorite games?'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header text={headerText}/>
			</div>
		);
	}
}

export default App;
