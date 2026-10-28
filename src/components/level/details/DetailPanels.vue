<script setup lang="ts">
import type { Level } from '@/types/Level.ts';
import DetailPanel from './DetailPanel.vue';

const { level } = defineProps<{
	level: Level,
}>();
</script>

<template>
	<div class="panels">
		<DetailPanel
			:description="'minigames'"
			:value="level.minigames"
		/>
		<DetailPanel
			:description="'winners'"
			:value="level.clears.length"
		/>
		<DetailPanel
			:description="'world size'"
			:value="level.size"
		/>
	</div>
</template>

<style lang="scss" scoped>
.panels {
	display: flex;
	gap: 16px;
}
</style>