import React, { Component } from 'react';
import './AddGame.css';

class AddGame extends Component {
	render() {
		return (
			<div className='add-game-form-container'>
				<form
					onSubmit={(e) => this.addGame(e)}
					className='add-game-form'
				>
					<h3>Adding a New Game to the Gallery</h3>
					<input
						ref={(input) => (this.title = input)}
						type='text'
						placeholder='Title'
					/>
					<input
						ref={(input) => (this.developer = input)}
						type='text'
						placeholder='Developer'
					/>
					<input
						ref={(input) => (this.box_art = input)}
						type='text'
						placeholder='Box-Art'
					/>
					<button type='submit'>Add Game</button>
				</form>
			</div>
		);
	}
	addGame(e) {
		e.preventDefault();
		var newGame = {
			title: this.title.value,
			developer: this.developer.value,
			box_art: this.box_art.value,
		};
		this.props.addNewGame(newGame);
	}
}

export default AddGame;
