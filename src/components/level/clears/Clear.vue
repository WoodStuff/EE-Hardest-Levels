<script setup lang="ts">
import Player from '@/components/misc/Player.vue';

const { player } = defineProps<{
	player: string,
}>();
</script>

<template>
	<div class="clear">
		<Player class="player" :player />
	</div>
</template>

<style lang="scss" scoped>
@use "../../../styles/_mixins.scss";

.clear {
	@include mixins.chip;

	padding: 8px;
	border-radius: 16px;
}
</style>