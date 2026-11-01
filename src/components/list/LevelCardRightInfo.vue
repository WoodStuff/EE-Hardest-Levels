<script setup lang="ts">
import type { Level } from '@/types/Level';
import Stars from '../misc/Stars.vue';
import { FlagIcon, Grid2X2Icon } from "@lucide/vue";

const { level } = defineProps<{
	level: Level,
}>();
</script>

<template>
	<div class="info">
		<Stars
			class="stars"
			:amount="level.stars"
		/>
		<span
			class="data"
			title="How many players cleared this world?"
		>
			<span>{{ level.clears.length }}</span>
			<FlagIcon :size="18" />
		</span>
		<span
			class="data"
			title="How many minigames does this world have?"
		>
			<span>{{ level.minigames }}</span>
			<Grid2X2Icon :size="18" />
		</span>
	</div>
</template>

<style lang="scss" scoped>
.info {
	position: absolute;
	top: 12px;
	right: 12px;
	text-shadow: black 0 0 10px;

	display: flex;
	flex-direction: column;
	align-items: end;

	& > .stars {
		font-size: 1.33em;
		font-weight: bold;
	}
	& > .data {
		display: flex;
		align-items: center;
		gap: 4px;

		cursor: help;
	}
}
</style>