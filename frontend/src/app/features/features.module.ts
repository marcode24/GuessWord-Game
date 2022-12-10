import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { GameModule } from './game/game.module';

import { FeaturesComponent } from './features.component';

@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeModule,
    GameModule,
  ]
})
export class FeaturesModule { }
