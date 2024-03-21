<template>
	<canvas id="canvas-about" ref="canvasAbout">this is canvas</canvas>
</template>

<script setup lang="ts">
	import * as THREE from 'three';
	import canvasUtils from '@/utils/canvasUtils';
	import { ref, onMounted } from 'vue';
	import fragment from '../shaders/fragment.frag';
	import vertex from '../shaders/vert.frag';

	const canvasAbout = ref<HTMLCanvasElement | null>(null);
	onMounted(() => {
		canvasUtils.validateCanvas(canvasAbout.value);

		// rederer
		const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
			antialias: true,
			canvas: canvasAbout.value!,
		});
		renderer.setClearColor(0xffffff, 0);

		// camera
		const cameraData = { fov: 75, aspect: 2, near: 0.1, far: 100 };
		const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
			...Object.values(cameraData)
		);
		camera.position.z = 12;

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

		const geo = new THREE.PlaneGeometry(15, 15, 20, 20);
		const shapeMaterial = new THREE.ShaderMaterial({
			wireframe: false,
			side: THREE.DoubleSide,
			uniforms: {
				u_resolution: {
					value: new THREE.Vector2(),
				}, // This will be automatically set by Three.js
				time: { value: 0.0 }, // Initialize time to 0
				lines: {
					value: [
						new THREE.Vector3(1, 2, 3), // Line 1 start
						new THREE.Vector3(4, 5, 6), // Line 1 end
						// Repeat for other lines
					],
				},
			},
			vertexShader: vertex,
			fragmentShader: fragment,
		});

		const canvasSize = new THREE.Vector2(
			canvasAbout.value?.width,
			canvasAbout.value?.height
		);
		shapeMaterial.uniforms.u_resolution.value.copy(canvasSize);
		const shapeMesh = new THREE.Mesh(geo, shapeMaterial);
		scene.add(shapeMesh);

		function render() {
			// resizes the display
			if (canvasUtils.resizeRendererToDisplaySize(renderer)) {
				const canvas = renderer.domElement;
				camera.aspect = canvas.clientWidth / canvas.clientWidth;
				camera.updateProjectionMatrix();
			}
			renderer.render(scene, camera);
			requestAnimationFrame(render);
			shapeMaterial.uniforms.time.value += 0.01;

			canvasUtils.validateCanvas(canvasAbout.value);
			const resolution = new THREE.Vector2(
				canvasAbout.value?.width,
				canvasAbout.value?.height
			);
			shapeMaterial.uniforms.u_resolution.value.copy(resolution);
		}
		render();
	});
</script>

<style lang="scss" scoped>
	#canvas-about {
		flex: 1;
		display: block;
	}
</style>
