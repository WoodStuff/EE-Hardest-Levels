<script setup lang="ts">
import type { Level } from '@/types/Level';
import LevelCardInfo from './LevelCardInfo.vue';
import LevelCardBackground from './LevelCardBackground.vue';

const { level, placement } = defineProps<{
	level: Level,
	placement: number,
}>();
</script>

<template>
	<div
		class="level"
		draggable="false"
	>
		<LevelCardBackground :level />
		<LevelCardInfo :level :placement />
	</div>
</template>

<style lang="scss" scoped>
.level {
	position: relative;
	width: 100%;
	height: 120px;

	border: solid 2px var(--border-color);
	border-radius: 6px;
	box-shadow: 0 0 16px black;
	background-color: var(--panel-color);

	overflow: hidden;
}
</style>