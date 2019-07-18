export default class SocketApi {
	constructor(username, handleGameData, handleInfoData) {
		this.socket = new WebSocket(`ws://localhost:8080?username=${username}`);
		this.socket.addEventListener('message', this.onMessage);
		this.handleGameData = handleGameData;
		this.handleInfoData = handleInfoData;
	}
	onMessage = (e) => {
		let data = JSON.parse(e.data);
		console.log(data);
		if (data.messageType === "gameData") {
			this.handleGameData(data);
		} else if (data.messageType === "info") {
			// this.handleInfoData(data);
		}
	}
	sendSolved() {
		this.socket.send(JSON.stringify({clientMessage:"solved"}));
	}
}
