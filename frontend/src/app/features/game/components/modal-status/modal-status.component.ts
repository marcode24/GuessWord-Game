import { Component, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-modal-status',
  templateUrl: './modal-status.component.html',
  styleUrls: ['./modal-status.component.scss']
})
export class ModalStatusComponent implements OnInit, OnDestroy {
  @Output() resetGame: EventEmitter<boolean> = new EventEmitter();
  @Output() newGame: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('modalStatus') modalStatus: ElementRef;
  private bodyElement: HTMLElement = document.body as HTMLBodyElement;
  private modalSubscription: Subscription;
  modalOpened: boolean = false;

  hasWon: boolean = false;

  constructor(
    private gameService: GameService
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
    setTimeout(() => {
      this.modalStatus.nativeElement.style = 'z-index: 201';
    }, 1800);
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

}
