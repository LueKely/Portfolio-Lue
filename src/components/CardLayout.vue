<template>
	<article>
		<h1>{{ props.itemNo }}</h1>
		<p>{{ props.title }}</p>
		<div class="tag-wrapper">
			<p v-for="(tag, index) in props.tags" :key="index">
				{{ tag }}
			</p>
		</div>
	</article>
</template>

<script setup lang="ts">
	/* __placeholder__ */
	import type { Project } from '../types/cardInterface';
	interface FinalProject extends Project {
		itemNo: number;
	}

	const props = defineProps<FinalProject>();
</script>

<style lang="scss" scoped></style>
