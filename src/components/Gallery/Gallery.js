import React, { Component } from 'react';
import './Gallery.css';
import Game from '../Game/Game';
import { initialGames, additionalGames } from '../../data/list-of-games';

class Gallery extends Component {
	constructor() {
		super();
		this.state = {
			games: initialGames,
		};
		this.loadAdditionalGames = this.loadAdditionalGames.bind(this);
	}
	render() {
		return (
			<div className='Gallery-container'>
				<div className='Gallery'>
					{Object.keys(this.state.games).map((key) => {
						return <Game key={key} meta={this.state.games[key]} />;
					})}
				</div>
				<div className='add-game'>
					<button onClick={this.loadAdditionalGames}>
						Wanna See More Games?
					</button>
				</div>
			</div>
		);
	}
	loadAdditionalGames() {
		var currentGames = { ...this.state.games };
		var newGames = Object.assign(currentGames, additionalGames);

		this.setState({ games: newGames });
	}
}

export default Gallery;
