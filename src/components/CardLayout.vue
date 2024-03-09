<template>
	<article>
		<h1>{{ stringfyNumber }}</h1>
		<div class="text-wrapper">
			<p>{{ props.title }}</p>
		</div>
		<ul class="tag-wrapper">
			<li
				v-for="(tag, index) in props.tags"
				:style="{ background: tag.color }"
				:key="index"
			>
				<p>
					{{ tag.name }}
				</p>
			</li>
		</ul>
		<div class="text-wrapper">
			<p>{{ props.description }}</p>
		</div>
		<div class="text-wrapper link">
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

		min-height: 300px;
		height: 40vh;
		max-height: 350px;

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
		display: flex;
		align-items: center;
		justify-content: flex-start;
		list-style: none;
		column-gap: 5px;
		li {
			padding: 2px 8px;
			border-radius: 100px;
			p {
				font-size: clamp(0.9rem, 2.5vh, 1rem);
				color: white;
			}
		}
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

	article > .text-wrapper:nth-child(4) {
		flex: 1;
	}
	.text-wrapper:last-child {
		// padding-top: 20px;
		flex: 0.5;
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
	}

	span {
		font-family: var(--ff-bold);
		font-size: var(--fs-sm);
	}

	.link {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-inline: 10px;
		a {
			width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
</style>
