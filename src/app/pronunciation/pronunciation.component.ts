import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pronunciation',
  templateUrl: './pronunciation.component.html',
  styleUrls: ['./pronunciation.component.scss']
})
export class PronunciationComponent {

  @ViewChild('player') player!:ElementRef<HTMLAudioElement>
  @Input() transcription!:string
  @Input() audio!:string

  playable:boolean = false;

  play():void {
    if( this.playable ) {
      this.player.nativeElement.play()
    }
  }

  ngOnInit(){
    this.playable = !!this.audio
  }

}
