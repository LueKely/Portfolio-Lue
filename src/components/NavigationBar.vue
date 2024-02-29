<template>
	<nav class="desktop">
		<div>
			<p>
				Lue <br />
				Anunciacion
			</p>
		</div>
		<ul class="desktop">
			<li><a href="#home">Home</a></li>
			<li><a href="#projects">Projects</a></li>
			<li><a href="#about">About</a></li>
		</ul>
		<button class="desktop">Check My CV</button>
		<button class="burger">Borgar</button>
	</nav>

	<!-- mobile/table view -->
	<aside class="burger">
		<li><a href="#home">Home</a></li>
		<li><a href="#projects">Projects</a></li>
		<li><a href="#about">About</a></li>
		<button>Check My CV</button>
	</aside>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	nav.desktop {
		@include break.tablet {
			// display: none;
		}

		position: sticky;
		top: 0;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	ul.desktop {
		@include break.tablet {
			display: none;
		}
		display: flex;
		align-items: center;
		justify-self: center;

		list-style: none;

		column-gap: 10px;
	}
	button.burger {
		@include break.desktop {
			display: none;
		}

		@include break.tablet {
			display: block;
		}
	}

	button.desktop {
		@include break.tablet {
			display: none;
		}
		@include break.phone {
			display: none;
		}
	}

	aside.burger {
		display: sticky;
		top: 0;

		@include break.desktop {
			display: none;
		}
	}
</style>
