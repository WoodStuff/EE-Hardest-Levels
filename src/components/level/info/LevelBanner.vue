<script setup lang="ts">
import type { Level } from '@/types/Level';

const { level } = defineProps<{
	level: Level,
}>();
</script>

<template>
	<img
		class="banner"
		:src="`/banners/${level.title}.png`"
		draggable="false"
	>
</template>

<style lang="scss" scoped>
.banner {
	height: 128px;
	mask: linear-gradient(black 50%, transparent 100%);
	image-rendering: pixelated;

	user-select: none;
}
</style>