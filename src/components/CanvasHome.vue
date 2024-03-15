<template>
	<canvas ref="homeCanvas" id="canvas-home"></canvas>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import * as THREE from 'three';

	const homeCanvas = ref<HTMLCanvasElement | null>(null);

	const validateCanvas = (canvasElement: HTMLCanvasElement | null) => {
		if (canvasElement == null) {
			throw new Error('Canvas element is Null');
		}
	};

	onMounted(() => {
		validateCanvas(homeCanvas.value);
	});
</script>

<style scoped>
	#canvas-home {
		flex: 1;
	}
</style>
