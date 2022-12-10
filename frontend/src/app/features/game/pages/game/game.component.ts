import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as confetti from 'canvas-confetti';

import { IAnswer } from '@models/answer.model';
import { IQuestion } from '@models/question.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  answers: IAnswer[] = []
  private question: IQuestion = {
    question: 'What is the capital of France?',
    answer: 'Paris',
    topic: {
      name: 'Geography',
      description: 'Geography is the study of the lands, the features, the inhabitants, and the phenomena of Earth.',
      image: 'https://images.unsplash.com/photo-1519680772-8b5f3b5f3b1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VvcmdheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      _id: '1',
      questions: [],
      createdAt: new Date(),
    }
  }
  currentAnswer: number = 0;

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.createAnswers()
  }

  private surprise(): void {
    const canvas = this.renderer2.createElement('canvas');
    this.renderer2.appendChild(this.elementRef.nativeElement, canvas);
    const myConfetti = confetti.create(canvas, {
      resize: true, // will fit all screen sizes
      useWorker: true // will offload the canvas painting to a web worker
    });
    myConfetti({
      particleCount: 200,
      spread: 160
    });
  }

  validateAnswer(validate: boolean) {
    if(this.answers[this.currentAnswer].letters.some(answer => answer.letter === '')) return;
    // quitar con el map del endpoint
    const answerQuestion = [...this.question.answer].map((letter) => letter.toUpperCase()) as string[];
    this.answers[this.currentAnswer].letters.map((answer, index) => {
      if (answer.letter === answerQuestion[index]) {
        answer.status = 'correct';
      } else if (answerQuestion.includes(answer.letter)) {
        answer.status = 'incorrect-place';
      } else {
        answer.status = 'incorrect';
      }
    });
    if(this.answers[this.currentAnswer].letters.every(answer => answer.status === 'correct')) {
      this.answers[this.currentAnswer].correct = true;
      this.surprise();
      return
    }
    this.currentAnswer++;
    this.createAnswers();
  }

  createAnswers() {
    const newAnswer: IAnswer = {
      letters: [...this.question.answer].map((_) => ({ letter: '', status: 'not-answered'  })),
      correct: false
    }
    this.answers.push(newAnswer);
  }

  editAnswer(letter: string) {
    const firstIndexEmpty = this.answers[this.currentAnswer].letters.findIndex(answer => answer.letter === '');
    if (letter !== '' && firstIndexEmpty !== -1) {
      this.answers[this.currentAnswer].letters[firstIndexEmpty].letter = letter;
      return;
    }
    if (letter === '' && firstIndexEmpty > 0) {
      this.answers[this.currentAnswer].letters[firstIndexEmpty - 1].letter = '';
      return
    }
    if(letter === '' && firstIndexEmpty === -1) {
      this.answers[this.currentAnswer].letters[this.answers[this.currentAnswer].letters.length - 1].letter = '';
      return;
    }
  }
}
