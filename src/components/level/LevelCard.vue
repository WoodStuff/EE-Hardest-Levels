<script setup lang="ts">
import type { Level } from '@/types/Level';
import LevelCardBackground from './LevelCardBackground.vue';

const { level } = defineProps<{
	level: Level,
}>();
</script>

<template>
	<div
		class="level"
	>
		<LevelCardBackground :level />
		<p class="name">{{ level.name }}</p>
		<p class="author">{{ level.author }}</p>
	</div>
</template>

<style lang="scss" scoped>
.level {
	position: relative;
	width: 100%;
	height: 120px;

	border: solid 2px var(--border-color);
	border-radius: 6px;

	padding: 8px 10px;
	overflow: hidden;

	& > .name {
		font-size: 1.2em;
		font-weight: 600;
	}
}
</style>