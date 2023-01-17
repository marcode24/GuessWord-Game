import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  letterEmitter: EventEmitter<string> = new EventEmitter();
  hasWonEmitter: EventEmitter<boolean> = new EventEmitter();

  emitLetter(letter: string) {
    this.letterEmitter.emit(letter);
  }

  openModal(hasWon: boolean) {
    this.hasWonEmitter.emit(hasWon);
  }

}
