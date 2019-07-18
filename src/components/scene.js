import React, { useRef, useEffect } from 'react';
import SceneManager from '../lib/sceneManager';

const Scene = ({winningRots}) => {
	const sceneRootElement = useRef();
	useEffect(() => {
		const sceneManager = new SceneManager(sceneRootElement.current)
		sceneManager.setRotation(winningRots);
	})

	return (
		<div className="sceneWrapper" ref={sceneRootElement} />
	)
}

export default Scene

