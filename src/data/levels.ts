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

		tags: ['Endurance', 'Remix', 'Levitation'],

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
];