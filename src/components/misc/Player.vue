<script setup lang="ts">
import { getSmiley } from '@/data/smileys';
import { computed } from 'vue';

const { player } = defineProps<{
	player: string,
}>();

const smiley = computed(() => getSmiley(player));
</script>

<template>
	<div class="player">
		<img class="smiley" :src="`/EE-Hardest-Levels/smileys/${smiley}.png`" draggable="false">
		{{ player }}
	</div>
</template>

<style lang="scss" scoped>
.player {
	display: flex;
	align-items: center;
	gap: 4px;

	& > .smiley {
		width: 26px;
		height: 26px;
		image-rendering: pixelated;
		user-select: none;
	}
}
</style>