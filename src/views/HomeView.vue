<template>
	<main>
		<NavigationBar></NavigationBar>
		<HomeSection></HomeSection>
		<ProjectSection></ProjectSection>
		<AboutSection></AboutSection>
	</main>
</template>

<script setup lang="ts">
	import NavigationBar from '@/components/NavigationBar.vue';
	import AboutSection from '@/layout/AboutSection.vue';
	import HomeSection from '@/layout/HomeSection.vue';
	import ProjectSection from '@/layout/ProjectSection.vue';
</script>

<style lang="scss" scoped></style>
