import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SettingService } from '@services/setting.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

  @ViewChild('modalSettings') modalSettings: ElementRef;
  private bodyElement: HTMLElement = document.body as HTMLBodyElement;
  private modalOpened: boolean = false;
  private modalSubscription: Subscription;

  constructor(
    private settingService: SettingService
  ) { }

  ngOnDestroy(): void {
    this.modalSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.modalSubscription = this.settingService.openModal
      .subscribe((open: boolean) => open ? this.openModal() : this.closeModal());
  }

  openModal(): void {
    this.bodyElement.classList.add('modal-open');
    this.modalSettings.nativeElement.classList.add('open');
    this.modalOpened = true;
  }

  closeModal(): void {
    this.bodyElement.classList.remove('modal-open');
    this.modalSettings.nativeElement.classList.remove('open');
    this.modalOpened = false;
  }

  @HostListener('window:keyup.esc', ['$event'])
  onKeyup(event: any) {
    if(this.modalOpened) {
        this.closeModal();
    }
  }
}
