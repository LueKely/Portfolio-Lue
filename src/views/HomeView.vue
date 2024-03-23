<template>
	<main>
		<NavigationBar></NavigationBar>
		<HomeSection></HomeSection>
		<ProjectSection></ProjectSection>
		<AboutSection></AboutSection>
	</main>
	<FooterComponent></FooterComponent>
</template>

<script setup lang="ts">
	import NavigationBar from '@/components/NavigationBar.vue';
	import AboutSection from '@/layout/AboutSection.vue';
	import HomeSection from '@/layout/HomeSection.vue';
	import ProjectSection from '@/layout/ProjectSection.vue';
	import FooterComponent from '@/components/FooterComponent.vue';
</script>

<style lang="scss" scoped></style>
