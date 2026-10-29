import { timeFrom } from '@/helpers/timeConversion';
import type { Level } from '@/types/Level';

/*
================================
            TEMPLATE
================================

	{
		title: '',
		author: '',
		stars: 0,

		tags: [],

		minigames: 0,
		clears: [],
		size: '',

		links: {
			pixelwalkerId: '',
			completionVideo: '',
		},

		records: {
			firstClear: {
				player: '',
				date: new Date(),
			},
			speedrun: {
				player: '',
				ticks: timeFrom(),
			},
			deaths: {
				player: '',
				deaths: 0,
			},
		}
	},
*/

export const LEVELS: Level[] = [
	{
		title: 'A Real Trisaster',
		author: 'MASTER1',
		stars: 5,

		tags: ['Precision', 'BEEL', 'Remix', 'Edges', 'Levitation'],

		minigames: 55,
		clears: ['THEEGGLET', 'JOEY'],
		size: '300x300',

		links: {
			pixelwalkerId: 'legacy:PWHhyBkt0XckI',
			completionVideo: 'svPrB-CodUs',
		},

		records: {
			firstClear: {
				player: 'THEEGGLET',
				date: new Date(2025, 8, 28),
			},
			speedrun: {
				player: 'THEEGGLET',
				ticks: timeFrom(28, 21, 53, 45),
			},
			deaths: {
				player: 'THEEGGLET',
				deaths: 14773,
			},
		}
	},
	{
		title: 'Tea Land',
		author: 'LICTOR',
		stars: 5,
		
		tags: ['T-Jumps', 'Unbalanced'],

		minigames: 18,
		clears: ['TURTLECAT', 'THEEGGLET'],
		size: '200x200',
		
		links: {
			pixelwalkerId: 'legacy:PWGQRxGEYScEI',
			completionVideo: 'YKlXHJDZslw',
		},

		records: {
			firstClear: {
				player: 'TURTLECAT',
				date: new Date(2025, 6, 11),
			},
		}
	},
	{
		title: 'Spike Helixory',
		author: 'THEEGGLET',
		stars: 5,

		tags: ['Spike Hell', 'Helix', 'Remix', 'Overall', 'Unbalanced'],

		minigames: 60,
		clears: ['THEEGGLET'],
		size: '200x200',

		links: {
			pixelwalkerId: 'hn9z013uvjsmwez',
			completionVideo: 'bXVN4ipMtOM',
		},

		records: {
			firstClear: {
				player: 'THEEGGLET',
				date: new Date(2025, 10, 28),
			},
			deaths: {
				player: 'THEEGGLET',
				deaths: 10258,
			},
		}
	},
	{
		title: 'CTM39',
		author: 'THEEGGLET',
		stars: 5,

		tags: ['Endurance', 'CTM', 'Remix', 'Levitation'],

		minigames: 1,
		clears: ['JOEY', 'THEEGGLET'],
		size: '50x50',

		links: {
			pixelwalkerId: 're0be9a2730bb4e',
			completionVideo: 'GtReSkIvc1Y',
		},

		records: {
			firstClear: {
				player: 'JOEY',
				date: new Date(2025, 10, 27),
			},
		}
	},
	{
		title: 'Infinity Pain',
		author: 'KIRANINJA',
		stars: 5,

		tags: ['Spike Hell', 'Painlike', 'Overall'],

		minigames: 93,
		clears: ['ALESMILE', 'ORANGECRIX', 'JOEY', 'THEEGGLET', 'QUITIN'],
		size: '200x200',

		links: {
			pixelwalkerId: 'legacy:PWE7zf-vf9cEI',
			completionVideo: 'U2J21zllD2k',
		},

		records: {
			firstClear: {
				player: 'ALESMILE',
				date: new Date(2019, 0, 11),
			},
			deaths: {
				player: 'THEEGGLET',
				deaths: 14677,
			},
		}
	},
	{
		title: 'CTM 9',
		author: 'MASTER1',
		stars: 4,

		tags: ['Endurance', 'CTM'],

		minigames: 16,
		clears: ['JOEY'],
		size: '300x300',

		links: {
			pixelwalkerId: 'legacy:PWaDY9ZeX9cUI',
		},

		records: {
			firstClear: {
				player: 'JOEY',
				date: new Date(2026, 7, 7),
			},
		}
	},
	{
		title: 'CTM 4',
		author: 'MASTER1',
		stars: 4,

		tags: ['Endurance', 'CTM'],

		minigames: 16,
		clears: ['JOEY'],
		size: '300x300',

		links: {
			pixelwalkerId: 'legacy:PWWpnc9tlZcUI',
			completionVideo: '8k1TkiKzPn8',
		},

		records: {
			firstClear: {
				player: 'JOEY',
				date: new Date(2022, 9, 12),
			},
		}
	},
	{
		title: 'Bad EE Level 4',
		author: 'MASTER1',
		stars: 4,

		tags: ['BEEL', 'Overall', 'Levitation', 'Unbalanced'],

		minigames: 40,
		clears: ['JOEY', 'THEEGGLET'],
		size: '300x300',

		links: {
			pixelwalkerId: 'legacy:PWx8GZHg60cEI',
			completionVideo: 'rVyhqeaA-M0',
		},

		records: {
			firstClear: {
				player: 'JOEY',
				date: new Date(2024, 9, 10),
			},
			deaths: {
				player: 'THEEGGLET',
				deaths: 1651,
			},
		}
	},
	{
		title: 'Easy',
		author: 'TUREWJYG',
		stars: 4,

		tags: ['Precision', 'Edges'],

		minigames: 0,
		clears: ['THEEGGLET'],
		size: '100x100',

		links: {
			pixelwalkerId: 'r67ea7840544bde',
			completionVideo: 'ku1SIFE4TrE',
		},

		records: {
			firstClear: {
				player: 'THEEGGLET',
				date: new Date(2025, 12, 28),
			},
			speedrun: {
				player: 'THEEGGLET',
				ticks: timeFrom(3, 25, 52, 1),
			},
			deaths: {
				player: 'THEEGGLET',
				deaths: 3214,
			},
		}
	},
	{
		title: 'Be gone.',
		author: 'KIRANINJA',
		stars: 4,

		tags: ['Precision', 'T-Jumps', 'Balanced'],

		minigames: 74,
		clears: ['ALESMILE', 'ORANGECRIX', 'TUREWJYG', 'THEBESTGAMER2', 'TORA', 'ETERNALINFERNO', 'JOEY', 'SABER12', '2B55B5G', 'ELEMENTCOMPLETE', 'TURTLECAT', 'THEEGGLET', 'QUITIN'],
		size: '200x200',

		links: {
			pixelwalkerId: 'r67ea7840544bde',
			completionVideo: 'ku1SIFE4TrE',
		},

		records: {
			firstClear: {
				player: 'ALESMILE',
				date: new Date(2017, 12, 15),
			},
			speedrun: {
				player: 'THEEGGLET',
				ticks: timeFrom(1, 57, 13, 2),
			},
			deaths: {
				player: 'THEEGGLET',
				deaths: 1742,
			},
		}
	},
];