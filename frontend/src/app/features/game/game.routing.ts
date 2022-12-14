import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { GameComponent } from "./pages/game/game.component";

const childRoutes: Routes = [
  {
    path: 'play/:topicId',
    component: GameComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(childRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class GameRoutingModule {}
