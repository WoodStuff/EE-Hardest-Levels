<script setup lang="ts">
import type { Level } from '@/types/Level';
import { computed } from 'vue';

const { level } = defineProps<{
	level: Level,
}>();

const filename = computed(() => level.title.replaceAll(':', ''));
</script>

<template>
	<img
		class="background"
		:src="`/EE-Hardest-Levels/banners/${filename}.png`"
		draggable="false"
	>
</template>

<style lang="scss" scoped>
.background {
	image-rendering: pixelated;
	mask-image: url("/banner-mask.png");
	opacity: 0.5;

	user-select: none;
}
</style>