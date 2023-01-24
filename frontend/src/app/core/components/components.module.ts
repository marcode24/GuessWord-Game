import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { TourComponent } from './tour/tour.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SettingsComponent,
    TourComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SettingsComponent,
    TourComponent
  ],
})
export class ComponentsModule { }
