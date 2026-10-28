export function formatTime(timeTicks: number) {
	const hours = Math.floor(timeTicks / 360000);
	const minutes = Math.floor((timeTicks / 6000)) % 60;
	const seconds = Math.floor((timeTicks / 100)) % 60;
	const ticks = timeTicks % 100;

	const paddedMinutes = minutes.toString().padStart(2, '0');
	const paddedSeconds = seconds.toString().padStart(2, '0');
	const paddedTicks = ticks.toString().padStart(2, '0');

	switch (true) {
		case hours > 0: {
			return `${hours}:${paddedMinutes}:${paddedSeconds}.${paddedTicks}`;
		}
		case minutes > 0: {
			return `${paddedMinutes}:${paddedSeconds}.${paddedTicks}`;
		}
		default: {
			return `${paddedSeconds}.${paddedTicks}`;
		}
	}
}

export function timeFrom(...units: number[]) {
	switch (units.length) {
		case 1:
			return timeTicks(units[0]!);

		case 2:
			return timeSeconds(units[0]!, units[1]!);

		case 3:
			return timeMinutes(units[0]!, units[1]!, units[2]!);

		case 4:
			return timeHours(units[0]!, units[1]!, units[2]!, units[3]!);
	
		default:
			throw new Error('Invalid amount of paremeters in time converter');
	}
}

const timeHours = (hours: number, minutes: number, seconds: number, ticks: number) =>
	timeMinutes(minutes, seconds, ticks)
	+ hours * 60 * 60 * 100;
	
const timeMinutes = (minutes: number, seconds: number, ticks: number) =>
	timeSeconds(seconds, ticks)
	+ minutes * 60 * 100;

const timeSeconds = (seconds: number, ticks: number) =>
	timeTicks(ticks)
	+ seconds * 100;

const timeTicks = (ticks: number) => ticks;