export interface ILetter {
  letter: string;
  status?: 'correct' | 'incorrect' | 'incorrect-place'| 'not-answered';
}


export interface IAnswer {
  letters: ILetter[];
  correct: boolean;
}
