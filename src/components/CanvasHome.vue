<template>
	<canvas ref="homeCanvas" id="canvas-home"></canvas>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import * as THREE from 'three';
	import * as TWEEN from '@tweenjs/tween.js';
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
		camera.position.z = 5;

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

		const geometry = new THREE.BoxGeometry(1, 0.05, 1);
		const material = new THREE.MeshBasicMaterial({ color: 0x372d12 });
		const cube: THREE.Mesh = new THREE.Mesh(geometry, material);

		scene.add(cube);

		//time
		const clock = new THREE.Clock();

		function animateCube() {
			// Create a Tween to animate the cube's scale
			const tween = new TWEEN.Tween(cube.scale)
				.to({ y: 2 }, 1000) // Target scale and duration
				.easing(TWEEN.Easing.Quadratic.InOut) // Easing function
				.start(); // Start the animation

			// Update the scene after animation
			tween.onUpdate(() => {
				renderer.render(scene, camera);
			});

			// Request the next frame
			requestAnimationFrame(animateCube);
		}

		// animation
		function render() {
			const deltaTime = clock.getDelta();
			// resizes the display

			if (canvasUtils.resizeRendererToDisplaySize(renderer)) {
				const canvas = renderer.domElement;
				camera.aspect = canvas.width / canvas.height;
				camera.updateProjectionMatrix();
			}

			renderer.render(scene, camera);
			requestAnimationFrame(render);
			animateCube();
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
