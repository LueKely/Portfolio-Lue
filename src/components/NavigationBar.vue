<template>
	<nav class="desktop">
		<div class="logo-wrapper">
			<img src="../assets/logo.svg" alt="logo" />
			<p>
				Lue <br />
				Anunciacion.
			</p>
		</div>
		<ul class="desktop">
			<li>
				<a
					@click="setSection(1)"
					:class="{
						active: currentSectionName == 'home',
					}"
					href="#home"
					>Home</a
				>
			</li>
			<li>
				<a
					@click="setSection(2)"
					:class="{
						active: currentSectionName == 'projects',
					}"
					href="#projects"
					>Projects</a
				>
			</li>
			<li>
				<a
					@click="setSection(3)"
					:class="{
						active: currentSectionName == 'about',
					}"
					href="#about"
					>About</a
				>
			</li>
		</ul>
		<a class="desktop" href="/Resume.pdf" target="_blank">Check My CV</a>
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
	import { ref, onMounted } from 'vue';
	import { useRouter } from 'vue-router';

	type ValidatorFunction = (value: number, base: number) => boolean;

	const router = useRouter();
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

	const currentSectionName = ref<string | null>('');
	onMounted(() => {
		const options = {
			root: null, // Use the viewport as the root
			rootMargin: '0px',
			threshold: 0.5, // Adjust the threshold value here (50% of the target element is visible)
		};
		const oberserver: IntersectionObserver = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						currentSectionName.value = entry.target.getAttribute('id');

						router.push(`#${entry.target.getAttribute('id')}`);
					}
				});
			},
			options
		);

		document.querySelectorAll('section').forEach((section) => {
			oberserver.observe(section);
		});
	});
</script>

<style scoped lang="scss">
	nav.desktop {
		@include break.tablet {
			// display: none;
		}
		background-color: var(--clr-brown-100);
		position: sticky;
		top: 0;

		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 10px clamp(0.5rem, 2vw, 1.5rem);
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

	a.desktop {
		@include break.tablet {
			display: none;
		}
		@include break.phone {
			display: none;
		}
		border-radius: 100px;
		padding: 5px 10px;
		background-color: var(--clr-brown-300);
		color: var(--clr-brown-100) !important;
		cursor: pointer;
		font-family: var(--ff-bold);
	}

	a.desktop:hover {
		text-decoration: none;
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

	.logo-wrapper > img {
		aspect-ratio: 1/1;
		width: clamp(1.2rem, 5vw, 2.5rem);
	}
	.logo-wrapper > p {
		font-family: var(--ff-bold);
	}
</style>
