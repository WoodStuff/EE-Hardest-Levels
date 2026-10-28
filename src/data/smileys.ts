const SMILEYS: { [player: string]: string } = {
	'THEEGGLET': 'propeller',
	'TURTLECAT': 'bird',
	'JOEY': 'devil_skull',
	'ALESMILE': 'angel',
	'ORANGECRIX': 'shades',
	'QUITIN': 'earmuffs',
	'TUREWJYG': 'lol',
	'THEBESTGAMER2': 'surprised',
	'TORA': 'devil_skull',
	'ETERNALINFERNO': 'red_dragon',
	'SABER12': 'sleepy',
	'2B55B5G': 'pigtails',
	'ELEMENTCOMPLETE': 'bruce',
	'DARVI': 'sleepy',
	'RONJOHNSON': 'extra_grin',
	'OCTO': 'earmuffs',
	'THWINKT': 'hooded',
};

export function getSmiley(player: string) {
	return SMILEYS[player] ?? 'smiley';
}