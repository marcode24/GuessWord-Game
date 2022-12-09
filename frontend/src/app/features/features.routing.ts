import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FeaturesComponent } from "./features.component";

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    loadChildren: () => import('./home/home.routing').then(m => m.HomeRoutingModule),
  },
  {
    path: 'game',
    component: FeaturesComponent,
    loadChildren: () => import('./game/game.routing').then(m => m.GameRoutingModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class FeaturesRoutingModule { }
