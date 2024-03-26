<template>
	<section id="about">
		<div class="canvas-wrapper">
			<CanvasAbout></CanvasAbout>
		</div>
		<div class="text-wrapper">
			<div class="list">
				<h1>About Me</h1>
				<!-- bio -->
				<ul>
					<li>He/Him</li>
					<li>21 Years Old</li>
					<li>Based In The Philippines</li>
					<li>3rd Year College Student</li>
					<li>In CvSU Bacoor</li>
				</ul>
				<!-- skills -->
				<ul>
					<li>HTML, CSS and JS</li>
					<li>JS Frameworks</li>
					<li>SQL (MySql & Postgres)</li>
					<li>SASS & Tailwind</li>
					<li>Typescript</li>
					<li>Express Js</li>
					<li>Mongo DB</li>
					<li>GLSL</li>
				</ul>
			</div>

			<di class="titles">
				<h1>a</h1>
				<h2>Biography</h2>
				<ul>
					<li>a</li>
					<li>a</li>
					<li>a</li>
					<li>a</li>
					<li>a</li>
				</ul>
				<h2>Skills</h2>
			</di>
		</div>
	</section>
</template>

<script setup lang="ts">
	import CanvasAbout from '@/components/CanvasAbout.vue';
</script>

<style scoped lang="scss">
	p,
	.list > ul > li,
	h2,
	.list > h1,
	button {
		animation-name: fadeToColor;
		animation-duration: 250ms;
		animation-timing-function: ease-in-out;
		animation-fill-mode: forwards;
	}

	@keyframes fadeToColor {
		from {
			color: transparent;
		}
		to {
			color: var(--clr-brown-300);
		}
	}
	.titles,
	.list {
		height: 100%;
		// background-color: red;
	}
	h1 {
		margin-bottom: 1rem;
	}
	h2 {
		font-family: var(--ff-medium);
	}
	.list {
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
		text-align: end;
		flex-direction: column;
		flex: 0.95;
	}

	.titles {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;
		text-align: start;
	}

	.list > ul {
		margin-top: calc(var(--fs-l) + 5px);
	}

	.titles > ul > li {
		user-select: none;
		color: transparent;
	}
	.titles > h1 {
		user-select: none;
		color: transparent;
	}

	.text-wrapper {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: row;
		text-align: end;
		flex: 1;
		height: 100%;
	}
	.canvas-wrapper {
		padding-right: 20px;
		height: 100%;

		flex: 0.6;
		display: flex;
	}

	ul {
		width: 100%;
		list-style: none;
		font-size: var(--fs-m);

		font-family: var(--ff-light);
	}
</style>
