import { Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import * as confetti from 'canvas-confetti';

import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-modal-status',
  templateUrl: './modal-status.component.html',
  styleUrls: ['./modal-status.component.scss']
})
export class ModalStatusComponent implements OnInit, OnDestroy {
  @Output() resetGame: EventEmitter<boolean> = new EventEmitter();
  @Output() newGame: EventEmitter<boolean> = new EventEmitter();
  @Input() moreInfoURL: string;
  @ViewChild('modalStatus') modalStatus: ElementRef;
  private bodyElement: HTMLElement = document.body as HTMLBodyElement;
  private modalSubscription: Subscription;
  modalOpened: boolean = false;

  hasWon: boolean = false;

  constructor(
    private gameService: GameService,
    private renderer2: Renderer2,
    private elementRef: ElementRef,
  ) { }
  ngOnDestroy(): void {
    this.modalSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.modalSubscription = this.gameService.hasWonEmitter
      .subscribe((hasWon: boolean) => this.openModal(hasWon));
  }

  openModal(hasWon: boolean): void  {
    this.hasWon = hasWon;
    this.bodyElement.classList.add('modal-open');
    this.modalStatus.nativeElement.classList.add('open');
    if(hasWon) this.surprise();
    this.modalOpened = true;
  }

  closeModal(): void {
    this.bodyElement.classList.remove('modal-open');
    this.modalStatus.nativeElement.classList.remove('open');
    this.modalOpened = false;
  }

  @HostListener('window:keyup.esc', ['$event'])
  onKeyup(event: any) {
    if(this.modalOpened) {
        this.closeModal();
    }
  }

  changeGame(): void {
    this.hasWon ? this.newGame.emit(true) : this.resetGame.emit(true);
    this.closeModal();
  }

  surprise(): void {
    const canvas = this.renderer2.createElement('canvas');
    this.renderer2.appendChild(this.elementRef.nativeElement, canvas);
    const myConfetti = confetti.create(canvas, { resize: true, useWorker: true });
    myConfetti({ particleCount: 200, spread: 160 });
    setTimeout(() => {
      this.renderer2.removeChild(this.elementRef.nativeElement, canvas);
    }, 3500);
  }

}
