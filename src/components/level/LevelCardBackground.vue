<script setup lang="ts">
import type { Level } from '@/types/Level';

const { level } = defineProps<{
	level: Level,
}>();
</script>

<template>
	<div class="background">
		<img :src="`/banners/${level.name}.png`">
	</div>
</template>

<style lang="scss" scoped>
.background {
	position: absolute;
	top: -2px;
	left: -2px;

	background-position: center;
	image-rendering: pixelated;
	z-index: -1;
	opacity: 30%;
}
</style>