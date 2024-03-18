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

		const geometry = new THREE.PlaneGeometry(2, 0.5);
		const material = new THREE.MeshBasicMaterial({ color: 0x372d12 });
		const cube: THREE.Mesh = new THREE.Mesh(geometry, material);

		cube.position.setY(2);

		scene.add(cube);

		//time
		const clock = new THREE.Clock();

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

			cube.scale.y = 0.5 + Math.sin(Date.now() * 0.0008) * 1;
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
