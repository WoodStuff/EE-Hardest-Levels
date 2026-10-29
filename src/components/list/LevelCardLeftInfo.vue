<script setup lang="ts">
import type { Level } from '@/types/Level';

const { level, placement } = defineProps<{
	level: Level,
	placement: number,
}>();
</script>

<template>
	<div class="info">
		<p class="title">#{{ placement }} - {{ level.title }}</p>
		<p class="author">{{ level.author }}</p>
	</div>
</template>

<style lang="scss" scoped>
.info {
	position: absolute;
	top: 12px;
	left: 12px;
	text-shadow: black 0 0 10px;

	display: flex;
	flex-direction: column;

	& > .title {
		font-size: 1.33em;
		font-weight: bold;
	}
}
</style>