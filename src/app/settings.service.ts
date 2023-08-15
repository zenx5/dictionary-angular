import { Injectable } from '@angular/core';
import { SettingOption } from 'src/assets/type';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private options:Array<SettingOption> = [
    {
      name: "show_enum",
      label: "Show enumeration",
      value: false
    },
    {
      name: "show_type",
      label: "Show word type",
      value: false
    },
    {
      name: "show_pron",
      label: "Show pronuntiation",
      value: false
    },
    {
      name: "show_play",
      label: "Enable play pronuntiation",
      value: false
    },
    {
      name: "show_exam",
      label: "Show examples",
      value: false
    }
  ]

  constructor() {
    this.options = this.getOptions()
  }

  getFromStorage( key:string ): boolean {
    const value = localStorage.getItem(key)
    if( value === null ) return false
    return JSON.parse( value )
  }

  update(key:string, value:boolean):void {
    const index = this.options.findIndex( option => option.name===key )
    if( index>=0 ) {
      this.options[index].value = value
      localStorage.setItem( key, String(value) )
    }
  }

  getOptions():Array<SettingOption> {
    return this.options.map( option => ({
      ...option,
      value: this.getFromStorage(option.name)
    }))
  }
}
