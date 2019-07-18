import React from 'react';

const UI = ({connectedUsers, username}) => {
	return (
		<div className="uiWrapper">
			<h1 className="username">{username}</h1>
			<h1 className="userCount">{connectedUsers}</h1>
		</div>
	)
}

export default UI