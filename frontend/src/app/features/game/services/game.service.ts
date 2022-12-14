import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  letterEmitter: EventEmitter<string> = new EventEmitter();


  emitLetter(letter: string) {
    this.letterEmitter.emit(letter);
  }

}
