import * as THREE from 'three';
import Controls from './controls';
import { Cube } from './cube';

export default class SceneManager {
	constructor(sceneRootElement) {
		this.canvas = this.createCanvas(document, sceneRootElement);
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
		this.renderer = new THREE.WebGLRenderer({canvas:this.canvas});
		this.renderer.setSize( window.innerWidth, window.innerHeight );
    sceneRootElement.appendChild( this.renderer.domElement );
    this.referenceCube = Cube(THREE,1);
    this.referenceCube.position.y = 2
    this.cube = Cube(THREE, 1);
    this.controls = new Controls(this.canvas, THREE, this.cube);
   	this.scene.add( this.cube );
    this.scene.add( this.referenceCube );
    this.camera.position.z = 5;
		this.render();
	}
	createCanvas(document, containerElement) {
    const canvas = document.createElement('canvas');
    canvas.id = "tCanvas";
    containerElement.appendChild(canvas);
    return canvas;
  }
  setRotation(rots) {
    this.referenceCube.rotation.x = rots.x;
    this.referenceCube.rotation.y = rots.y;
    this.referenceCube.rotation.z = rots.z;
  }
	render() {
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render( this.scene, this.camera );
  }
}

