<template>
	<section id="projects">
		<h1>Projects</h1>
		<div class="card-wrapper">
			<CardLayout
				v-for="(project, index) in projectList"
				:key="index"
				v-bind="project"
				:item-no="index"
			></CardLayout>
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

	.card-wrapper {
		padding-top: 20px;
		width: 100%;
		// background-color: red;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		column-gap: 15px;
		row-gap: 70px;
		flex-wrap: wrap;
	}
</style>
