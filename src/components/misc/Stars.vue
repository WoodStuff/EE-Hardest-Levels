<script setup lang="ts">
import { StarIcon } from "@lucide/vue";

const { amount, iconSize = 24 } = defineProps<{
	amount: number,
	iconSize?: number,
}>();
</script>

<template>
	<span class="stars">
		<span>{{ amount }}</span>
		<StarIcon
			fill="#ffffffe6"
			stroke-width="0"
			:size="iconSize"
		/>
	</span>
</template>

<style lang="scss" scoped>
.stars {
	display: flex;
	align-items: center;
	gap: 4px;
}
</style>