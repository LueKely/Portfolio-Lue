<template>
	<section id="about">
		<div class="text-wrapper">
			<div class="wrapper">
				<div>
					<h1>About Me</h1>
				</div>
				<div class="underline-wrapper">
					<h2 class="skill">Skills</h2>
				</div>
				<ul>
					<li>HTML, CSS and Javascript</li>
					<li>JS Front & Backend Frameworks</li>
					<li>JS libraries like Typescript</li>
					<li>Databases such as Mongo</li>
				</ul>
			</div>

			<div class="link-wrapper">
				<div>
					<div class="underline-wrapper">
						<h2>Github</h2>
					</div>
					<a target="_blank" href="https://github.com/LueKely">@Lue Kely</a>
				</div>
				<div>
					<div class="underline-wrapper"><h2>Email</h2></div>
					<p class="email">test@gmail.com</p>
				</div>
			</div>
		</div>
		<div class="canvas-wrapper">
			<CanvasAbout></CanvasAbout>
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
		height: 100%;

		flex: 1.4;
		display: flex;
	}

	.underline-wrapper {
		border-top: 1px solid var(--clr-brown-200);
		// margin-top: 20px;
	}

	.email {
		text-decoration: underline;
	}
	ul {
		list-style-position: inside;
		text-indent: -2rem;
		padding-inline: 3rem;
		font-size: var(--fs-m);
		text-align: unset;
		font-family: var(--ff-light);
	}

	.link-wrapper {
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}
	.skill {
		margin-bottom: 1rem;
	}
</style>
