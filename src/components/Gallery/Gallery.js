import React, { Component } from 'react';
import './Gallery.css';
import Game from '../Game/Game';
import AddGame from './AddGame';
import { initialGames, additionalGames } from '../../data/list-of-games';

class Gallery extends Component {
	constructor() {
		super();
		this.state = {
			games: initialGames,
			showAddGameForm: false,
		};
		this.loadAdditionalGames = this.loadAdditionalGames.bind(this);
		this.showAddGameForm = this.showAddGameForm.bind(this);
		this.addGame = this.addGame.bind(this);
	}
	render() {
		return (
			<div className='Gallery-container'>
				<div className='Gallery'>
					{Object.keys(this.state.games).map((key) => {
						return <Game key={key} meta={this.state.games[key]} />;
					})}
				</div>
				<div className='more-game'>
					<button onClick={this.loadAdditionalGames}>
						Wanna See More Games?
					</button>
				</div>
				<div className='add-game'>
					<button onClick={this.showAddGameForm}>
						Add More Games?
					</button>
				</div>
				{this.state.showAddGameForm ? (
					<AddGame addNewGame={this.addGame} />
				) : null}
			</div>
		);
	}
	loadAdditionalGames() {
		var currentGames = { ...this.state.games };
		var newGames = Object.assign(currentGames, additionalGames);

		this.setState({ games: newGames });
	}
	showAddGameForm() {
		this.setState({
			showAddGameForm: true,
		});
	}
	addGame(game) {
		var randomID = Math.random();
		var newGame = {};
		newGame['movie' + randomID] = game;
		var currentGames = { ...this.state.games };
		var newGames = Object.assign(currentGames, newGame);
		this.setState({ games: newGames });
	}
}

export default Gallery;
