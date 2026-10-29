<script setup lang="ts">
import { getStarColor } from "@/data/starColors";
import { StarIcon } from "@lucide/vue";
import { computed } from "vue";

const { amount, iconSize = 24 } = defineProps<{
	amount: number,
	iconSize?: number,
}>();

const color = computed(() => getStarColor(amount));
const style = { color: color.value };
</script>

<template>
	<span
		class="stars"
	>
		<span :style>{{ amount }}</span>
		<StarIcon
			:color
			:fill="color"
			:size="iconSize"
			:stroke-width="1"
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