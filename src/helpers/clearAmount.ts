import type { LevelClears } from "@/types/Level";

export const clearAmount = (clears: LevelClears) =>
	clears == 'too many to count' ? '?' : clears.length;