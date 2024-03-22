<template>
	<canvas ref="homeCanvas" id="canvas-home"></canvas>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import * as THREE from 'three';
	import canvasUtils from '@/utils/canvasUtils';

	const homeCanvas = ref<HTMLCanvasElement | null>(null);

	onMounted(() => {
		canvasUtils.validateCanvas(homeCanvas.value);
		// rederer
		const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
			antialias: true,
			canvas: homeCanvas.value!,
		});
		renderer.setClearColor(0xffffff, 0);

		// camera
		const cameraData = { fov: 75, aspect: 2, near: 0.1, far: 100 };
		const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
			...Object.values(cameraData)
		);
		camera.position.z = 7;

		//scene
		const scene: THREE.Scene = new THREE.Scene();

		// renderer
		renderer.render(scene, camera);
		// light
		const color = 0xffffff;
		const intensity = 3;
		const light = new THREE.DirectionalLight(color, intensity);

		light.position.set(-1, 2, 4);
		scene.add(light);

		const groupA: THREE.Group = new THREE.Group();
		const groupB: THREE.Group = new THREE.Group();

		const rowAPlaneMesh: THREE.Mesh[] = [];
		const rowBPlaneMesh: THREE.Mesh[] = [];

		const geometry = new THREE.PlaneGeometry(4.8, 0.05);
		const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x372d12 });

		const geometryB = new THREE.PlaneGeometry(4.8, 0.05);
		const basicMaterialB = new THREE.MeshBasicMaterial({ color: 0x372d12 });

		for (let index = -10; index < 11; index++) {
			const planeMesh = new THREE.Mesh(geometry, basicMaterial);
			rowAPlaneMesh.push(planeMesh);
			planeMesh.position.set(0, index * 0.5, 0);
		}

		for (let index = -10; index < 11; index++) {
			const planeMesh = new THREE.Mesh(geometryB, basicMaterialB);
			rowBPlaneMesh.push(planeMesh);
			planeMesh.position.set(0, index * 0.5, 0);
		}

		rowAPlaneMesh.forEach((plane: THREE.Mesh) => {
			groupA.add(plane);
		});

		rowBPlaneMesh.forEach((plane: THREE.Mesh) => {
			groupB.add(plane);
		});

		scene.add(groupA);
		scene.add(groupB);
		groupA.position.setX(-1.5);
		groupB.position.setX(3.5);

		groupB.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI);
		//time
		const clock = new THREE.Clock();

		const scaleIncrement = 0.05; // Increment for scaling

		let scaleDirectionA: number[] = []; // Direction of scaling
		let scaleDirectionB: number[] = [];

		rowAPlaneMesh.map(() => {
			scaleDirectionA.push(1);
		});
		rowBPlaneMesh.map(() => {
			scaleDirectionB.push(1);
		});

		// animation

		function render() {
			// resizes the display
			if (canvasUtils.resizeRendererToDisplaySize(renderer)) {
				const canvas = renderer.domElement;
				camera.aspect = canvas.clientWidth / canvas.clientWidth;
				camera.updateProjectionMatrix();
			}
			renderer.render(scene, camera);
			requestAnimationFrame(render);

			groupA.children.forEach((plane: THREE.Object3D, index) => {
				setTimeout(() => {
					plane.scale.y += scaleIncrement * scaleDirectionA[index];
					if (plane.scale.y <= 1 || plane.scale.y >= 10) {
						scaleDirectionA[index] *= -1; // Reverse the direction
					}
				}, 250 * index);
			});

			groupB.children.forEach((plane: THREE.Object3D, index) => {
				setTimeout(() => {
					plane.scale.y += scaleIncrement * scaleDirectionB[index];
					if (plane.scale.y <= 1 || plane.scale.y >= 10) {
						scaleDirectionB[index] *= -1; // Reverse the direction
					}
				}, 250 * index);
			});
		}
		render();
	});
</script>

<style scoped>
	#canvas-home {
		flex: 1;
		display: block;
	}
</style>
@/utils/canvasUtils
