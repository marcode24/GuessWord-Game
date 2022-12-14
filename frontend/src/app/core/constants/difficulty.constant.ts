import { Difficulty } from "@enums/difficulty.enum";
import { IDifficulty } from "@interfaces/difficulty.interface";

export const difficulties: IDifficulty[] = [
  {
    name: Difficulty.BEGINNER,
    maxTries: 16,
    alias: 'Principiante'
  },
  {
    name: Difficulty.EASY,
    maxTries: 12,
    alias: 'Fácil'
  },
  {
    name: Difficulty.MEDIUM,
    maxTries: 8,
    alias: 'Medio'
  },
  {
    name: Difficulty.HARD,
    maxTries: 5,
    alias: 'Difícil'
  },
  {
    name: Difficulty.EXPERT,
    maxTries: 2,
    alias: 'Experto'
  }
];
