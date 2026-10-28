<script setup lang="ts">
import type { Level } from '@/types/Level';

const { level, placement } = defineProps<{
	level: Level,
	placement: number,
}>();
</script>

<template>
	<div class="title-row">
		<h1 class="title">{{ level.title }}</h1>
		<p class="author">by {{ level.author }}</p>

		<span class="placement">#{{ placement }}</span>
		<span class="stars">{{ level.stars }}★</span>
	</div>
</template>

<style lang="scss" scoped>
.title-row {
	position: relative;

	margin: 20px 0;

	& > .title {
		font-size: 2.5em;
		font-weight: 600;
		text-align: center;
	}

	& > .author {
		text-align: center;
	}

	& > .placement, & > .stars {
		position: absolute;
		top: 0;

		font-size: 2.5em;
		font-weight: 600;
	}
	& > .placement { left: 0; }
	& > .stars { right: 0; }
}
</style>