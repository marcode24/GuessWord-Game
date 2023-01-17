import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';

import { ComponentsModule } from './components/components.module';

import { GameComponent } from './pages/game/game.component';

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    SharedModule
  ]
})
export class GameModule { }
