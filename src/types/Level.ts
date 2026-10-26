import type { Tag } from "@/data/tags";

export interface Level {
	title: string;
	author: string;
	video: string;
	tags: Tag[];
	completions: string[];
}