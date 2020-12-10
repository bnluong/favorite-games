import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
	render() {
		return (
			<div className='Game'>
				<div className='box-art'>
					<img src={this.props.meta.box_art} alt={this.props.title} />
				</div>
				<h3>{this.props.meta.title}</h3>
				<p>{this.props.meta.developer}</p>
			</div>
		);
	}
}

export default Game;
