import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SettingService } from '@services/setting.service';
import Storage from '@utils/storage.util';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements AfterViewInit {

  constructor(private settingService: SettingService) { }

  ngAfterViewInit(): void {
    let showTour = JSON.parse(Storage.getItem('tour'));
    if ( showTour === null) showTour = true;
    this.settingService.showModalEmitter.emit(showTour);
  }

}
