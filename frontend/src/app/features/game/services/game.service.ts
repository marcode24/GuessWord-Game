import { EventEmitter, Injectable } from '@angular/core';

import { IAnswer } from '@models/answer.model';
import { IQuestion } from '@models/question.model';
import { IResult } from '@models/result.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  letterEmitter: EventEmitter<string> = new EventEmitter();


  emitLetter(letter: string) {
    this.letterEmitter.emit(letter);
  }

}
