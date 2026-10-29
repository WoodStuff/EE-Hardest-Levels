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
			pixelwalkerId: 'legacy:PWnsRoOK0_cEI',
			completionVideo: 'atTXGHhoUKc',
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
	{
		title: 'Tea Land II',
		author: 'LICTOR',
		stars: 3,

		tags: ['Precision', 'T-Jumps', 'Balanced'],

		minigames: 13,
		clears: ['THEEGGLET', 'JOEY'],
		size: '200x200',

		links: {
			pixelwalkerId: 'legacy:PWmVP98I4LcEI',
			completionVideo: 'V1oDf7BlxUk',
		},

		records: {
			firstClear: {
				player: 'THEEGGLET',
				date: new Date(2025, 11, 18),
			},
			speedrun: {
				player: 'THEEGGLET',
				ticks: timeFrom(2, 38, 45, 18),
			},
			deaths: {
				player: 'THEEGGLET',
				deaths: 2606,
			},
		}
	},
	{
		title: 'Yrros',
		author: 'LICTOR',
		stars: 3,

		tags: ['Multijump', 'Balanced'],

		minigames: 10,
		clears: ['ALESMILE', 'JOEY'],
		size: '200x200',

		links: {
			pixelwalkerId: 'legacy:PWublM6W4RcEI',
		},

		records: {
			firstClear: {
				player: 'ALESMILE',
				date: new Date(2018, 2, 10),
			},
			deaths: {
				player: 'ALESMILE',
				deaths: 2824,
			},
		}
	},
	{
		title: 'boring minigame',
		author: 'TUREWJYG',
		stars: 3,

		tags: ['Overall'],

		minigames: 40,
		clears: ['DARVI', 'JOEY', 'TURTLECAT'],
		size: '636x50',

		links: {
			pixelwalkerId: 'legacy:PWLqV8_8fgcEI',
			completionVideo: 'bB-ZpH1lWi8',
		},

		records: {
			firstClear: {
				player: 'DARVI',
				date: new Date(2023, 7, 26),
			},
		}
	},
	{
		title: 'TTL: Spike Edition 2',
		author: 'THEGAME',
		stars: 3,

		tags: ['Precision', 'Remix', 'Overall', 'Unbalanced'],

		minigames: 100,
		clears: ['JOEY', 'THEEGGLET'],
		size: '200x200',

		links: {
			pixelwalkerId: 'r3eb2215a94119f',
		},

		records: {
			firstClear: {
				player: 'JOEY',
				date: new Date(2026, 5, 1),
			},
			speedrun: {
				player: 'JOEY',
				ticks: timeFrom(4, 13, 41, 47),
			},
			deaths: {
				player: 'JOEY',
				deaths: 3092,
			},
		}
	},
	{
		title: 'Octo\'s Fun Castle',
		author: 'PINGOHITS',
		stars: 3,

		tags: ['Overall'],

		minigames: 92,
		clears: ['ALESMILE', 'ORANGECRIX', 'JOEY', 'TUREWJYG', 'THEEGGLET'],
		size: '200x200',

		links: {
			pixelwalkerId: 'legacy:PWwIUGWdaJcEI',
			completionVideo: 'jYkiK2PU-xw',
		},

		records: {
			firstClear: {
				player: 'ALESMILE',
				date: new Date(2018, 3, 23),
			},
			deaths: {
				player: 'THEEGGLET',
				deaths: 7715,
			},
		}
	},
	{
		title: 'Bad EE Level 3',
		author: 'MASTER1',
		stars: 3,

		tags: ['BEEL', 'Unbalanced'],

		minigames: 40,
		clears: ['ALESMILE', 'JOEY', 'THEEGGLET'],
		size: '300x300',

		links: {
			pixelwalkerId: 'legacy:PWHmOGhAhzcEI',
			completionVideo: 'UP3fdsQGvEo',
		},

		records: {
			firstClear: {
				player: 'ALESMILE',
			},
			speedrun: {
				player: 'THEEGGLET',
				ticks: timeFrom(2, 28, 14, 94),
			},
			deaths: {
				player: 'THEEGGLET',
				deaths: 1432,
			},
		}
	},
	{
		title: 'Bad EE Level 8',
		author: 'MASTER1',
		stars: 2,

		tags: ['BEEL', 'Balanced'],

		minigames: 40,
		clears: ['ALESMILE', 'ORANGECRIX', 'TUREWJYG', 'THEBESTGAMER2', 'JOEY', 'THEEGGLET', 'QUITIN'],
		size: '300x300',

		links: {
			pixelwalkerId: 'legacy:PWp8s4xhwHcUI',
			completionVideo: '5sDDTVpzXTk',
		},

		records: {
			firstClear: {
				player: 'ALESMILE',
				date: new Date(2018, 9, 11),
			},
			deaths: {
				player: 'JOEY',
				deaths: 2672,
			},
		}
	},
	{
		title: 'The Triple Suck',
		author: 'MASTER1',
		stars: 2,

		tags: ['Precision', 'BEEL', 'Edges', 'Balanced'],

		minigames: 61,
		clears: ['JOEY', 'THEEGGLET', 'RONJOHNSON'],
		size: '300x300',

		links: {
			pixelwalkerId: 'legacy:PWpxlqyhMyckI',
			completionVideo: '6SKvxX1bkEw',
		},

		records: {
			firstClear: {
				player: 'JOEY',
				date: new Date(2023, 1, 4),
			},
			speedrun: {
				player: 'THEEGGLET',
				ticks: timeFrom(3, 3, 11, 35),
			},
			deaths: {
				player: 'THEEGGLET',
				deaths: 1766,
			},
		}
	},
	{
		title: 'CTM 8',
		author: 'MASTER1',
		stars: 2,

		tags: ['Endurance', 'CTM'],

		minigames: 16,
		clears: ['JOEY'],
		size: '300x300',

		links: {
			pixelwalkerId: 'legacy:PWe2kUkMsrcUI',
		},

		records: {
			firstClear: {
				player: 'JOEY',
				date: new Date(2022, 10, 29)
			},
		}
	},
	{
		title: 'Forgotten Helix',
		author: 'MUFFIN',
		stars: 2,

		tags: ['Precision', 'Spike Hell', 'Helix', 'Remix', 'Overall', 'Levitation', 'Multijump'],

		minigames: 52,
		clears: ['ORANGECRIX', 'ALESMILE', 'TUREWJYG', 'TORA', 'THEBESTGAMER2', 'JOEY', '2B55B5G', 'THEEGGLET', 'DARVI', 'QUITIN'],
		size: '400x200',

		links: {
			pixelwalkerId: 'legacy:PW0B5RcvBbb0I',
			completionVideo: 'FGkCF9R6XwI',
		},

		records: {
			firstClear: {
				player: 'ORANGECRIX',
				date: new Date(2018, 9, 3),
			},
			speedrun: {
				player: 'THEEGGLET',
				ticks: timeFrom(1, 16, 20, 33),
			},
			deaths: {
				player: 'THEEGGLET',
				deaths: 846,
			},
		}
	},
];