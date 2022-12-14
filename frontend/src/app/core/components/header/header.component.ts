import { Component } from '@angular/core';
import { SettingService } from '@services/setting.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private setingService: SettingService
  ) { }

  openModal(): void {
    this.setingService.openModal.emit(true);
  }

}
