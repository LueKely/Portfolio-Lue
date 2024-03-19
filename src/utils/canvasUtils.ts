import * as THREE from 'three';

export default {
	// resizes the canvas based on the current canvas length
	resizeRendererToDisplaySize: (targetRenderer: THREE.WebGLRenderer) => {
		const canvas = targetRenderer.domElement;
		const pixelRatio = window.devicePixelRatio;
		const width = (canvas.clientWidth * pixelRatio) | 0;
		const height = (canvas.clientHeight * pixelRatio) | 0;
		const needResize = canvas.width !== width || canvas.height !== height;
		if (needResize) {
			targetRenderer.setSize(width, height, false);
		}
		return needResize;
	},
	// validates if the canvas exists
	validateCanvas: (canvasElement: HTMLCanvasElement | null) => {
		if (canvasElement == null) {
			throw new Error('Canvas element is Null');
		}
	},
	addAllMeshToScene: (scene: THREE.Scene, MeshGroup: THREE.Mesh[]) => {
		MeshGroup.forEach((meshObj: THREE.Mesh) => {
			scene.add(meshObj);
		});
	},
	addAllMeshToPoint: (parentMesh: THREE.Mesh, ChildrenMesh: THREE.Mesh[]) => {
		ChildrenMesh.forEach((childMesh: THREE.Mesh) => {
			parentMesh.add(childMesh);
		});
	},
};
