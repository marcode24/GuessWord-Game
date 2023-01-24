import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';

import { SettingService } from '@services/setting.service';
import { stepsTour } from '@constants/tour.constant';
import { ITour } from '@interfaces/tour.interface';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit, OnDestroy {
  @ViewChild('progress') progress: ElementRef;
  @ViewChild('slidePage') slidePage: ElementRef;
  @ViewChild('pages') pagesWrapper: ElementRef;
  @ViewChildren('step') steps: QueryList<ElementRef>;
  @ViewChildren('page') pages: QueryList<ElementRef>;
  @ViewChild('modalTour') modalTour: ElementRef;

  private marginLeft: number = 100;
  private modalSubscription: Subscription;
  currentStep: number = 1;
  itemStepsTour: ITour[];
  firstItemStepTour: ITour;
  final: boolean = false;
  stepsTour: ITour[];

  constructor(
    private settingService: SettingService
  ) { }

  ngOnDestroy(): void {
    this.modalSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.modalSubscription = this.settingService.showModalEmitter.subscribe(resp => resp ? this.showModal(): this.hideModal());
    const [ first, ...rest ] = stepsTour;
    this.stepsTour = stepsTour;
    this.firstItemStepTour = first;
    this.itemStepsTour = rest;
  }

  private showModal(): void {
    this.modalTour.nativeElement.classList.add('open');
  }

  private hideModal(): void {
    this.modalTour.nativeElement.classList.remove('open');
  }

  prevStep(): void {
    this.currentStep--;
    this.slidePage.nativeElement.style.marginLeft = this.getNewMargin(true);
    if(this.currentStep < 1) {
      this.currentStep = 1;
    }
    this.updateSteps();
  }

  nextStep(): void {
    this.slidePage.nativeElement.style.marginLeft = this.getNewMargin();
    this.currentStep++;
    if (this.currentStep > this.steps.length) {
      this.currentStep = this.steps.length;
    }
    this.updateSteps();
  }

  private getNewMargin(prev: boolean = false): string {
    const newCurrent = !prev ? this.currentStep : this.currentStep - 1;
    return (newCurrent * -this.marginLeft).toString().concat('%');
  }

  closeTour(): void {
    this.settingService.changeTourVisibilityLocal();
  }

  private updateSteps(): void {
    this.steps.forEach((step, i) => {
      if (i < this.currentStep) step.nativeElement.classList.add('active');
      else step.nativeElement.classList.remove('active');
    });
    const activeSteps = document.querySelectorAll('.active');
    this.progress.nativeElement.style.width =  ((activeSteps.length - 1) / (this.steps.length - 1)) * 100 + "%";
    this.final = this.currentStep === this.steps.length;
  }
}
