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
	<RouterLink
		class="level"
		:to="`/level/${placement}`"
		draggable="false"
	>
		<LevelCardBackground :level />
		<LevelCardInfo :level :placement />
	</RouterLink>
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

	&:hover {
		filter: brightness(110%);
	}
	&:active {
		filter: brightness(90%);
	}
}
</style>