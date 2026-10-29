<script setup lang="ts">
import type { LevelRecords } from '@/types/Level.ts';
import Record from './Record.vue';
import { formatTime } from '@/helpers/timeConversion.ts';

const { records } = defineProps<{
	records: LevelRecords,
}>();
</script>

<template>
	<div class="level-records">
		<h1 class="header">Records</h1>
		<div class="record-container">
			<Record
				v-if="records.firstClear"
				name="First clear"
				:player="records.firstClear.player"
				:value="records.firstClear.date?.toDateString() ?? ''"
			/>
			<Record
				v-if="records.speedrun"
				name="Speedrun"
				:player="records.speedrun.player"
				:value="formatTime(records.speedrun.ticks)"
			/>
			<Record
				v-if="records.deaths"
				name="Deaths"
				:player="records.deaths.player"
				:value="records.deaths.deaths.toString()"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "../../../styles/_mixins.scss";

.level-records {
	@include mixins.big-panel;

	display: flex;
	flex-direction: column;
	gap: 20px;

	padding: 20px 40px;

	& > .header {
		font-size: 2.5em;
		font-weight: 600;
		text-align: center;
	}

	& > .record-container {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
}
</style>