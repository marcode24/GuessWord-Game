import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {
  @Output() letter: EventEmitter<string> = new EventEmitter();
  @Output() enter: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  emitLetter(letter: string) {
    this.letter.emit(letter.toUpperCase());
  }

  emitBackspace() {
    this.letter.emit('');
  }

  emitEnter() {
    this.enter.emit(true);
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const letter = event.key.toUpperCase();
    if (letter.match(/[A-Z]/) && letter.length === 1) this.emitLetter(letter)
    if (event.key === 'Backspace') this.emitLetter('');
    if (event.key === 'Enter') this.emitEnter();
  }
}
