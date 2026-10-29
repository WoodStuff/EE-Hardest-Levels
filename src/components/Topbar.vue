<template>
	<div class="topbar">
		<RouterLink
			class="home-link"
			:to="'/'"
			draggable="false"
		>
			<img class="smiley" src="/smileys/red_ninja.png" draggable="false" />
			EE Hardest Levels
		</RouterLink>
	</div>
</template>

<style lang="scss" scoped>
.topbar {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: var(--topbar-height);

	box-shadow: 0 0 4px black;
	background-color: var(--panel-color);
	border-bottom: solid 2px var(--panel-border-color);
	user-select: none;

	.home-link {
		display: flex;
		align-items: center;
		gap: 4px;

		font-size: 1.25em;
		font-weight: bold;
		text-decoration: none;
		
		& > .smiley {
			width: 26px;
			height: 26px;
			image-rendering: pixelated;
			user-select: none;
		}
	}
}
</style>