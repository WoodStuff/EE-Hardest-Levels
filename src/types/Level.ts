import type { Tag } from "@/data/tags";

export interface Level {
	title: string;
	author: string;
	stars: number;

	tags: Tag[];

	minigames: number;
	clears: string[];
	size: string;
	
	links: LevelLinks;

	records: LevelRecords;
}

export interface LevelLinks {
	pixelwalkerId: string;
	completionVideo: string;
}

export interface LevelRecords {
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
	}
}