<template>
	<article>
		<h1>{{ stringfyNumber }}</h1>
		<div class="text-wrapper">
			<p>{{ props.title }}</p>
		</div>
		<div class="tag-wrapper">
			<p v-for="(tag, index) in props.tags" :key="index">
				{{ tag }}
			</p>
		</div>
		<div class="text-wrapper">
			<p>{{ props.description }}</p>
		</div>
		<div class="text-wrapper">
			<span>Link: &nbsp;</span>
			<a :href="props.link" target="_blank">{{ props.link }}</a>
		</div>
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
	// todo:
	//add clamp width and clamp height
	// add bg on button cv
	// if it is has height then must use flex
	article {
		min-width: 200px;
		width: 20rem;
		max-width: 300px;
		display: flex;
		flex-direction: column;
	}

	p,
	a {
		font-size: var(--fs-sm);
	}

	h1 {
		border-block: 1px solid var(--clr-brown-200);
	}

	.tag-wrapper {
		border-bottom: 1px solid var(--clr-brown-200);
	}
	.text-wrapper,
	.tag-wrapper {
		border-bottom: 1px solid var(--clr-brown-200);
		font-family: var(--ff-regular);
		padding: 5px;
	}
	article > .text-wrapper:nth-child(2) > p {
		font-family: var(--ff-bold);
	}
	.text-wrapper:last-child {
		padding-top: 20px;
	}

	a > span {
		font-family: var(--ff-bold);
	}
</style>
