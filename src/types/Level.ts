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
}

interface LevelLinks {
	pixelwalkerId: string;
	completionVideo: string;
}