import type { Tag } from "@/data/tags";

export interface Level {
	title: string;
	author: string;
	stars: number;

	tags: Tag[];

	minigames: number;
	completions: string[];
	size: string;
	
	links: LevelLinks;

	records: LevelRecords;
}

interface LevelLinks {
	pixelwalkerId: string;
	completionVideo: string;
}

interface LevelRecords {
	firstClear?: {
		player: string;
		date: Date;
	}
	speedrun?: {
		player: string;
		ticks: number;
	}
	deaths?: {
		player: string;
		deaths: number;
	} | false
}