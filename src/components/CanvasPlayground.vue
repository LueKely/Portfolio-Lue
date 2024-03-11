<template>
	<div ref="homeCanvas" id="canvas-home"></div>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import p5 from 'p5';

	const homeCanvas = ref<HTMLDivElement | null>(null);
	// Define the p5 sketch

	const sketch = (p: p5) => {
		p.setup = () => {
			if (homeCanvas.value == null) throw new Error('pee pee poo poo');

			const canvas = p.createCanvas(
				homeCanvas.value?.clientWidth,
				homeCanvas.value?.clientHeight
			);
			canvas.parent(homeCanvas.value);
		};

		p.windowResized = () => {
			if (homeCanvas.value == null) throw new Error('pee pee poo poo');
			console.log('i have resized');

			const width = homeCanvas.value.clientWidth;
			const height = homeCanvas.value.clientHeight;
			console.log(width, height);
			p.resizeCanvas(width, height);
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
		flex: 1;
	}
</style>
