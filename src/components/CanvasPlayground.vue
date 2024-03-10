<template>
	<div ref="homeCanvas" id="canvas-home"></div>
</template>

<script setup lang="ts">
	import { ref, onMounted, watch } from 'vue';
	import p5 from 'p5';
	import type { Graphics } from 'p5';
	const homeCanvas = ref<HTMLDivElement | null>(null);
	// Define the p5 sketch

	const canvasWidth = ref<number>(homeCanvas.value?.clientWidth || 400);
	const canvasHeight = ref<number>(homeCanvas.value?.clientHeight || 400);

	const sketch = (p: p5) => {
		p.setup = () => {
			if (homeCanvas.value == null) throw new Error('pee pee poo poo');

			const canvas = p.createCanvas(canvasWidth.value, canvasHeight.value);
			canvas.parent(homeCanvas.value);
		};

		p.draw = () => {
			p.background(120);
			p.ellipse(200, 200, 50, 50);
		};
	};

	onMounted(() => {
		// Initialize p5.js sketch
		new p5(sketch);
	});
</script>

<style scoped>
	#canvas-home {
		width: 100%;
		height: 100%;
	}
</style>
