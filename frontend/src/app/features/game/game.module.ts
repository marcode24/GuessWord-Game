import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  ]
})
export class GameModule { }
