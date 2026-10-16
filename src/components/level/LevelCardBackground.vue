<template>
	<div class="background">
		<img src="/image.png">
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
	opacity: 20%;
}
</style>