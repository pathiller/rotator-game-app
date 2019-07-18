export default class Controls {
	constructor(canvas, THREE, cube) {
		this.canvas = canvas;
		this.THREE = THREE;
		this.cube = cube;
		this.isDragging = false;
		this.previousMousePosition = {x:0, y:0};
		this.addListeners();
	}
	addListeners() {
    this.canvas.addEventListener('mousedown', e => {
    	this.isDragging = true;
    });
    this.canvas.addEventListener('mousemove', e => {
    	let deltaMove = {
    		x: e.offsetX-this.previousMousePosition.x,
    		y: e.offsetY-this.previousMousePosition.y
    	};
    	if (this.isDragging) {
        let deltaRotationQuaternion = new this.THREE.Quaternion()
          .setFromEuler(new this.THREE.Euler(
            this.toRadians(deltaMove.y * 1),
            this.toRadians(deltaMove.x * 1),
            0,
            'XYZ'
         ));
        this.cube.quaternion.multiplyQuaternions(deltaRotationQuaternion, this.cube.quaternion);
    	}
	    this.previousMousePosition = {
	        x: e.offsetX,
	        y: e.offsetY
	    };
    });

    this.canvas.addEventListener('mouseup', e => {
    	this.isDragging = false;
    });
	}
	toRadians(angle) {
		return angle * (Math.PI / 180);
	}
}
