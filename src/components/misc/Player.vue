<script setup lang="ts">
const { player } = defineProps<{
	player: string,
}>();
</script>

<template>
	<div class="player">
		<img class="smiley" src="/smiley.png" draggable="false">
		{{ player }}
	</div>
</template>

<style lang="scss" scoped>
.player {
	display: flex;
	align-items: center;
	gap: 10px;

	& > .smiley {
		width: 24px;
		height: 24px;
		image-rendering: pixelated;
		user-select: none;
	}
}
</style>