const SMILEYS: { [player: string]: string } = {
	"THEEGGLET": "propeller",
};

export function getSmiley(player: string) {
	return SMILEYS[player] ?? "smiley";
}