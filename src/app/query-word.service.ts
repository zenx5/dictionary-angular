import { Injectable } from '@angular/core';
import { DictionaryResult, ResponseQuery } from 'src/assets/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QueryWordService {

  constructor() { }

  async getWord(word:string):Promise<ResponseQuery> {
    const response = await fetch(`${environment.apiUrl}/${word}`)
    const data = await response.json()
    if( data.title ) {
      return {
        error: data,
        success: []
      }
    }else{
      return {
        error:null,
        success: data
      }
    }
  }
}
