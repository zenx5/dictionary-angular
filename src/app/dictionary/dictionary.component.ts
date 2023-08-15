import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { resultData } from 'src/assets/result';
import { DictionaryResult, Phonetic, ResponseError } from 'src/assets/type';
import { SettingsService } from '../settings.service';
import { QueryWordService } from '../query-word.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent {
  @ViewChild('word') word!:ElementRef<HTMLInputElement>
  result:Array<DictionaryResult> = []
  loading:boolean = false
  error:boolean = false
  errorMessage:string = ""
  showIndex!:boolean;
  showType!:boolean;
  showPron!:boolean;
  showPlay!:boolean;
  showExam!:boolean;

  constructor( public settings:SettingsService, public queries:QueryWordService ) {
    const options = settings.getOptions()
    console.log( options )
    this.showIndex = options.find( option => option.name=='show_enum')?.value || false;
    this.showType = options.find( option => option.name=='show_type')?.value || false;
    this.showPron = options.find( option => option.name=='show_pron')?.value || false;
    this.showPlay = options.find( option => option.name=='show_play')?.value || false;
    this.showExam = options.find( option => option.name=='show_exam')?.value || false;
  }

  async searchWord(){
    this.loading = true
    this.error = false
    const word = this.word.nativeElement.value
    try {
      if( word.length === 0 ) throw new Error("Not Work")
      const { error, success } = await this.queries.getWord(word)
      if( error ) {
        throw new Error(error.title)
      } else {
        this.result = success
      }
    } catch(error:any) {
      this.error = true
      this.errorMessage = error.message
    } finally {
      this.loading = false
    }
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
