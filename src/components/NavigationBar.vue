<template>
	<nav class="desktop">
		<div class="logo-wrapper">
			<img width="40" height="40" src="../assets/logo.svg" alt="logo" />
			<p>
				Lue <br />
				Anunciacion.
			</p>
		</div>
		<ul class="desktop">
			<li>
				<a
					@click="setSection(1)"
					:class="{ active: validateSection(currentSection, sectionList[0]) }"
					href="#home"
					>Home</a
				>
			</li>
			<li>
				<a
					@click="setSection(2)"
					:class="{ active: validateSection(currentSection, sectionList[1]) }"
					href="#projects"
					>Projects</a
				>
			</li>
			<li>
				<a
					@click="setSection(3)"
					:class="{ active: validateSection(currentSection, sectionList[2]) }"
					href="#about"
					>About</a
				>
			</li>
		</ul>
		<button class="desktop">Check My CV</button>
		<button class="burger">Borgar</button>
	</nav>

	<!-- mobile/table view -->
	<aside class="burger">
		<ul>
			<li>
				<a
					@click="setSection(1)"
					:class="{ active: validateSection(currentSection, sectionList[0]) }"
					href="#home"
					>Home</a
				>
			</li>
			<li>
				<a
					@click="setSection(2)"
					:class="{ active: validateSection(currentSection, sectionList[1]) }"
					href="#projects"
					>Projects</a
				>
			</li>
			<li>
				<a
					@click="setSection(3)"
					:class="{ active: validateSection(currentSection, sectionList[2]) }"
					href="#about"
					>About</a
				>
			</li>
			<li><button>Check My CV</button></li>
		</ul>
	</aside>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	type ValidatorFunction = (value: number, base: number) => boolean;

	const currentSection = ref<number>(1);
	const sectionList = ref<number[]>([1, 2, 3]);

	const setSection = (sectionNo: number) => {
		return (currentSection.value = sectionNo);
	};

	const validateSection = ref<ValidatorFunction>(
		(value: number, base: number) => {
			return value == base;
		}
	);
</script>

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

		padding: 10px;

		* {
			font-size: var(--fs-sm);
		}
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
		width: 100dvw;
		display: sticky;
		top: 0;

		@include break.desktop {
			display: none;
		}
	}

	a {
		text-decoration: none;
		color: var(--clr-brown-400);
	}

	a:hover {
		text-decoration: underline;
	}

	a.active {
		text-decoration: underline;
	}

	.logo-wrapper {
		display: flex;
		gap: 10px;
		justify-items: center;
		align-items: center;
	}
	.logo-wrapper > p {
		font-family: var(--ff-bold);
	}
</style>
