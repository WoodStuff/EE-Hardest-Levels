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
@use "../../styles/_mixins.scss";

.level {
	@include mixins.big-panel;
	@include mixins.hover;
	
	position: relative;
	width: 100%;
	height: 120px;

	overflow: hidden;
}
</style>