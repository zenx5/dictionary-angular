import { Component } from '@angular/core';
import { SettingsService } from '../settings.service';
import { SettingOption } from 'src/assets/type';

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss']
})
export class ConfigureComponent {

  options:Array<SettingOption> = []

  constructor(public settings:SettingsService) {
    this.options = settings.getOptions()
  }

  isChecked(value:boolean):string {
    return value ? "checked" : ""
  }

  toggleValue(name:string, value:boolean):void {
    this.settings.update(name, !value)
  }

}
