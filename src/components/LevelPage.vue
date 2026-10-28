<script setup lang="ts">
import { LEVELS } from '@/data/levels';
import LevelInfo from './level/LevelInfo.vue';
import { computed } from 'vue';
import ClearVideo from './level/ClearVideo.vue';

const { placement } = defineProps<{
	placement: number,
}>();

const level = computed(() => LEVELS[placement - 1]);
</script>

<template>
	<div class="level-page" v-if="level">
		<LevelInfo :level :placement />
		<ClearVideo :video="level.links.completionVideo" />
	</div>
</template>

<style lang="scss" scoped>
.level-page {
	width: var(--content-width);
	margin: auto;

	display: flex;
	flex-direction: column;
	gap: 16px;
}
</style>