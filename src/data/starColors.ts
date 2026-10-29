const DEFAULT_STAR_COLOR = '#ffffff'
const STAR_COLORS: { [star: number]: string } = {
	1: '#8e7cc3',
	2: '#c27ba0',
	3: '#e06666',
	4: '#f6b26b',
	5: '#ffd966',
};

export function getStarColor(star: number) {
	return STAR_COLORS[star] ?? DEFAULT_STAR_COLOR;
}