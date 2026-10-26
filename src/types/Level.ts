import type { Tag } from "@/data/tags";

export interface Level {
	title: string;
	author: string;
	stars: number;

	tags: Tag[];
	completions: string[];
	
	video: string;
}