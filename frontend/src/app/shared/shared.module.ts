import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleThemeComponent } from './toggle-theme/toggle-theme.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    ToggleThemeComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleThemeComponent,
    LoaderComponent
  ],
})
export class SharedModule { }
