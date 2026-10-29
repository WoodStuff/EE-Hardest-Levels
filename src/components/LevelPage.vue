<script setup lang="ts">
import { LEVELS } from '@/data/levels';
import LevelInfo from './level/info/LevelInfo.vue';
import { computed } from 'vue';
import ClearVideo from './level/video/ClearVideo.vue';
import LevelRecords from './level/records/LevelRecords.vue';
import LevelClears from './level/clears/LevelClears.vue';

const { placement } = defineProps<{
	placement: number,
}>();

const level = computed(() => LEVELS[placement - 1]);
</script>

<template>
	<div class="level-page" v-if="level">
		<LevelInfo :level :placement />
		<ClearVideo
			v-if="level.links.completionVideo"
			:video="level.links.completionVideo"
		/>
		<LevelClears :clears="level.clears" />
		<LevelRecords :records="level.records" />
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