<script setup lang="ts">
const { name, player, value } = defineProps<{
	name: string,
	player: string,
	value: string,
}>();
</script>

<template>
	<div class="record">
		<span class="name">{{ name }}</span>
		<div class="player">
			<img class="smiley" src="/smiley.png" draggable="false">
			{{ player }}
		</div>
		<span class="value">{{ value }}</span>
	</div>
</template>

<style lang="scss" scoped>
@use "../../../styles/_mixins.scss";

.record {
	@include mixins.chip;

	width: 100%;
	height: 50px;

	display: flex;
	align-items: center;

	padding: 12px;

	& > .name {
		font-size: 1.25em;
		width: 128px;
	}

	& > .player {
		display: flex;
		align-items: center;
		gap: 10px;
		
		font-size: 1.1em;
		width: 192px;

		& > .smiley {
			width: 24px;
			height: 24px;
			image-rendering: pixelated;
			user-select: none;
		}
	}

	& > .value {
		font-size: 1.1em;
	}
}
</style>