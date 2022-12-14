import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FeaturesRoutingModule } from "./features/features.routing";
import { GameRoutingModule } from "./features/game/game.routing";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
    FeaturesRoutingModule,
    GameRoutingModule,
  ],
})
export class AppRoutingModule {}
