<template>
	<section id="home">
		<!-- text -->
		<div class="text-container">
			<div class="intro">
				<h1>
					Hi, I'm <br />
					Lue Anunciacion.
				</h1>
				<p>
					A Web Developer Based <br />
					on the Philippines. <br />
					Always looking for new <br />inspirations.
				</p>
			</div>

			<div class="ending">
				<p>
					Creating Projects ,<br />
					Learning Trends,<br />
					Collaborating with Colleagues.
				</p>
				<div class="button-wrapper">
					<a href="/Resume.pdf" target="_blank">Check My CV</a>
				</div>
			</div>
		</div>
		<!-- canvas -->
		<div class="canvas-container">
			<CanvasHome></CanvasHome>
		</div>
	</section>
</template>
<style scoped lang="scss">
	p,
	h1,
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

	.text-container {
		height: 100%;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
	}

	.intro > p {
		margin-top: 1vw;
	}

	.ending {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;

		text-align: end;
		padding-block: 2rem;
	}

	.button-wrapper {
		margin-top: 10px;
		padding-top: 10px;

		width: 100%;
		a {
			cursor: pointer;
			font-family: var(--ff-bold);
			text-decoration: none;
		}

		a:hover {
			text-decoration: underline;
		}
	}
	.canvas-container {
		@include break.tablet {
			display: none;
		}

		height: 100%;
		flex: 0.8;
		padding: 10px;
	}
</style>
<script setup lang="ts">
	import CanvasHome from '@/components/CanvasHome.vue';
</script>
