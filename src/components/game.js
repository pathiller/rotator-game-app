import React, { Component } from 'react';
import Scene from './scene';
import SocketApi from '../lib/socketApi';

class Game extends Component {
	constructor(props) {
		super(props)
		this.username = props.username;
		this.socket = new SocketApi(this.username, this.handleGameData, this.handleInfoData);
		this.winner = "";
		this.winningRots = null;
		this.state = {
			isGameRunning: false,
			connectedUsers: 0,
		}
	}
	handleGameData = (data) => {
		this.winner = data.lastWinner;
		this.winningRots = data.winningRots;
		this.setState({
			isGameRunning: data.isGameRunning
		});
	}
	handleInfoData = (data) => {
		this.setState({connectedUsers: data.connectedUsers});
	}
	render() {
		if (this.state.isGameRunning) {
			return (
				<div className="gameWrapper">
					<Scene winningRots={this.winningRots} />
				</div>
			)
		} else {
			return (
				<div className="gameWrapper">
					<h1>Waiting for game...</h1>
					<h1>last winner was {this.winner}</h1>
				</div>
			)
		}

	}
}

export default Game
