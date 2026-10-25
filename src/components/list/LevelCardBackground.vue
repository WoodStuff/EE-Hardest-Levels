<script setup lang="ts">
import type { Level } from '@/types/Level';

const { level } = defineProps<{
	level: Level,
}>();
</script>

<template>
	<img
		class="background"
		:src="`/banners/${level.title}.png`"
		draggable="false"
	>
</template>

<style lang="scss" scoped>
.background {
	background-position: center;
	image-rendering: pixelated;
	mask-image: url("/banner-mask.png");
	opacity: 0.5;

	user-select: none;
}
</style>