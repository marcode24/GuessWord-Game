import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as confetti from 'canvas-confetti';

import { IAnswer } from '@models/answer.model';
import { IQuestion } from '@models/question.model';
import { QuestionService } from '@services/question.service';
import { SettingService } from '@services/setting.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  answers: IAnswer[] = []
  question: IQuestion;
  currentAnswer: number = 0;
  routerSubscription: Subscription;
  loading: boolean = true;
  triesRemaining: number;
  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef,
    private activatedRoute: ActivatedRoute,
    private questionService: QuestionService,
    private router: Router,
    private readonly settingService: SettingService,
    private readonly gameService: GameService,
  ) {}
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.routerSubscription = this.activatedRoute.params.subscribe(({ topicId }) => {
      topicId && topicId.length === 24 ? this.getRandomQuestion(topicId) : this.router.navigate(['/']);
    });
  }

  private getRandomQuestion(topicId: string): void {
    this.questionService.getRandomQuestion(topicId).subscribe({
      next: (question: IQuestion) => {
        this.question = question;
        this.answers = [];
        this.triesRemaining = this.settingService.getMaxTries();
        this.currentAnswer = 0;
        this.createAnswers();
      },
      complete: () =>  this.loading = false,
    });
  }

  private surprise(): void {
    const canvas = this.renderer2.createElement('canvas');
    this.renderer2.appendChild(this.elementRef.nativeElement, canvas);
    const myConfetti = confetti.create(canvas, { resize: true, useWorker: true });
    myConfetti({ particleCount: 200, spread: 160 });
  }

  validateAnswer(_: boolean) {
    if(
      this.answers[this.currentAnswer].letters.some(answer => answer.letter === '')
      || this.triesRemaining === 0
    ) return;

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
      this.gameService.openModal(true);
      return
    }
    this.triesRemaining--;
    this.currentAnswer++;
    this.triesRemaining > 0 ? this.createAnswers() : this.gameService.openModal(false);
  }

  createAnswers() {
    const newAnswer: IAnswer = {
      letters: [...this.question.answer].map((_) => ({ letter: '', status: 'not-answered'  })),
      correct: false
    }
    this.answers.push(newAnswer);
  }

  editAnswer(letter: string): void {
    const firstIndexEmpty = this.answers[this.currentAnswer].letters.findIndex(answer => answer.letter === '');
    if (letter !== '' && firstIndexEmpty !== -1) {
      this.answers[this.currentAnswer].letters[firstIndexEmpty].letter = letter;
      return;
    }
    if (letter === '' && firstIndexEmpty > 0) {
      this.answers[this.currentAnswer].letters[firstIndexEmpty - 1].letter = '';
      return;
    }
    if(letter === '' && firstIndexEmpty === -1) {
      this.answers[this.currentAnswer].letters[this.answers[this.currentAnswer].letters.length - 1].letter = '';
      return;
    }
  }

  loadNewQuestion(_: boolean): void {
    this.getRandomQuestion(this.question.topic._id as string);
  }

  resetGame(_?: boolean): void {
    this.answers = [];
    this.triesRemaining = this.settingService.getMaxTries();
    this.currentAnswer = 0;
    this.createAnswers();
  }
}
