<script setup lang="ts">
import type { Level } from '@/types/Level';
import LevelBanner from './LevelBanner.vue';
import TitleRow from './TitleRow.vue';
import TagList from '../tags/TagList.vue';
import DetailPanels from '../details/DetailPanels.vue';
import PlayButton from './PlayButton.vue';

const { level, placement } = defineProps<{
	level: Level,
	placement: number,
}>();
</script>

<template>
	<div class="level-info">
		<LevelBanner :level />
		<div class="content">
			<TitleRow :level :placement />
			<TagList :tags="level.tags" />
			<DetailPanels :level />
			<PlayButton :id="level.links.pixelwalkerId" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "../../../styles/_mixins.scss";

.level-info {
	@include mixins.big-panel;

	position: relative;
	margin: auto;

	& > .content {
		padding: 20px 40px 40px 40px;

		display: flex;
		flex-direction: column;
		gap: 16px;
	}
}
</style>