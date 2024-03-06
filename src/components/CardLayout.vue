<template>
	<article>
		<h1>{{ stringfyNumber }}</h1>
		<p>{{ props.title }}</p>
		<div class="tag-wrapper">
			<p v-for="(tag, index) in props.tags" :key="index">
				{{ tag }}
			</p>
		</div>
		<p>{{ props.description }}</p>
		<p>{{ props.link }}</p>
	</article>
</template>

<script setup lang="ts">
	import type { Project } from '../types/cardInterface';
	import { computed } from 'vue';
	interface FinalProject extends Project {
		itemNo: number;
	}

	const stringfyNumber = computed(() => {
		if (props.itemNo + 1 <= 10) {
			return '0' + (props.itemNo + 1).toString();
		} else {
			return (props.itemNo + 1).toString();
		}
	});

	const props = defineProps<FinalProject>();
</script>

<style lang="scss" scoped>
	p,
	a {
		font-size: var(--fs-sm);
	}

	article {
		border-block: 1px solid var(--clr-brown-200);
	}

	h1 {
		border-bottom: 1px solid var(--clr-brown-200);
	}

	.tag-wrapper {
		border-bottom: 1px solid var(--clr-brown-200);
	}
	h1 + p {
		border-bottom: 1px solid var(--clr-brown-200);
		font-family: var(--ff-regular);
		margin-bottom: 1vh;
	}
</style>
