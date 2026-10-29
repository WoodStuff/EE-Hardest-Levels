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

		tags: ['Precision', 'BEEL', 'Edges', 'Levitation'],

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
			completionVideo: 'VKW_-rkL114',
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

		tags: ['Spike Hell', 'Helix', 'Overall', 'Unbalanced'],

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
];