import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { KeyboardComponent } from './keyboard/keyboard.component';
import { ModalStatusComponent } from './modal-status/modal-status.component';

@NgModule({
  declarations: [
    KeyboardComponent,
    ModalStatusComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    KeyboardComponent,
    ModalStatusComponent,
  ]
})
export class ComponentsModule { }
