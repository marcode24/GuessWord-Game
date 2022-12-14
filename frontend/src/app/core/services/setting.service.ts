import { EventEmitter, Injectable } from '@angular/core';
import { Difficulty } from '@enums/difficulty.enum';

import Storage from '@utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private bodyElement = document.body as HTMLBodyElement;

  openModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  setTheme(theme: 'dark' | 'light'): void {
    if(theme === 'light') {
      this.bodyElement.classList.remove('dark');
    }
    if(theme === 'dark') {
      this.bodyElement.classList.add('dark');
    }
    this.savePreference(theme);
  }

  private savePreference(theme: 'dark'| 'light') {
    Storage.deleteLocalStorage('theme');
    Storage.saveLocalStorage('theme', theme);
  }

  isDarkMode(): boolean {
    return this.bodyElement.classList.contains('dark');
  }

  setDifficulty(difficulty: Difficulty): void {
    Storage.deleteLocalStorage('difficulty');
    Storage.saveLocalStorage('difficulty', difficulty);
  }

  getDifficultySelected(): Difficulty {
    return Storage.getItem('difficulty') as Difficulty || Difficulty.BEGINNER;
  }

  getMaxTries(): number {
    const difficultySelected = this.getDifficultySelected();
    switch (difficultySelected) {
      case Difficulty.BEGINNER:
        return 16;
      case Difficulty.EASY:
        return 12;
      case Difficulty.MEDIUM:
        return 8;
      case Difficulty.HARD:
        return 5;
      case Difficulty.EXPERT:
        return 2;
      default:
        return 16;
    }
  }

}
