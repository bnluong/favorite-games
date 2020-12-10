import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Gallery from '../Gallery/Gallery';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header text={'These Are My Favorite Games!'} />
				<Gallery />
			</div>
		);
	}
}

export default App;
