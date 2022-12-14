import { Component } from '@angular/core';
import { Subject } from 'rxjs';

import { SettingService } from '@services/setting.service';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss']
})
export class ToggleThemeComponent {
  private themeChanged: Subject<boolean> = new Subject();
  constructor(
    private settingService: SettingService,
  ) {
  }

  changeTheme(event: any) {
    const checked = event.checked;
    this.settingService.setTheme((checked) ? 'dark' : 'light' ); // set local
  }

  get isDarkMode(): boolean {
    return this.settingService.isDarkMode();
  }
}
