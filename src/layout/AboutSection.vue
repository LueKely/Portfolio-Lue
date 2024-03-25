<template>
	<section id="about">
		<div class="canvas-wrapper">
			<CanvasAbout></CanvasAbout>
		</div>
		<div class="text-wrapper">
			<div class="wrapper">
				<div>
					<h1>About Me</h1>
				</div>
				<div class="underline-wrapper skill-container">
					<h2 class="skill">Skills</h2>
				</div>
				<ul>
					<li>HTML, CSS and Javascript</li>
					<li>JS Front & Backend Frameworks</li>
					<li>JS libraries like Typescript</li>
					<li>Databases such as Mongo</li>
					<li>GLSL</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import CanvasAbout from '@/components/CanvasAbout.vue';
</script>

<style scoped lang="scss">
	.text-wrapper {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		flex-direction: column;
		flex: 1;
		height: 100%;
	}
	.canvas-wrapper {
		padding-right: 20px;
		height: 100%;

		flex: 0.8;
		display: flex;
	}

	.underline-wrapper {
		border-top: 1px solid var(--clr-brown-200);
		// margin-top: 20px;
	}

	ul {
		list-style-position: inside;
		text-indent: -2rem;
		padding-inline: 3rem;
		font-size: var(--fs-m);
		text-align: unset;
		font-family: var(--ff-light);
	}

	.skill {
		margin-top: 40px;
		margin-bottom: 1rem;
	}
	.skill-container {
	}
</style>
