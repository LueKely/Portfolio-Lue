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
	</nav>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import { useRouter } from 'vue-router';

	const router = useRouter();
	const currentSection = ref<number>(1);

	const setSection = (sectionNo: number) => {
		return (currentSection.value = sectionNo);
	};

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
		display: flex;
		align-items: center;
		justify-self: center;

		list-style: none;

		column-gap: 10px;
	}

	a.desktop {
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
