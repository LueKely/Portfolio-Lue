<template>
	<section id="projects">
		<h1>Projects</h1>
		<div class="cardWrapper">
			<div v-for="(project, index) in projectList" :key="index">
				<CardLayout v-bind="project" :item-no="index"></CardLayout>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import projects from '../data/project.json';
	import CardLayout from '@/components/CardLayout.vue';
	import type { Project } from '@/types/cardInterface';
	import { ref } from 'vue';

	const projectList = ref<Project[]>(projects);
</script>

<style scoped lang="scss">
	#projects {
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
	}
</style>
