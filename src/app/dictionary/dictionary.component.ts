import { Component, Input } from '@angular/core';
import { resultData } from 'src/assets/result';
import { DictionaryResult, Phonetic } from 'src/assets/type';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent {
  result:Array<DictionaryResult> = resultData
  showIndex!:boolean;
  showType!:boolean;
  showPron!:boolean;
  showPlay!:boolean;
  showExam!:boolean;

  constructor( public settings:SettingsService ) {
    const options = settings.getOptions()
    console.log( options )
    this.showIndex = options.find( option => option.name=='show_enum')?.value || false;
    this.showType = options.find( option => option.name=='show_type')?.value || false;
    this.showPron = options.find( option => option.name=='show_pron')?.value || false;
    this.showPlay = options.find( option => option.name=='show_play')?.value || false;
    this.showExam = options.find( option => option.name=='show_exam')?.value || false;
  }



  getPhonetic(element:DictionaryResult, index:number):Array<string|Phonetic|null> {
    const { phonetic, phonetics } = element;
    if(phonetics?.length>0){
      return [phonetics[index]?.text ?? phonetic ?? "", phonetics[index]?.audio ?? null ]
    }
    else if(phonetic) return [`${phonetic}`, null]
    return ["", null]
  }

  getPronunciation(element:DictionaryResult, index:number): any {
    if( this.showPron ) {
      const phonetic = this.getPhonetic(element, index)
      return  this.showPlay ?  phonetic : phonetic[0];
    }
    return null;
  }


}
