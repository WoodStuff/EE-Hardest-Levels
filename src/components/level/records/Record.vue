<script setup lang="ts">
import Player from '@/components/misc/Player.vue';

const { name, player, value } = defineProps<{
	name: string,
	player: string,
	value: string,
}>();
</script>

<template>
	<div class="record">
		<span class="name">{{ name }}</span>
		<Player class="player" :player />
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
		font-size: 1.1em;
		width: 192px;
	}

	& > .value {
		font-size: 1.1em;
	}
}
</style>