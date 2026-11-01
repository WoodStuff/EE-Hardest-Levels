import { LEVELS } from "@/data/levels";
import { PLACEMENTS } from "@/data/placements";

export const levelAt = (placement: number) => LEVELS[PLACEMENTS[placement - 1]!];